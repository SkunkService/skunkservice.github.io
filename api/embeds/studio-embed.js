setTimeout(() => {
    const embedSpan = document.getElementById("studio-embed");

    if (!embedSpan) {
        console.error("Element with ID 'studio-embed' not found.");
        return;
    }

    // Get the studio type and username from attributes
    const username = embedSpan.getAttribute("username");
    const typeStudio = embedSpan.getAttribute("typestudio");

    if (!username || !typeStudio) {
        console.error("Username or studio type is missing.");
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

    // Create button for accessing studio content
    const accessStudio = document.createElement("button");
    accessStudio.style = `
        background-color: #1f8efa; /* SkunkService's primary button color */
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    `;

    if (typeStudio === "youtube") {
        accessStudio.textContent = "Visit YouTube Studio";
        accessStudio.addEventListener("click", () => {
            window.open(`https://studio.youtube.com/channel/${username}`, '_blank');
        });
    } else if (typeStudio === "vimeo") {
        accessStudio.textContent = "Visit Vimeo Studio";
        accessStudio.addEventListener("click", () => {
            window.open(`https://vimeo.com/manage/${username}`, '_blank');
        });
    } else if (typeStudio === "tiktok") {
        accessStudio.textContent = "Visit TikTok Profile";
        accessStudio.addEventListener("click", () => {
            window.open(`https://www.tiktok.com/@${username}`, '_blank');
        });
    } else {
        console.error("Invalid studio type specified.");
        return;
    }

    // Append user info and button to embed
    embed.appendChild(user);
    embed.appendChild(accessStudio);

    // Append the embed to the specified span
    embedSpan.appendChild(embed);

}, 2500);

/*
HTML Embed:
This JavaScript code will target the <span> element with the ID 'studio-embed' to insert a custom studio embed.

<!-- This span is where the JavaScript will inject the custom embed -->
<span id="studio-embed" username="studio_username" typestudio="youtube"></span>

Include this <span> element in the body of your HTML document where you want the custom embed to appear.

Additionally, make sure to link to this JavaScript file:

<!-- Link to the external JavaScript file hosted on GitHub or any other service -->
<script src="https://cdn.jsdelivr.net/gh/SkunkService/skunkservice.github.io/api/embeds/studio-embed.js"></script>
*/
