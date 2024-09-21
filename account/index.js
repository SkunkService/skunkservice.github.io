document.addEventListener('DOMContentLoaded', () => {
    const editProfileButton = document.getElementById('edit-profile-btn');
    const profileForm = document.getElementById('profile-form');
    const applyProfileButton = document.getElementById('apply-profile');
    const resultMessageDiv = document.getElementById('message');
    const usernameDisplay = document.getElementById('username');
    const nicknameDisplay = document.getElementById('nickname');
    const accVerifiedDisplay = document.getElementById('acc-verified');
    const icon = document.getElementById('icon');
    const filterIconBtn = document.getElementById('filter-icon');
    const unfilterIconBtn = document.getElementById('unfilter-icon');
    const iconFileInput = document.getElementById('icon-file');
    const modal = document.getElementById('icon-modal');
    const modalImg = document.getElementById('icon-preview');
    const closeBtn = document.getElementsByClassName('close')[0];
    const viewIconLink = document.getElementById('view-icon');

    const updateLocalStorageAndDisplay = (key, value, displayElement, prefix) => {
        localStorage.setItem(key, value);
        if (displayElement) {
            displayElement.textContent = `${prefix}: ${value}`;
        }
    };

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

    loadSettings();

    if (editProfileButton && profileForm) {
        editProfileButton.addEventListener('click', () => {
            profileForm.style.display = profileForm.style.display === 'none' || profileForm.style.display === '' ? 'block' : 'none';
        });
    }

    if (iconFileInput) {
        iconFileInput.addEventListener('change', () => {
            const iconFile = iconFileInput.files[0];
            if (iconFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (icon) {
                        icon.src = e.target.result;
                    }
                };
                reader.readAsDataURL(iconFile);
            }
        });
    }

    if (applyProfileButton) {
        applyProfileButton.addEventListener('click', () => {
            const username = document.getElementById('username-inp')?.value;
            const nickname = document.getElementById('nickname-inp')?.value;
            const iconFile = iconFileInput?.files[0];

            if (username) {
                updateLocalStorageAndDisplay('username', username, usernameDisplay, 'Username');
            }
            if (nickname) {
                updateLocalStorageAndDisplay('nickname', nickname, nicknameDisplay, 'Nickname');
            }
            if (iconFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    icon.src = e.target.result;
                    localStorage.setItem('icon', e.target.result);
                };
                reader.readAsDataURL(iconFile);
            }

            if (resultMessageDiv) {
                resultMessageDiv.textContent = 'Profile updated!';
            }
        });
    }

    if (filterIconBtn && icon) {
        filterIconBtn.addEventListener('click', () => {
            icon.style.filter = 'blur(5px)';
        });
    }

    if (unfilterIconBtn && icon) {
        unfilterIconBtn.addEventListener('click', () => {
            icon.style.filter = 'none';
        });
    }

    if (viewIconLink && icon) {
        viewIconLink.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            modalImg.src = icon.src;
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
