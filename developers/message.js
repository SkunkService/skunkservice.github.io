// Function to show a notification with GSAP
function showNotification(message) {
    const notificationElement = document.getElementById('notification'); // Reference to the notification div
    const msgElement = document.getElementById('msg'); // Reference to the message <p> element
    msgElement.innerText = message;
    notificationElement.style.display = "flex"; // Use notificationElement instead of notificationEvent

    // Show notification with opacity animation
    gsap.fromTo(notificationElement, { opacity: 0 }, { opacity: 1, duration: 0.5 });

    // Hide notification after a few seconds
    setTimeout(() => {
        gsap.to(notificationElement, { opacity: 0, duration: 0.5 });
        setTimeout(() => {
            notificationElement.style.display = "none"; // Use notificationElement instead of notificationEvent
        }, 500);
    }, 3000);
}

// Button click event to acknowledge the notification
document.getElementById('ok-notification').addEventListener('click', () => {
    const notificationElement = document.getElementById('notification'); // Reference the notification again
    gsap.to(notificationElement, { opacity: 0, duration: 0.5 });
    setTimeout(() => {
        notificationElement.style.display = "none"; // Use notificationElement instead of notificationEvent
    }, 500);
});

// Example usage of showNotification
showNotification('Hi, Welcome to the API');
