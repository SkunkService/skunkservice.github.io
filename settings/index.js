document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('settings-form');
    const darkModeCheckbox = document.getElementById('dark-mode');
    const resultMessage = document.getElementById('result-message');
    const accViewBox = document.getElementById('acc-view-box');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const inEditProfile = document.getElementById('in-edit-profile');
    const applyProfileBtn = document.getElementById('apply-profile');
    const usernameInput = document.getElementById('username-inp');
    const iconFile = document.getElementById('icon-file');
    const message = document.getElementById('message');

    // Load saved settings from localStorage
    const darkMode = localStorage.getItem('darkMode') === 'true';
    darkModeCheckbox.checked = darkMode;

    // Apply dark mode if enabled
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }

    // Load and apply saved profile data
    const savedUsername = localStorage.getItem('username');
    const savedIcon = localStorage.getItem('icon');

    if (savedUsername) {
        document.getElementById('username').textContent = `Username: ${savedUsername}`;
    }

    if (savedIcon) {
        document.getElementById('icon').src = savedIcon;
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Save settings to localStorage
        const isDarkMode = darkModeCheckbox.checked;
        localStorage.setItem('darkMode', isDarkMode);

        // Apply dark mode
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        resultMessage.textContent = 'Settings saved successfully!';
    });

    // Handle Delete Permanently Datas
    document.getElementById('delete-permanently').addEventListener('click', () => {
        if (confirm('Are you sure you want to delete all data permanently? This action cannot be undone.')) {
            // Clear all localStorage data
            localStorage.clear();
            resultMessage.textContent = 'All data has been deleted permanently.';
            // Clear profile display
            document.getElementById('username').textContent = 'Username:';
            document.getElementById('icon').src = '';
        }
    });

    // Handle Delete Verified Datas
    document.getElementById('delete-verified').addEventListener('click', () => {
        if (confirm('Are you sure you want to delete verified data? This action cannot be undone.')) {
            // Remove specific item from localStorage
            localStorage.removeItem('captchaVerified');
            resultMessage.textContent = 'Verified data has been deleted.';
        }
    });

    // Handle Authenticate with Google
    document.getElementById('auth-google-btn').addEventListener('click', () => {
        // Placeholder for Google authentication logic
        resultMessage.textContent = 'Google authentication is not yet implemented.';
    });

    // Handle Account View
    document.getElementById('acc-view-btn').addEventListener('click', () => {
        accViewBox.style.display = accViewBox.style.display === 'none' ? 'block' : 'none';
    });

    editProfileBtn.addEventListener('click', () => {
        inEditProfile.style.display = inEditProfile.style.display === 'none' ? 'block' : 'none';
    });

    applyProfileBtn.addEventListener('click', () => {
        const newUsername = usernameInput.value.trim();
        const iconFileInput = iconFile.files[0];

        if (newUsername) {
            localStorage.setItem('username', newUsername);
            document.getElementById('username').textContent = `Username: ${newUsername}`;
        }

        if (iconFileInput) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const iconDataUrl = event.target.result;
                localStorage.setItem('icon', iconDataUrl);
                document.getElementById('icon').src = iconDataUrl;
            };
            reader.readAsDataURL(iconFileInput);
        }

        message.textContent = 'Profile updated successfully!';
        inEditProfile.style.display = 'none';
    });
});
