document.addEventListener('DOMContentLoaded', function() {
    // Execute reCAPTCHA
    grecaptcha.ready(function() {
        grecaptcha.execute().then(function(token) {
            document.getElementById('recaptchaToken').value = token;

            // Hide reCAPTCHA and show content
            document.getElementById('recaptcha').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }).catch(function(error) {
            console.error('Error during reCAPTCHA execution:', error);
        });
    }).catch(function(error) {
        console.error('Error during reCAPTCHA ready:', error);
    });
});
