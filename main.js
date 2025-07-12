const form = document.getElementById("yt-form");
const status = document.getElementById("status");

const submitForm = () => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = document.getElementById("yt-url").value;
  
    status.textContent = "Submitting...";
  
    try {
      const response = await fetch("https://proxy-server-eight-sigma.vercel.app/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
  
      const result = await response.json();
      if (response.ok) {
        status.textContent = "✅ Issue created successfully!";
      } else {
        status.textContent = `❌ Error: ${result.message}`;
      }
    } catch (err) {
      status.textContent = "❌ Failed to connect to backend.";
    }
  });
}
