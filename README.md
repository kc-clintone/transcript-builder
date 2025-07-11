# transcript-builder

A simple Python script to download and clean auto-generated YouTube video transcripts (subtitles) using [yt-dlp](https://github.com/yt-dlp/yt-dlp). The script extracts the transcript from a YouTube video and saves it in `.txt`, `.md`, and `.json` formats.

## Features

- Downloads auto-generated English subtitles from YouTube videos.
- Cleans and formats the transcript for readability.
- Saves the transcript in multiple formats: plain text, Markdown, and JSON.
- Organizes transcripts in a dedicated `transcripts/` folder.

## Requirements

- Python 3.7+
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) (must be installed and available in your PATH)
- A valid `cookies.txt` file (if required for private or age-restricted videos)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kc-clintone/transcript-builder.git
   cd transcript-builder
   ```
