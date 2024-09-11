setTimeout(() => {
    const embedSpan = document.getElementById("live-embed");
    
    if (!embedSpan) {
        console.error("Element with ID 'live-embed' not found.");
        return;
    }

    // Get the stream type and username from attributes
    const username = embedSpan.getAttribute("username");
    const typeStream = embedSpan.getAttribute("typestream");

    if (!username || !typeStream) {
        console.error("Username or stream type is missing.");
        return;
    }

    // Create and style the embed container
    const embed = document.createElement("div");
    embed.style = `
        border: 2px solid #1f8efa; /* SkunkService's primary border color */
        border-radius: 10px;
        padding: 20px;
        background-color: #f5f5f5; /* Light background for the embed */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        max-width: 500px;
        margin: 0 auto;
        display: inline-block;
    `;

    // Create user details container
    const user = document.createElement("div");
    user.style = `
        text-align: center;
        margin-bottom: 10px;
    `;

    const name = document.createElement("p");
    name.textContent = `Username: ${username}`;
    name.style = `
        font-size: 18px;
        font-weight: bold;
    `;

    const icon = document.createElement("img");
    icon.src = `https://avatars.dicebear.com/api/initials/${username}.svg`; // Placeholder avatar generator
    icon.style = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 10px;
    `;

    // Append username and avatar to user div
    user.appendChild(icon);
    user.appendChild(name);

    // Create button for watching stream
    const watchStream = document.createElement("button");
    watchStream.style = `
        background-color: #1f8efa; /* SkunkService's primary button color */
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    `;

    if (typeStream === "twitch") {
        watchStream.textContent = "Watch on Twitch";
        watchStream.addEventListener("click", () => {
            window.open(`https://www.twitch.tv/${username}`, '_blank');
        });
    } else if (typeStream === "tiktok") {
        watchStream.textContent = "Watch on TikTok";
        watchStream.addEventListener("click", () => {
            window.open(`https://www.tiktok.com/@${username}/live`, '_blank');
        });
    } else {
        console.error("Invalid stream type specified.");
        return;
    }

    // Append user info and button to embed
    embed.appendChild(user);
    embed.appendChild(watchStream);

    // Append the embed to the specified span
    embedSpan.appendChild(embed);

}, 2500);

/*
HTML Embed:
This JavaScript code will target the <span> element with the ID 'live-embed' to insert a custom live stream embed.

<!-- This span is where the JavaScript will inject the custom embed -->
<span id="live-embed" username="streamer_username" typestream="twitch"></span>

Include this <span> element in the body of your HTML document where you want the custom embed to appear.

Additionally, make sure to link to this JavaScript file:

<!-- Link to the external JavaScript file hosted on GitHub or any other service -->
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/embeds/live-embed.js"></script>
*/
