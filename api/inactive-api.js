// inactive-api.js

// Configuration
const INACTIVITY_THRESHOLD = 5 * 60 * 1000; // 5 minutes in milliseconds

// Variables to track user activity
let lastActivityTime = Date.now();
let inactivityTimeout;

// Function to update the last activity time
function updateLastActivity() {
    lastActivityTime = Date.now();
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(checkInactivity, INACTIVITY_THRESHOLD);
}

// Function to check for inactivity
function checkInactivity() {
    const currentTime = Date.now();
    if (currentTime - lastActivityTime >= INACTIVITY_THRESHOLD) {
        console.log('User is inactive');
        const userConfirmed = confirm("Inactive Detected.\n\nDo you want to continue using this website?");
        if (userConfirmed) {
            alert("Thanks for confirming!");
            // Optionally, you could reset the inactivity timer here
            updateLastActivity();
        } else {
            alert("You are marked as inactive.");
            updateLastActivity();
        }
    }
}

// Event listeners for user activity
window.addEventListener('mousemove', updateLastActivity);
window.addEventListener('keypress', updateLastActivity);
window.addEventListener('click', updateLastActivity);
window.addEventListener('scroll', updateLastActivity);

// Initial setup
updateLastActivity();

/*
This allows you to use the following script tag for integration:
Old Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/inactive-api.js"></script>
Latest Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io@main/api/inactive-api.js"></script>
*/
