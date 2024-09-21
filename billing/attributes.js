document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the 'url' attribute
    const urlButtons = document.querySelectorAll('button[url]');

    // Add click event listener to each button
    urlButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('url');
            const urlType = this.getAttribute('url-type');

            if (urlType === 'newtab') {
                window.open(url, '_blank');
            } else if (urlType === 'href') {
                window.location.href = url;
            } else if (urlType === 'popout') {
                // Customize the popout behavior as needed
                window.open(url, 'popoutWindow', 'width=600,height=400');
            }
        });
    });
});
