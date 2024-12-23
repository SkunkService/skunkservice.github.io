(function() {
    let isConsoleOpen = false;
    const threshold = 160;

    function detectConsole() {
        console.log("[VIOLATION]: The DevTools you are trying to Open the Console. The DevTools using Console will violate the SkunkService's Promises of the Community Guidelines.");
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            if (!isConsoleOpen) {
                isConsoleOpen = true;
                document.body.innerHTML=`<div class="container"><h1>You've been Protected of this Website.</h1>
                <p>The Website were Protected Because's a DevTools Openned.</p>
                <p>Please, Close your DevTools and Restart the Website if you continue.</p>
                <button onclick="window.location.reload();">Restart Website</button></div>`;
            }
        } else {
            isConsoleOpen = false;
        }
    }

    setInterval(detectConsole, 1000); // Check every second
})();

/*
This allows you to use the following script tag for integration:
Old Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/devtools-detection.js"></script>
Latest Example:
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io@main/api/devtools-detection.js"></script>
*/
