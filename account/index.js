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

    // Toggle the visibility of the icon box
    viewIcon.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default action
        iconBox.hidden = !iconBox.hidden;
    });

    // Go to profile button action (for demonstration purposes)
    gotoprofile.addEventListener('click', () => {
        window.location.href = '/profile'; // Replace with actual profile URL or action
    });

    // Filter icon user (adds a blur effect)
    filterIcon.addEventListener('click', () => {
        icon.style.filter = 'blur(5px)';
        localStorage.setItem('iconFiltered', 'true');
    });

    // Unfilter icon user (removes blur effect)
    unfilterIcon.addEventListener('click', () => {
        icon.style.filter = 'none';
        localStorage.setItem('iconFiltered', 'false');
    });

    // Apply profile changes
    applyProfileButton.addEventListener('click', () => {
        const username = document.getElementById('username-inp').value;
        const nickname = document.getElementById('nickname-inp').value;
        const iconFile = iconFileInput.files[0];

        if (username) {
            document.getElementById('username').textContent = `Username: ${username}`;
            localStorage.setItem('username', username);
        }
        if (nickname) {
            document.getElementById('nickname').textContent = `Nickname: @${nickname}`;
            localStorage.setItem('nickname', nickname);
        }

        if (iconFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const iconSrc = e.target.result;
                icon.src = iconSrc;
                localStorage.setItem('iconSrc', iconSrc);
            };
            reader.readAsDataURL(iconFile);
        }

        message.textContent = 'Profile updated successfully!';
    });

    // Load saved icon source from localStorage
    const savedIconSrc = localStorage.getItem('iconSrc');
    if (savedIconSrc) {
        icon.src = savedIconSrc;
    }

    // Load saved filter state from localStorage
    const iconFiltered = localStorage.getItem('iconFiltered');
    if (iconFiltered === 'true') {
        icon.style.filter = 'blur(5px)';
    } else {
        icon.style.filter = 'none';
    }

    // Load saved username and nickname from localStorage
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').textContent = `Username: ${savedUsername}`;
    }

    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
        document.getElementById('nickname').textContent = `Nickname: @${savedNickname}`;
    }
});
