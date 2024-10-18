document.getElementById('verify-button').addEventListener('click', async function() {
    const token = turnstile.getResponse();

    if (!token) {
        alert('No CAPTCHA token found.');
        return;
    }

    // Unsecure demonstration - do NOT use this in production!
    const response = await fetch(`https://challenges.cloudflare.com/turnstile/v0/siteverify?secret=your_secret_key_here&response=${token}`, {
        method: 'POST'
    });

    const data = await response.json();

    if (data.success) {
        const reviewP = document.createElement('p');
        reviewP.innerHTML = 'Review: CAPTCHA verification successful. You can continue the Website, <a href="https://skunkservice.github.io">Click here</a>';
        document.getElementById('review').appendChild(reviewP);
        localStorage.setItem("");
    } else {
        const reviewE = document.createElement('p');
        reviewE.innerHTML = 'Hasn\'t been Success.';
        document.getElementById('review').appendChild(reviewE);
    }
});
