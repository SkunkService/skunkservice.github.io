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

    console.log('Loaded Username:', savedUsername);
    console.log('Loaded Nickname:', savedNickname);
    console.log('Loaded Icon:', savedIcon);

    if (savedUsername) {
        usernameDisplay.textContent = `Username: ${savedUsername}`;
    } else {
        console.log('No saved username found.');
    }

    if (savedNickname) {
        nicknameDisplay.textContent = `Nickname: @${savedNickname}`;
    } else {
        console.log('No saved nickname found.');
    }

    if (savedIcon) {
        icon.src = savedIcon;
    } else {
        console.log('No saved icon found.');
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
            console.log('Saved Icon:', iconURL);
        };
        reader.readAsDataURL(iconFile);
    }

    resultMessageDiv.textContent = 'Profile updated!';
});

    // Check if the account is verified with captcha
    const isVerified = localStorage.getItem('captchaVerified') === 'true';
    accVerifiedDisplay.textContent = `Account Verification: ${isVerified ? 'Verified' : 'Unverified'}`;

    // Call loadSettings on DOMContentLoaded
    loadSettings();
});
