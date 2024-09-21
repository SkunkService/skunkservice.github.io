document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the 'url' attribute
    const urlButtons = document.querySelectorAll('button[url]');

    // Add click event listener to each button
    urlButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('url');
            const urlType = this.getAttribute('url-type');
            const popoutSize = this.getAttribute('popout-size');

            // Define dimensions based on popout-size
            let width, height;
            switch (popoutSize) {
                case 'phone-size':
                    width = 375;
                    height = 667;
                    break;
                case 'tablet':
                    width = 768;
                    height = 1024;
                    break;
                case 'pc':
                    width = 1280;
                    height = 800;
                    break;
                case 'tiny':
                    width = 300;
                    height = 400;
                    break;
                case 'medium':
                    width = 600;
                    height = 800;
                    break;
                case 'large':
                    width = 1024;
                    height = 768;
                    break;
                default:
                    width = 600; // default size
                    height = 400; // default size
                    break;
            }

            if (urlType === 'newtab') {
                window.open(url, '_blank');
            } else if (urlType === 'href') {
                window.location.href = url;
            } else if (urlType === 'popout') {
                window.open(url, 'popoutWindow', `width=${width},height=${height}`);
            }
        });
    });
});
