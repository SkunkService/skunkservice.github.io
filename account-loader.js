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
