document.addEventListener('DOMContentLoaded', () => {
    const settingsForm = document.getElementById('settings-form');
    const darkModeCheckbox = document.getElementById('dark-mode');
    const deletePermanentlyBtn = document.getElementById('delete-permanently');
    const deleteVerifiedBtn = document.getElementById('delete-verified');
    const authGoogleBtn = document.getElementById('auth-google-btn');
    const accViewBtn = document.getElementById('acc-view-btn');
    const accViewBox = document.getElementById('acc-view-box');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const inEditProfile = document.getElementById('in-edit-profile');
    const applyProfileBtn = document.getElementById('apply-profile');
    const usernameInp = document.getElementById('username-inp');
    const nicknameInp = document.getElementById('nickname-inp');
    const iconFile = document.getElementById('icon-file');
    const message = document.getElementById('message');

    // Load settings and profile from localStorage
    loadSettings();
    loadProfile();

    // Event listeners
    settingsForm.addEventListener('submit', handleSettingsSubmit);
    deletePermanentlyBtn.addEventListener('click', handleDeletePermanently);
    deleteVerifiedBtn.addEventListener('click', handleDeleteVerified);
    authGoogleBtn.addEventListener('click', handleAuthGoogle);
    accViewBtn.addEventListener('click', toggleAccountView);
    editProfileBtn.addEventListener('click', toggleEditProfile);
    applyProfileBtn.addEventListener('click', handleProfileApply);

    function loadSettings() {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        darkModeCheckbox.checked = darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    }

    function loadProfile() {
        const profile = JSON.parse(localStorage.getItem('profile')) || {};
        const usernameElement = document.getElementById('username');
        const nicknameElement = document.getElementById('nickname');
        const iconElement = document.getElementById('icon');

        if (profile.username) {
            usernameElement.textContent = `Username: ${profile.username}`;
        }
        if (profile.nickname) {
            nicknameElement.textContent = `Nickname: @${profile.nickname}`;
        }
        if (profile.icon) {
            iconElement.src = profile.icon;
        }
    }

    function handleSettingsSubmit(event) {
        event.preventDefault();
        const darkMode = darkModeCheckbox.checked;
        localStorage.setItem('darkMode', darkMode);
        document.body.classList.toggle('dark-mode', darkMode);
        showMessage('Settings saved.');
    }

    function handleDeletePermanently() {
        if (confirm('Are you sure you want to delete all data permanently? This action cannot be undone.')) {
            localStorage.clear();
            showMessage('All data has been deleted.');
        }
    }

    function handleDeleteVerified() {
        if (confirm('Are you sure you want to delete verified data?')) {
            localStorage.removeItem('profile');
            loadProfile(); // Update profile view
            showMessage('Verified data has been deleted.');
        }
    }

    function handleAuthGoogle() {
        // Placeholder for Google authentication logic
        showMessage('Google authentication not implemented.');
    }

    function toggleAccountView() {
        accViewBox.style.display = accViewBox.style.display === 'none' ? 'block' : 'none';
    }

    function toggleEditProfile() {
        inEditProfile.style.display = inEditProfile.style.display === 'none' ? 'block' : 'none';
    }

    function handleProfileApply() {
        const username = usernameInp.value.trim();
        const nickname = nicknameInp.value.trim();
        const icon = iconFile.files[0];
        const profile = {};

        if (username) profile.username = username;
        if (nickname) profile.nickname = nickname;

        if (icon) {
            const reader = new FileReader();
            reader.onloadend = () => {
                profile.icon = reader.result;
                saveProfile(profile);
            };
            reader.readAsDataURL(icon);
        } else {
            saveProfile(profile);
        }
    }

    function saveProfile(profile) {
        localStorage.setItem('profile', JSON.stringify(profile));
        loadProfile(); // Update profile view
        showMessage('Profile updated.');
    }

    function showMessage(msg) {
        message.textContent = msg;
        setTimeout(() => { message.textContent = ''; }, 3000);
    }
});
