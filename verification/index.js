document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('verification-form');
    const resultMessage = document.getElementById('result-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Check if the CAPTCHA response is available
        const captchaResponse = document.querySelector('input[name="cf-turnstile-response"]')?.value;
        
        if (!captchaResponse) {
            resultMessage.textContent = 'Please complete the CAPTCHA.';
            return;
        }

        // Inform the user that CAPTCHA was completed (in a real case, server-side verification is needed)
        resultMessage.textContent = 'CAPTCHA completed! (Server-side verification is not implemented.)';
    });
});
