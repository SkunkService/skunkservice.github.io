setTimeout(() => {
    const embedSpan = document.getElementById("skunkservice-embed");
    
    if (!embedSpan) {
        console.error("Element with ID 'skunkservice-embed' not found.");
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
        display: inline-block; /* Ensure it fits well inside the span */
    `;
    
    // Create and style the header
    const h1 = document.createElement("h1");
    h1.textContent = "SkunkService - Apps";
    h1.style = `
        color: #1f8efa; /* SkunkService's primary text color */
        font-family: Arial, sans-serif;
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
    `;
    embed.appendChild(h1);
    
    // Create and style the button
    const buttonApp1 = document.createElement("button");
    buttonApp1.id = "oapp1";
    buttonApp1.textContent = "SkunkStreams";
    buttonApp1.style = `
        background-color: #1f8efa; /* SkunkService's primary button color */
        color: #ffffff; /* White text */
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    `;
    
    // Add hover effect to the button
    buttonApp1.addEventListener("mouseover", () => {
        buttonApp1.style.backgroundColor = "#1a74d2"; /* Darker shade for hover */
    });
    
    buttonApp1.addEventListener("mouseout", () => {
        buttonApp1.style.backgroundColor = "#1f8efa"; /* Revert to original color */
    });
    
    // Add event listener to the button
    buttonApp1.addEventListener("click", () => {
        if (confirm("Are you sure you want to open this link?")) {
            window.open("https://skunkservice.github.io/live");
        } else {
            alert("The Open Link has been Cancelled.");
        }
    });
    
    // Append button to embed
    embed.appendChild(buttonApp1);
    
    // Append embed to the specified span
    embedSpan.appendChild(embed);
}, 2500);

/*
HTML Embed Example:
This JavaScript code will target the <span> element with the ID 'skunkservice-embed'
to insert a custom embed. Ensure the HTML includes this <span> element:

<!-- This span is where the JavaScript will inject the custom embed -->
<span id="skunkservice-embed"></span>

Include this <span> element in the body of your HTML document where you want
the custom embed to appear. Additionally, make sure to link to this JavaScript file:

<!-- Link to the external JavaScript file -->
<script src="https://raw.githubusercontent.com/SkunkService/skunkservice.github.io/main/api/embeds/api.js"></script>
*/
