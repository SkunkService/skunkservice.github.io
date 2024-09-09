document.addEventListener('DOMContentLoaded', () => {
    const viewIcon = document.getElementById('view-icon');
    const iconBox = document.getElementById('icon-box');
    const filterIcon = document.getElementById('filter-icon');
    const unfilterIcon = document.getElementById('unfilter-icon');
    const icon = document.getElementById('icon');
    const iconFileInput = document.getElementById('icon-file');
    const applyProfileButton = document.getElementById('apply-profile');
    const message = document.getElementById('message');

    // Toggle visibility of the icon box
    viewIcon.addEventListener('click', (e) => {
        e.preventDefault();
        iconBox.hidden = !iconBox.hidden;
    });

    // Apply profile changes
    applyProfileButton.addEventListener('click', () => {
        const username = document.getElementById('username-inp').value;
        const nickname = document.getElementById('nickname-inp').value;
        const iconFile = iconFileInput.files[0];

        if (username) {
            localStorage.setItem('username', username);
            document.getElementById('username').textContent = `Username: ${username}`;
        }
        if (nickname) {
            localStorage.setItem('nickname', nickname);
            document.getElementById('nickname').textContent = `Nickname: @${nickname}`;
        }
        if (iconFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                icon.src = e.target.result;
                localStorage.setItem('icon', e.target.result);
            };
            reader.readAsDataURL(iconFile);
        }

        message.textContent = 'Profile updated!';
    });

    // Filter icon - Apply CSS filter
    filterIcon.addEventListener('click', () => {
        icon.style.filter = 'blur(5px)'; // Apply blur filter
    });

    // Unfilter icon - Remove CSS filter
    unfilterIcon.addEventListener('click', () => {
        icon.style.filter = 'none'; // Remove filter
    });

    // Load settings from localStorage on page load
    const loadSettings = () => {
        const savedUsername = localStorage.getItem('username');
        const savedNickname = localStorage.getItem('nickname');
        const savedIcon = localStorage.getItem('icon');

        if (savedUsername) {
            document.getElementById('username').textContent = `Username: ${savedUsername}`;
        }
        if (savedNickname) {
            document.getElementById('nickname').textContent = `Nickname: @${savedNickname}`;
        }
        if (savedIcon) {
            icon.src = savedIcon;
        }
    };

    loadSettings();
});
