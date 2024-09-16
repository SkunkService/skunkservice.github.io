// Offline detection
window.addEventListener('offline', () => {
    console.log('Offline mode activated');
    showOfflineNotification();
});

// Content loading
function showOfflineNotification() {
    const bodyElement = document.body;
    bodyElement.innerHTML = `
        <h1 style="color: red; font-size: 24px; font-weight: bold;">Disconnected</h1>
        <p style="color: gray; font-size: 18px;">Check your Connection and Try Again.</p>
        <button onclick="restartWebsite()" style="background-color: #007bff; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Restart Website</button>
    `;

    bodyElement.style.textAlign = 'center';
    bodyElement.style.padding = '20px';
}

// Restart website
function restartWebsite() {
    location.reload();
}

// Initial load
if (navigator.onLine) {
    // Handle initial load content (if needed)
} else {
    showOfflineNotification();
}
