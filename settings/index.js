document.addEventListener('DOMContentLoaded', () => {
    const settingsForm = document.getElementById('settings-form');
    const darkModeCheckbox = document.getElementById('dark-mode');
    const deletePermanentlyButton = document.getElementById('delete-permanently');
    const deleteVerifiedButton = document.getElementById('delete-verified');
    const authGoogleButton = document.getElementById('auth-google-btn');
    const accViewButton = document.getElementById('acc-view-btn');
    const accViewBox = document.getElementById('acc-view-box');
    const editProfileButton = document.getElementById('edit-profile-btn');
    const inEditProfileDiv = document.getElementById('in-edit-profile');
    const usernameInput = document.getElementById('username-inp');
    const nicknameInput = document.getElementById('nickname-inp');
    const iconFileInput = document.getElementById('icon-file');
    const applyProfileButton = document.getElementById('apply-profile');
    const messageParagraph = document.getElementById('message');
    const usernameParagraph = document.getElementById('username');
    const nicknameParagraph = document.getElementById('nickname');
    const iconImage = document.getElementById('icon');
    const resultMessageDiv = document.getElementById('result-message');

    // Load settings from localStorage
    const loadSettings = () => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        darkModeCheckbox.checked = darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    };

    // Save settings to localStorage
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('darkMode', darkModeCheckbox.checked);
        document.body.classList.toggle('dark-mode', darkModeCheckbox.checked);
        resultMessageDiv.textContent = 'Settings saved!';
    });

    // Handle delete permanently button
    deletePermanentlyButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete all data permanently?')) {
            localStorage.clear();
            resultMessageDiv.textContent = 'All data deleted permanently!';
        }
    });

    // Handle delete verified data button
    deleteVerifiedButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete verified data?')) {
            localStorage.removeItem('username');
            localStorage.removeItem('nickname');
            localStorage.removeItem('userIcon');
            resultMessageDiv.textContent = 'Verified data deleted!';
        }
    });

    // Handle account view button
    accViewButton.addEventListener('click', () => {
        accViewBox.style.display = accViewBox.style.display === 'none' ? 'block' : 'none';
        // Load profile data
        const username = localStorage.getItem('username') || 'User';
        const nickname = localStorage.getItem('nickname') || '@username';
        const userIcon = localStorage.getItem('userIcon');

        usernameParagraph.textContent = `Username: ${username}`;
        nicknameParagraph.textContent = `Nickname: ${nickname}`;
        if (userIcon) {
            iconImage.src = userIcon;
            iconImage.style.display = 'block';
        } else {
            iconImage.style.display = 'none';
        }
    });

    // Handle edit profile button
    editProfileButton.addEventListener('click', () => {
        inEditProfileDiv.style.display = inEditProfileDiv.style.display === 'none' ? 'block' : 'none';
    });

    // Handle apply profile button
    applyProfileButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const nickname = nicknameInput.value.trim();
        const iconFile = iconFileInput.files[0];

        if (username) localStorage.setItem('username', username);
        if (nickname) localStorage.setItem('nickname', nickname);

        if (iconFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                localStorage.setItem('userIcon', reader.result);
                iconImage.src = reader.result;
                iconImage.style.display = 'block';
            };
            reader.readAsDataURL(iconFile);
        }

        messageParagraph.textContent = 'Profile updated!';
        inEditProfileDiv.style.display = 'none';
        accViewBox.style.display = 'none'; // Hide account view box after updating profile
    });

    // Initial settings load
    loadSettings();
});
