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
    const filterIconBtn = document.getElementById('filter-icon');
    const unfilterIconBtn = document.getElementById('unfilter-icon');
    const viewIconLink = document.getElementById('view-icon');
    const iconBox = document.getElementById('icon-box');

    // Load settings from localStorage
    const loadSettings = () => {
        const savedUsername = localStorage.getItem('username');
        const savedNickname = localStorage.getItem('nickname');
        const savedIcon = localStorage.getItem('icon');
        const isVerified = localStorage.getItem('captchaVerified') === 'true';

        accVerifiedDisplay.textContent = `Account Verification: ${isVerified ? 'Verified' : 'Unverified'}`;

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

    loadSettings(); // Load settings when the page loads

    // Edit profile toggle
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

    // Filter icon - Apply CSS filter
    filterIconBtn.addEventListener('click', () => {
        icon.style.filter = 'grayscale(100%)'; // You can adjust this filter as needed
    });

    // Unfilter icon - Remove CSS filter
    unfilterIconBtn.addEventListener('click', () => {
        icon.style.filter = 'none';
    });

    // View icon functionality - Toggle visibility of the icon box
    viewIconLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Toggle visibility of the icon box
        if (iconBox.hidden) {
            iconBox.hidden = false;
        } else {
            iconBox.hidden = true;
        }
    });
});
