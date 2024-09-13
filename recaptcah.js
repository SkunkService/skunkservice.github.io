document.addEventListener('DOMContentLoaded', function() {
    grecaptcha.ready(function() {
        grecaptcha.execute().then(function(token) {
            // Set the token in the hidden field
            document.getElementById('recaptchaToken').value = token;

            // Remove the hidden attribute from the content
            document.getElementById('content').removeAttribute('hidden');

            // Optionally, hide the reCAPTCHA form if you don't need it after verification
            document.getElementById('recaptcha').setAttribute('hidden', 'true');
        });
    });
});
