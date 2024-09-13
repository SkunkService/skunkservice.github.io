document.addEventListener('DOMContentLoaded', function() {
    // Execute reCAPTCHA
    grecaptcha.ready(function() {
        grecaptcha.execute().then(function(token) {
            document.getElementById('recaptchaToken').value = token;

            // Hide reCAPTCHA and show content
            document.getElementById('recaptcha').style.display = 'none';
            document.getElementById('content').style.display = 'block';

            // Trigger form submission (adjust as needed)
            document.getElementById('myForm').submit();
        }).catch(function(error) {
            console.error('Error during reCAPTCHA execution:', error);
            // Display a user-friendly error message
            alert('Error: Unable to verify reCAPTCHA. Please try again.');
        });
    }).catch(function(error) {
        console.error('Error during reCAPTCHA ready:', error);
        // Display a user-friendly error message
        alert('Error: reCAPTCHA initialization failed. Please try again.');
    });
});
