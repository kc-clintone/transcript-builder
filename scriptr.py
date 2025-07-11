import os
import sys
import subprocess
import traceback
import re
import json
from urllib.parse import urlparse, parse_qs
from pathlib import Path

def get_video_id(url):
    query = urlparse(url)
    if query.hostname in ('youtu.be', 'www.youtu.be'):
        return query.path[1:]
    if query.hostname in ('www.youtube.com', 'youtube.com'):
        if query.path == '/watch':
            return parse_qs(query.query).get('v', [None])[0]
        elif query.path.startswith('/embed/'):
            return query.path.split('/')[2]
        elif query.path.startswith('/v/'):
            return query.path.split('/')[2]
    return None

def download_subtitles(video_url):
    print("⬇️ Downloading auto-generated subtitles with yt-dlp...")
    command = [
        "yt-dlp",
        "--write-auto-sub",
        "--sub-lang", "en",
        "--skip-download",
        "--cookies", "cookies.txt",
        video_url
    ]
    subprocess.run(command, check=True)
    print("✅ Subtitle downloaded.")

def clean_vtt_file(vtt_path):
    lines = Path(vtt_path).read_text(encoding="utf-8").splitlines()
    transcript = []
    for line in lines:
        if re.match(r"^\d{2}:\d{2}:\d{2}\.\d{3}", line):
            continue
        if "-->" in line or line.strip() == '' or line.strip().isdigit():
            continue
        transcript.append(line.strip())
    return transcript

def save_transcript(transcript_lines, title_slug):
    os.makedirs("transcripts", exist_ok=True)

    # Save as .txt
    with open(f"transcripts/{title_slug}.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(transcript_lines))

    # Save as .md
    with open(f"transcripts/{title_slug}.md", "w", encoding="utf-8") as f:
        f.write("# Transcript\n\n")
        for line in transcript_lines:
            f.write(f"- {line}\n")

    # Save as .json
    with open(f"transcripts/{title_slug}.json", "w", encoding="utf-8") as f:
        json.dump({"transcript": transcript_lines}, f, indent=2)

    print("✅ Saved transcript as .txt, .md, and .json in `transcripts/` folder.")

def main():
    if len(sys.argv) < 2:
        print("Usage: python youtube_transcript_fetcher.py <YouTube Video URL>")
        sys.exit(1)

    video_url = sys.argv[1]
    video_id = get_video_id(video_url)
    if not video_id:
        print("❌ Could not extract video ID.")
        sys.exit(1)

    print(f"🔍 Processing video ID: {video_id}")

    try:
        download_subtitles(video_url)
        print("✅ Subtitles downloaded.")

        vtt_files = list(Path(".").glob(f"*{video_id}*.vtt"))
        if not vtt_files:
            raise FileNotFoundError(f"No .vtt file found for video ID: {video_id}")
        vtt_file = vtt_files[0]
        print(f"✅ Located VTT file: {vtt_file.name}")

        transcript_lines = clean_vtt_file(vtt_file)
        print("✅ Transcript cleaned.")

        save_transcript(transcript_lines, video_id)
        print("✅ Transcript saved.")

        # Delete the original VTT file
        vtt_file.unlink()
        print(f"🧹 Deleted original .vtt file: {vtt_file.name}")

    except Exception as e:
        print(f"❌ Failed to process transcript: {e}")
        traceback.print_exc()
