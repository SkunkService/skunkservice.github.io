document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('verification-form');
    const resultMessage = document.getElementById('result-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Check if CAPTCHA widget is present and loaded
        const turnstileWidget = document.querySelector('.cf-turnstile');
        if (!turnstileWidget) {
            resultMessage.textContent = 'CAPTCHA widget not found.';
            return;
        }

        // Since we cannot verify CAPTCHA client-side, show a message
        resultMessage.textContent = 'CAPTCHA completed! (Server-side verification is not implemented.)';
    });
});
