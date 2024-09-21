document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the 'url' attribute
    const urlButtons = document.querySelectorAll('button[url]');

    // Add click event listener to each button
    urlButtons.forEach(button => {
        // Add click event listener
        button.addEventListener('click', function() {
            // Redirect to the Ko-Fi page using the url attribute
            const url = this.getAttribute('url');
            window.location.href = url;
        });
    });
});
