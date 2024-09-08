document.addEventListener('DOMContentLoaded', () => {
    const accViewBox = document.getElementById('acc-view-box');
    const editProfileButton = document.getElementById('edit-profile-btn');
    const inEditProfileDiv = document.getElementById('in-edit-profile');
    const applyProfileButton = document.getElementById('apply-profile');
    const resultMessageDiv = document.getElementById('result-message');
    const usernameDisplay = document.getElementById('username');
    const nicknameDisplay = document.getElementById('nickname');
    const accVerifiedDisplay = document.getElementById('acc-verified');
    const icon = document.getElementById('icon');

    // Load settings from localStorage
    const loadSettings = () => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        const isVerified = localStorage.getItem('captchaVerified') === 'true';

        darkModeCheckbox.checked = darkMode;
        document.body.classList.toggle('dark-mode', darkMode);

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
            icon.src = savedIcon;
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
            };
            reader.readAsDataURL(iconFile);
        }

        resultMessageDiv.textContent = 'Profile updated!';
    });

    // Check if the account is verified with captcha
    const isVerified = localStorage.getItem('captchaVerified') === 'true';
    accVerifiedDisplay.textContent = `Account Verification: ${isVerified ? 'Verified' : 'Unverified'}`;
});
