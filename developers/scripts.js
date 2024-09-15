document.addEventListener('DOMContentLoaded', () => {
    // Get the copy button and script text
    const copyButton = document.getElementById('copy-html-script');
    const scriptText = '<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/api.js"></script>';

    // Set up the copy button click event
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(scriptText).then(() => {
            alert('HTML script copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy script: ', err);
        });
    });

    // Listen for offline events
    window.addEventListener('offline', () => {
        console.log('Network status: offline');
        // Update HTML to indicate offline status
        document.body.innerHTML = `
            <h1>Your Connection is Offline.</h1>
            <br>
            <button onclick="window.location.reload()">Restart Website</button>
        `;
    });
});
