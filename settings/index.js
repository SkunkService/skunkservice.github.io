document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('settings-form');
    const darkModeCheckbox = document.getElementById('dark-mode');
    const resultMessage = document.getElementById('result-message');

    // Load saved settings from localStorage
    const darkMode = localStorage.getItem('darkMode') === 'true';
    darkModeCheckbox.checked = darkMode;

    // Apply dark mode if enabled
    if (darkMode) {
        document.body.classList.add('dark-mode');
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
});
