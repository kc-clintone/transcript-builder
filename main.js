// YouTube URL validation regex
const YOUTUBE_URL_REGEX = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)[a-zA-Z0-9_-]{11}/;

// DOM elements
const urlInput = document.getElementById('yt-url');
const submitBtn = document.getElementById('submit-btn');
const responseContainer = document.getElementById('response-container');
const loadingEl = document.getElementById('loading');
const responseEl = document.getElementById('response');
const errorEl = document.getElementById('error');
const inputStatus = document.getElementById('input-status');

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    urlInput.addEventListener('input', validateUrl);
    urlInput.addEventListener('paste', function() {
        setTimeout(validateUrl, 10); // Small delay to ensure pasted content is processed
    });
    
    // Allow Enter key to submit
    urlInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !submitBtn.disabled) {
            submitForm();
        }
    });
});

function validateUrl() {
    const url = urlInput.value.trim();
    
    // Clear previous states
    urlInput.classList.remove('valid', 'invalid');
    inputStatus.classList.remove('show');
    inputStatus.textContent = '';
    
    if (url === '') {
        submitBtn.disabled = true;
        return;
    }
    
    if (YOUTUBE_URL_REGEX.test(url)) {
        urlInput.classList.add('valid');
        inputStatus.textContent = '✓';
        inputStatus.classList.add('show');
        submitBtn.disabled = false;
    } else {
        urlInput.classList.add('invalid');
        inputStatus.textContent = '✗';
        inputStatus.classList.add('show');
        submitBtn.disabled = true;
    }
}

function hideAllStates() {
    loadingEl.classList.remove('show');
    responseEl.classList.remove('show');
    errorEl.classList.remove('show');
}

function showLoading() {
    hideAllStates();
    loadingEl.classList.add('show');
}

function showResponse(content) {
    hideAllStates();
    responseEl.innerHTML = content;
    responseEl.classList.add('show');
}

function showError(message) {
    hideAllStates();
    errorEl.textContent = message;
    errorEl.classList.add('show');
}

function extractVideoId(url) {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
}

async function submitForm() {
    const url = urlInput.value.trim();
    
    if (!url || !YOUTUBE_URL_REGEX.test(url)) {
        showError('Please enter a valid YouTube URL');
        return;
    }
    
    const videoId = extractVideoId(url);
    if (!videoId) {
        showError('Could not extract video ID from URL');
        return;
    }
    
    // Disable form during processing
    submitBtn.disabled = true;
    urlInput.disabled = true;
    
    showLoading();
    
    try {
        // Simulate API call - replace this with your actual API endpoint
        const response = await simulateTranscriptGeneration(videoId);
        
        if (response.success) {
            const content = `
                <h3>🎯 Transcript Generated Successfully</h3>
                <div style="background: rgba(16, 185, 129, 0.1); padding: 1rem; border-radius: 0.5rem; margin: 1rem 0; border-left: 4px solid var(--success-color);">
                    <strong>Video:</strong> ${response.title || 'YouTube Video'}<br>
                    <strong>Duration:</strong> ${response.duration || 'N/A'}<br>
                    <strong>Language:</strong> ${response.language || 'Auto-detected'}
                </div>
                <div style="background: var(--surface); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid var(--border); max-height: 400px; overflow-y: auto;">
                    <h4 style="margin-bottom: 1rem; color: var(--text-primary);">Transcript:</h4>
                    <p style="white-space: pre-wrap; line-height: 1.8;">${response.transcript}</p>
                </div>
                <button onclick="copyTranscript()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--primary-color); color: white; border: none; border-radius: 0.25rem; cursor: pointer;">
                    📋 Copy Transcript
                </button>
            `;
            showResponse(content);
        } else {
            showError(response.error || 'Failed to generate transcript');
        }
    } catch (error) {
        console.error('Error:', error);
        showError('Network error. Please check your connection and try again.');
    } finally {
        // Re-enable form
        submitBtn.disabled = false;
        urlInput.disabled = false;
        validateUrl(); // Recheck validation state
    }
}

// Simulate transcript generation (replace with actual API call)
async function simulateTranscriptGeneration(videoId) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));
    
    // Simulate random success/failure for demo
    const isSuccess = Math.random() > 0.2; // 80% success rate
    
    if (isSuccess) {
        return {
            success: true,
            title: "Sample YouTube Video Title",
            duration: "5:23",
            language: "English",
            transcript: `Welcome to this amazing video! In today's episode, we'll be exploring the fascinating world of technology and innovation.

Throughout this presentation, we'll cover several key topics that are reshaping our digital landscape. From artificial intelligence to machine learning, these technologies are transforming how we work and live.

First, let's discuss the impact of AI on modern society. Artificial intelligence has become an integral part of our daily lives, from the recommendation systems on our favorite streaming platforms to the voice assistants in our homes.

The development of these technologies requires careful consideration of both their benefits and potential challenges. As we continue to advance, it's important to maintain a balance between innovation and responsible implementation.

Thank you for watching, and don't forget to subscribe for more content like this!`
        };
    } else {
        return {
            success: false,
            error: "Video not accessible or transcript not available"
        };
    }
}

function copyTranscript() {
    const transcriptElement = document.querySelector('.response p');
    if (transcriptElement) {
        const transcript = transcriptElement.textContent;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(transcript).then(() => {
                // Temporarily change button text
                const button = event.target;
                const originalText = button.textContent;
                button.textContent = '✓ Copied!';
                button.style.background = 'var(--success-color)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = 'var(--primary-color)';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                fallbackCopyTextToClipboard(transcript);
            });
        } else {
            fallbackCopyTextToClipboard(transcript);
        }
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('Transcript copied to clipboard!');
    } catch (err) {
        console.error('Fallback: Could not copy text: ', err);
        alert('Could not copy transcript. Please select and copy manually.');
    }
    
    document.body.removeChild(textArea);
}
