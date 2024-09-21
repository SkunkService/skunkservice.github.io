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

    // Función que guarda y actualiza los datos
    const updateLocalStorageAndDisplay = (key, value, displayElement, prefix) => {
        localStorage.setItem(key, value);
        if (displayElement) {
            displayElement.textContent = `${prefix}: ${value}`;
        }
    };

    // Cargar configuraciones desde localStorage
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

    // Ejecutar carga de settings
    loadSettings();

    // Toggle de edición de perfil
    if (editProfileButton && profileForm) {
        editProfileButton.addEventListener('click', () => {
            profileForm.style.display = (profileForm.style.display === 'none' || profileForm.style.display === '') ? 'block' : 'none';
        });
    }

    // Mostrar vista previa del icono cargado
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

    // Aplicar cambios al perfil
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

    // Filtrar icono
    if (filterIconBtn && icon) {
        filterIconBtn.addEventListener('click', () => {
            icon.style.filter = 'blur(5px)';
        });
    }

    // Quitar filtro del icono
    if (unfilterIconBtn && icon) {
        unfilterIconBtn.addEventListener('click', () => {
            icon.style.filter = 'none';
        });
    }

    // Modal de vista previa del icono
    if (icon) {
        icon.addEventListener('click', () => {
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
