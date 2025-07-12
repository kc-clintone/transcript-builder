async function submitRequest() {
  const url = document.getElementById("youtube-url").value.trim();
  const responseBox = document.getElementById("response");

  if (!url.startsWith("http")) {
    responseBox.innerHTML = "❌ Please enter a valid YouTube URL.";
    return;
  }

  const repo = "your-username/transcript-builder";
  const token = "ghp_your_personal_access_token"; // 🔒 for private/test use only
  const apiUrl = `https://api.github.com/repos/${repo}/issues`;

  const issue = {
    title: "Transcript Request",
    body: url,
    labels: ["transcript"]
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Authorization": `token ${token}`,
        "Accept": "application/vnd.github+json"
      },
      body: JSON.stringify(issue)
    });

    if (res.ok) {
      const data = await res.json();
      responseBox.innerHTML = `✅ Request submitted! <a href="${data.html_url}" target="_blank">View Issue</a>`;
    } else {
      const err = await res.json();
      responseBox.innerHTML = `❌ Error: ${err.message}`;
    }
  } catch (error) {
    responseBox.innerHTML = "❌ Failed to create issue. Check console.";
    console.error(error);
  }
}
