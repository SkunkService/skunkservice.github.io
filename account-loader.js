// Retrieve stored values from localStorage
const savedUsername = localStorage.getItem('username') || 'N/A';
const savedNickname = localStorage.getItem('nickname') || 'N/A';
const savedIcon = localStorage.getItem('icon') || 'default-icon.png'; // Fallback to a default icon if none is saved
const isVerified = localStorage.getItem('captchaVerified') === 'true';

// Update HTML elements with saved values
document.getElementById('username').textContent = savedUsername;
document.getElementById('nickname').textContent = savedNickname;

const verificationStatus = isVerified ? 'Verified' : 'Unverified';
document.getElementById('has-verified').textContent = `Verification Status: ${verificationStatus}`;

// Set the icon source
document.querySelector('.account-icon').src = savedIcon;

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-account');
    const accountBox = document.getElementById('account-box');
    
    // Set initial state for the account box
    let isVisible = false;

    toggleButton.addEventListener('click', () => {
        if (isVisible) {
            accountBox.style.display = 'none'; // Hide account box
            toggleButton.textContent = 'Show Account'; // Update button text
        } else {
            accountBox.style.display = 'block'; // Show account box
            toggleButton.textContent = 'Hide Account'; // Update button text
        }
        isVisible = !isVisible; // Toggle visibility state
    });
});
