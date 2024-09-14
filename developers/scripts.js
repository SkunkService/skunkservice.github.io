document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-html-script');
    const scriptText = '<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/api.js"></script>';

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(scriptText).then(() => {
            alert('HTML script copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy script: ', err);
        });
    });
});
