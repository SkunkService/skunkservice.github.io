document.addEventListener('DOMContentLoaded', () => {
    const accViewBox = document.getElementById('acc-view-box');
    const editProfileButton = document.getElementById('edit-profile-btn');
    const inEditProfileDiv = document.getElementById('in-edit-profile');
    const applyProfileButton = document.getElementById('apply-profile');
    const resultMessageDiv = document.getElementById('message');
    const usernameDisplay = document.getElementById('username');
    const nicknameDisplay = document.getElementById('nickname');
    const accVerifiedDisplay = document.getElementById('acc-verified');
    const icon = document.getElementById('icon');

    // Load settings from localStorage
const loadSettings = () => {
    const isVerified = localStorage.getItem('captchaVerified') === 'true';

    accViewBox.style.display = 'block';
    accVerifiedDisplay.textContent = `Account Verification: ${isVerified ? 'Verified' : 'Unverified'}`;

    const savedUsername = localStorage.getItem('username');
    const savedNickname = localStorage.getItem('nickname');
    const savedIcon = localStorage.getItem('icon');

    if (savedUsername) {
        usernameDisplay.textContent = `Username: ${savedUsername}`;
    }
    if (savedNickname) {
        nicknameDisplay.textContent = `Nickname: @${savedNickname}`;
    }
    if (savedIcon) {
        console.log('Loading Icon:', savedIcon); // Debug log to check if the icon URL is retrieved
        icon.src = savedIcon;  // Apply the icon source
    }
};

    // Edit profile
    editProfileButton.addEventListener('click', () => {
        inEditProfileDiv.style.display = inEditProfileDiv.style.display === 'none' ? 'block' : 'none';
    });

    // Apply profile changes
    applyProfileButton.addEventListener('click', () => {
    const username = document.getElementById('username-inp').value;
    const nickname = document.getElementById('nickname-inp').value;
    const iconFile = document.getElementById('icon-file').files[0];

    if (username) {
        localStorage.setItem('username', username);
        usernameDisplay.textContent = `Username: ${username}`;
        console.log('Saved Username:', username);
    }

    if (nickname) {
        localStorage.setItem('nickname', nickname);
        nicknameDisplay.textContent = `Nickname: @${nickname}`;
        console.log('Saved Nickname:', nickname);
    }

    if (iconFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const iconURL = e.target.result;
            icon.src = iconURL;
            localStorage.setItem('icon', iconURL);
            console.log('Saved Icon:', iconURL); // Debug log
        };
        reader.readAsDataURL(iconFile);  // Ensure it is reading as a Data URL
    }

    resultMessageDiv.textContent = 'Profile updated!';
});

    // Check if the account is verified with captcha
    const isVerified = localStorage.getItem('captchaVerified') === 'true';
    accVerifiedDisplay.textContent = `Account Verification: ${isVerified ? 'Verified' : 'Unverified'}`;

    // Call loadSettings on DOMContentLoaded
    loadSettings();
});
