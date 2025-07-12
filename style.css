* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    --secondary-color: #64748b;
    --success-color: #10b981;
    --error-color: #ef4444;
    --warning-color: #f59e0b;
    --background: #ffffff;
    --surface: #f8fafc;
    --surface-elevated: #ffffff;
    --text-primary: #0f172a;
    --text-secondary: #64748b;
    --text-muted: #94a3b8;
    --border: #e2e8f0;
    --border-focus: #3b82f6;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --radius: 0.5rem;
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
    font-family: var(--font-family);
    background: linear-gradient(135deg, var(--surface) 0%, #e0f2fe 100%);
    color: var(--text-primary);
    line-height: 1.6;
    min-height: 100vh;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    text-align: center;
    margin-bottom: 3rem;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.logo-icon {
    font-size: 3rem;
    filter: drop-shadow(0 4px 8px rgba(37, 99, 235, 0.2));
}

.logo h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-color), #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subtitle {
    font-size: 1.125rem;
    color: var(--text-secondary);
    font-weight: 400;
    max-width: 500px;
    margin: 0 auto;
}

.main-content {
    flex: 1;
}

.form-container {
    background: var(--surface-elevated);
    border-radius: var(--radius);
    padding: 2rem;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border);
    margin-bottom: 2rem;
}

.input-group {
    margin-bottom: 1.5rem;
}

.input-label {
    display: block;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
}

.input-wrapper {
    position: relative;
}

.url-input {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 2px solid var(--border);
    border-radius: var(--radius);
    font-size: 1rem;
    font-family: var(--font-family);
    background: var(--background);
    transition: all 0.2s ease;
    outline: none;
}

.url-input:focus {
    border-color: var(--border-focus);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.url-input.valid {
    border-color: var(--success-color);
    background: rgba(16, 185, 129, 0.05);
}

.url-input.invalid {
    border-color: var(--error-color);
    background: rgba(239, 68, 68, 0.05);
}

.input-status {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.25rem;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.input-status.show {
    opacity: 1;
}

.submit-button {
    width: 100%;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: var(--radius);
    font-size: 1rem;
    font-weight: 500;
    font-family: var(--font-family);
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: var(--shadow-sm);
}

.submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.submit-button:active {
    transform: translateY(0);
}

.submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: var(--text-muted);
}

.button-icon {
    font-size: 1.125rem;
}

.response-container {
    min-height: 2rem;
}

.loading {
    display: none;
    text-align: center;
    padding: 2rem;
    background: var(--surface-elevated);
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border);
}

.loading.show {
    display: block;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--border);
    border-top: 4px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.response {
    background: var(--surface-elevated);
    border-radius: var(--radius);
    padding: 2rem;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border);
    display: none;
}

.response.show {
    display: block;
}

.response h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-weight: 600;
}

.response p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
}

.error {
    background: rgba(239, 68, 68, 0.05);
    border: 1px solid rgba(239, 68, 68, 0.2);
    color: var(--error-color);
    padding: 1rem;
    border-radius: var(--radius);
    display: none;
    font-weight: 500;
}

.error.show {
    display: block;
}

.footer {
    text-align: center;
    padding: 2rem 0;
    color: var(--text-muted);
    font-size: 0.875rem;
    border-top: 1px solid var(--border);
    margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    .logo h1 {
        font-size: 2rem;
    }
    
    .logo-icon {
        font-size: 2.5rem;
    }
    
    .subtitle {
        font-size: 1rem;
    }
    
    .form-container {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .logo {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .logo h1 {
        font-size: 1.75rem;
    }
    
    .form-container {
        padding: 1rem;
    }
    
    .submit-button {
        padding: 0.875rem 1.5rem;
    }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

.url-input:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

.submit-button:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
}
