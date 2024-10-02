// Function to show a notification with GSAP
function showNotification(message) {
    const notificationElement = document.getElementById('notification'); // Reference to the notification div
    const msgElement = document.getElementById('msg'); // Reference to the message <p> element
    msgElement.innerText = message;
    notificationEvent.style.display = "flex";

    // Show notification with opacity animation
    gsap.fromTo(notificationElement, { opacity: 0 }, { opacity: 1, duration: 0.5 });

    // Hide notification after a few seconds
    setTimeout(() => {
        gsap.to(notificationElement, { opacity: 0, duration: 0.5 });
        setTimeout(() => {
            notificationEvent.style.display = "none";
        }, 500);
    }, 3000);
}

// Button click event to acknowledge the notification
document.getElementById('ok-notification').addEventListener('click', () => {
    gsap.to(document.getElementById('notification'), { opacity: 0, duration: 0.5 });
    setTimeout(() => {
        notificationEvent.style.display = "none";
    }, 500);
});

// Example usage of showNotification
showNotification('Hi, Welcome to the API');
