document.addEventListener('DOMContentLoaded', () => {
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

    // Load settings from localStorage
    const loadSettings = () => {
        const savedUsername = localStorage.getItem('username');
        const savedNickname = localStorage.getItem('nickname');
        const savedIcon = localStorage.getItem('icon');
        const isVerified = localStorage.getItem('captchaVerified') === 'true';

        if (accVerifiedDisplay) {
            accVerifiedDisplay.textContent = `Account Verification: ${isVerified ? 'Verified' : 'Unverified'}`;
        }

        if (savedUsername && usernameDisplay) {
            usernameDisplay.textContent = `Username: ${savedUsername}`;
        }
        if (savedNickname && nicknameDisplay) {
            nicknameDisplay.textContent = `Nickname: @${savedNickname}`;
        }
        if (savedIcon && icon) {
            icon.src = savedIcon;
        }
    };

    loadSettings(); // Load settings when the page loads

    // Edit profile toggle
    if (editProfileButton && inEditProfileDiv) {
        editProfileButton.addEventListener('click', () => {
            // Toggle display of the edit profile section
            if (inEditProfileDiv.style.display === 'none' || inEditProfileDiv.style.display === '') {
                inEditProfileDiv.style.display = 'block';
            } else {
                inEditProfileDiv.style.display = 'none';
            }
        });
    }

    // Apply profile changes
    if (applyProfileButton) {
        applyProfileButton.addEventListener('click', () => {
            const username = document.getElementById('username-inp')?.value;
            const nickname = document.getElementById('nickname-inp')?.value;
            const iconFile = document.getElementById('icon-file')?.files[0];

            if (username) {
                localStorage.setItem('username', username);
                if (usernameDisplay) {
                    usernameDisplay.textContent = `Username: ${username}`;
                }
            }
            if (nickname) {
                localStorage.setItem('nickname', nickname);
                if (nicknameDisplay) {
                    nicknameDisplay.textContent = `Nickname: @${nickname}`;
                }
            }
            if (iconFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (icon) {
                        icon.src = e.target.result;
                        localStorage.setItem('icon', e.target.result);
                    }
                };
                reader.readAsDataURL(iconFile);
            }

            if (resultMessageDiv) {
                resultMessageDiv.textContent = 'Profile updated!';
            }
        });
    }

    // Filter icon - Apply CSS filter
    if (filterIconBtn && icon) {
        filterIconBtn.addEventListener('click', () => {
            if (icon) {
                icon.style.filter = 'blur(5px)'; // Apply blur filter
            }
        });
    }

    // Unfilter icon - Remove CSS filter
    if (unfilterIconBtn && icon) {
        unfilterIconBtn.addEventListener('click', () => {
            if (icon) {
                icon.style.filter = 'none'; // Remove filter
            }
        });
    }
});
