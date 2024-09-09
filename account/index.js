document.addEventListener('DOMContentLoaded', () => {
    const accViewBox = document.getElementById('acc-view-box');
    const editProfileButton = document.getElementById('edit-profile-btn');
    const inEditProfileDiv = document.getElementById('in-edit-profile');
    const applyProfileButton = document.getElementById('apply-profile');
    const resultMessageDiv = document.getElementById('message'); // Fixed ID reference
    const usernameDisplay = document.getElementById('username');
    const nicknameDisplay = document.getElementById('nickname');
    const accVerifiedDisplay = document.getElementById('acc-verified');
    const icon = document.getElementById('icon');

    // Debugging Step: Output to check initialization
    console.log("Script loaded and DOM is ready.");

    // Load settings from localStorage
    const loadSettings = () => {
        const isVerified = localStorage.getItem('captchaVerified') === 'true';

        // Debugging Step: Checking verification status
        console.log("Verification Status: ", isVerified);

        accVerifiedDisplay.textContent = `Account Verification: ${isVerified ? 'Verified' : 'Unverified'}`;

        const savedUsername = localStorage.getItem('username');
        const savedNickname = localStorage.getItem('nickname');
        const savedIcon = localStorage.getItem('icon');

        // Debugging Step: Checking what is stored in localStorage
        console.log("Loaded Username: ", savedUsername);
        console.log("Loaded Nickname: ", savedNickname);
        console.log("Loaded Icon: ", savedIcon);

        if (savedUsername) {
            usernameDisplay.textContent = `Username: ${savedUsername}`;
        }
        if (savedNickname) {
            nicknameDisplay.textContent = `Nickname: @${savedNickname}`;
        }
        if (savedIcon) {
            icon.src = savedIcon;
        }
    };

    // Call loadSettings function on page load
    loadSettings();

    // Edit profile
    editProfileButton.addEventListener('click', () => {
        inEditProfileDiv.style.display = inEditProfileDiv.style.display === 'none' ? 'block' : 'none';
    });

    // Apply profile changes
    applyProfileButton.addEventListener('click', () => {
        const username = document.getElementById('username-inp').value;
        const nickname = document.getElementById('nickname-inp').value;
        const iconFile = document.getElementById('icon-file').files[0];

        // Debugging Step: Checking user input values
        console.log("Entered Username: ", username);
        console.log("Entered Nickname: ", nickname);
        console.log("Selected Icon File: ", iconFile);

        if (username) {
            localStorage.setItem('username', username);
            usernameDisplay.textContent = `Username: ${username}`;
        }
        if (nickname) {
            localStorage.setItem('nickname', nickname);
            nicknameDisplay.textContent = `Nickname: @${nickname}`;
        }
        if (iconFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                icon.src = e.target.result;
                localStorage.setItem('icon', e.target.result);
                // Debugging Step: Confirm the image is being processed
                console.log("Icon uploaded and stored.");
            };
            reader.readAsDataURL(iconFile);
        }

        resultMessageDiv.textContent = 'Profile updated!';
    });

    // Check if the account is verified with captcha
    const isVerified = localStorage.getItem('captchaVerified') === 'true';
    accVerifiedDisplay.textContent = `Account Verification: ${isVerified ? 'Verified' : 'Unverified'}`;
});
