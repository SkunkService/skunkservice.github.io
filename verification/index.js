document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('verification-form');
    const resultMessage = document.getElementById('result-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Check if CAPTCHA response is present
        const captchaResponseField = document.querySelector('input[name="cf-turnstile-response"]');
        const captchaResponse = captchaResponseField ? captchaResponseField.value : null;

        if (!captchaResponse) {
            resultMessage.textContent = 'CAPTCHA not completed or response not found.';
            return;
        }

        // Since server-side verification is not available, just show a message
        resultMessage.textContent = 'CAPTCHA completed! (Server-side verification is needed for full validation.)';
    });
});
