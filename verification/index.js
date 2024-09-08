document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('verification-form');
    const resultMessage = document.getElementById('result-message');

    // Check if the user is already verified
    if (localStorage.getItem('captchaVerified') === 'true') {
        resultMessage.textContent = 'You are already verified!';
        form.style.display = 'none'; // Hide the form if already verified
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Check if CAPTCHA response is present
        const captchaResponseField = document.querySelector('input[name="cf-turnstile-response"]');
        const captchaResponse = captchaResponseField ? captchaResponseField.value : null;

        console.log('CAPTCHA response:', captchaResponse);

        if (!captchaResponse) {
            resultMessage.textContent = 'CAPTCHA not completed or response not found.';
            return;
        }

        // Save the verification state to localStorage
        localStorage.setItem('captchaVerified', 'true');
        console.log('Verification state saved to localStorage');

        // Inform the user and hide the form
        resultMessage.textContent = 'CAPTCHA completed successfully!';
        form.style.display = 'none'; // Optionally hide the form
    });
});

// Debugging: Check if localStorage is accessible and check its content
console.log('localStorage.getItem("captchaVerified"):', localStorage.getItem('captchaVerified'));
