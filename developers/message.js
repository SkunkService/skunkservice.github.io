// Function to show a notification with GSAP
function showNotification(message) {
    const msgElement = document.getElementById('msg');
    msgElement.innerText = message;

    // Show notification with opacity animation
    gsap.fromTo(msgElement, { opacity: 0 }, { opacity: 1, duration: 0.5 });

    // Hide notification after a few seconds
    setTimeout(() => {
        gsap.to(msgElement, { opacity: 0, duration: 0.5 });
    }, 3000);
}

// Button click event to acknowledge the notification
document.getElementById('ok-notification').addEventListener('click', () => {
    gsap.to(document.getElementById('msg'), { opacity: 0, duration: 0.5 });
});

// Example usage of showNotification
// Call this function wherever needed to show a message
showNotification('This is a notification message!');
