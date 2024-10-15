document.addEventListener('DOMContentLoaded', function () {
    const pageDiv = document.getElementById('page');

    // Function to load page content based on button clicks
    function loadPageContent(content) {
        if (content === 'info') {
            pageDiv.innerHTML = `
                <h2>Team Information</h2>
                <h3>Team Name: SkunkPlatform Team</h3>
                <h3>Team Roles</h3>
                <ul>
                    <li><strong>Collaborators Role:</strong> The Collabolators can Add, Edit, and Delete any Files. This Collabolators is only trusted for Guidelines.</li>
                    <li><strong>Discord.js Role:</strong> If you are a Programmer of Discord.js to Program.</li>
                    <li><strong>Moderators Role:</strong> The Moderator can Ban, Kick, and Mute to Members. This Moderators Role are only trusted for Team Guidelines.</li>
                    <li><strong>helper Role:</strong> This Helper can Help to Program the Files, Helping a Members, Anything. Only trusted for Guidelines. No Bullying, No Hating the Members. </li>
                </ul>
                <h3>Team Culture</h3>
                <p>We believe in collaboration, creativity, and continuous improvement. Our team values every member's input and strives to maintain a positive work environment.</p>
            `;
        } else if (content === 'guidelines') {
            pageDiv.innerHTML = `
                <h2>Team Guidelines</h2>
                <h3>1. Communication</h3>
                <p>Maintain open communication with all team members. Use our designated communication channels effectively.</p>
                <h3>2. Respect and Support</h3>
                <p>Always treat your fellow team members with respect. Support each other in your tasks and challenges.</p>
                <h3>3. Accountability</h3>
                <p>Take responsibility for your actions and commitments. If you're unable to meet a deadline, communicate it in advance.</p>
                <h3>4. Collaboration</h3>
                <p>Work together as a team. Share knowledge and assist others in completing tasks.</p>
                <h3>5. Feedback</h3>
                <p>Give constructive feedback and be open to receiving it. It’s a crucial part of our growth and improvement.</p>
                <h3>6. Continuous Improvement</h3>
                <p>Always seek to improve your skills and knowledge. Take part in training sessions and share resources with the team.</p>
                <h3>7. Time Management</h3>
                <p>Prioritize your tasks and manage your time effectively to ensure project deadlines are met.</p>
                <h3>8. Fun and Engagement</h3>
                <p>Lastly, enjoy the process! We believe that having fun at work fosters creativity and team spirit.</p>
            `;
        } else if (content === 'discord') {
            pageDiv.innerHTML = `
                <h2>Team Discord Server</h2>
                <p>Join us on our Discord server for more discussions!</p>
                <p><a href="https://discord.gg/5JUXgtm5Wm" target="_blank">Click here to join our Discord server!</a></p>
            `;
        } else if (content === 'source') {
            pageDiv.innerHTML = `
                <h2>Source Mode</h2>
                <div class="source-theme">
                    <p>You can copy this style example:</p>
                    <div class="code"><pre><span style="color: white;">.source-theme {</span>
    <span style="color: lightgreen;">background-color</span>: <span style="color: lightblue;">#1c1c1c</span>; 
    <span style="color: lightgreen;">color</span>: <span style="color: lightblue;">white</span>; 
    <span style="color: lightgreen;">padding</span>: <span style="color: lightblue;">15px</span>; 
    <span style="color: lightgreen;">border-radius</span>: <span style="color: lightblue;">8px</span>; 
<span style="color: white;">}</span></pre></div>
                </div>
            `;
        } else {
            pageDiv.innerHTML = '<p>Invalid Page</p>';
        }
    }

    // Function to get the URL parameters and load the corresponding content
    function loadFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const goParam = urlParams.get('go');
        if (goParam) {
            loadPageContent(goParam);
        }
    }

    // Handle button clicks
    document.getElementById('teamInfoBtn').addEventListener('click', function () {
        loadPageContent('info');
    });
    document.getElementById('teamGuidelinesBtn').addEventListener('click', function () {
        loadPageContent('guidelines');
    });
    document.getElementById('teamDiscordBtn').addEventListener('click', function () {
        loadPageContent('discord');
    });
    document.getElementById('sourceModeBtn').addEventListener('click', function () {
        loadPageContent('source');
    });

    // Load content based on URL parameter
    loadFromURL();
});
