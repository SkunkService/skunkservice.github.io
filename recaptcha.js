document.addEventListener('DOMContentLoaded', function() {
    // Execute reCAPTCHA
    grecaptcha.execute().then(function(token) {
  // 1. Verify token length (basic check)
  if (token.length > 20) {
    // 2. Send data to a verification endpoint (limited security)
    fetch('/verify-recaptcha', {
      method: 'POST',
      body: JSON.stringify({ token }), // Send token for (simulated) server-side check
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          // Success: Hide reCAPTCHA, show content
          document.getElementById('recaptcha').style.display = 'none';
          document.getElementById('content').style.display = 'block';
        } else {
          alert('Verification failed. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error verifying token:', error);
        alert('Error: Verification failed. Please try again.');
      });
  } else {
    alert('Invalid reCAPTCHA token.');
  }
});
});
