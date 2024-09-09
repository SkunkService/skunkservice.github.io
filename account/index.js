document.addEventListener('DOMContentLoaded', () => {
    const viewIcon = document.getElementById('view-icon');
    const iconBox = document.getElementById('icon-box');
    const gotoprofile = document.getElementById('gotoprofile');
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

    // Go to profile button action
    gotoprofile.addEventListener('click', () => {
        window.location.href = '/profile'; // Update this URL as needed
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
            reader.onload = function(e) {
                const iconSrc = e.target.result;
                localStorage.setItem('iconSrc', iconSrc);
                icon.src = iconSrc;
            };
            reader.readAsDataURL(iconFile);
        }

        message.textContent = 'Profile updated successfully!';
    });

    // Load profile data from localStorage
    const loadProfileData = () => {
        const savedUsername = localStorage.getItem('username');
        const savedNickname = localStorage.getItem('nickname');
        const savedIconSrc = localStorage.getItem('iconSrc');
        const iconFiltered = localStorage.getItem('iconFiltered');

        if (savedUsername) {
            document.getElementById('username').textContent = `Username: ${savedUsername}`;
        }
        if (savedNickname) {
            document.getElementById('nickname').textContent = `Nickname: @${savedNickname}`;
        }
        if (savedIconSrc) {
            icon.src = savedIconSrc;
        }
        if (iconFiltered === 'true') {
            icon.style.filter = 'blur(5px)';
        } else {
            icon.style.filter = 'none';
        }
    };

    loadProfileData();

    // Filter icon user
    filterIcon.addEventListener('click', () => {
        icon.style.filter = 'blur(5px)';
        localStorage.setItem('iconFiltered', 'true');
    });

    // Unfilter icon user
    unfilterIcon.addEventListener('click', () => {
        icon.style.filter = 'none';
        localStorage.setItem('iconFiltered', 'false');
    });
});
