// index.js
document.addEventListener('DOMContentLoaded', function () {
    const pageDiv = document.getElementById('page');

    // Function to load page content based on button clicks
    function loadPageContent(content) {
        if (content === 'info') {
            pageDiv.innerHTML = `
                <h2>Team Information</h2>
                <h3>Team Name: SkunkPlatform</h3>
                <p>We are a dedicated team focused on creating innovative solutions in the tech industry.</p>
                
                <h3>Our Mission</h3>
                <p>To provide exceptional services and products that enhance user experiences and promote growth.</p>
                
                <h3>Our Vision</h3>
                <p>To be a leader in technology solutions, fostering an environment of creativity, collaboration, and respect.</p>
                
                <h3>Team Roles</h3>
                <ul>
                    <li><strong>Project Manager:</strong> Oversees project timelines and resources.</li>
                    <li><strong>Developers:</strong> Responsible for coding and application development.</li>
                    <li><strong>Designers:</strong> Create user-friendly interfaces and designs.</li>
                    <li><strong>QA Testers:</strong> Ensure product quality through rigorous testing.</li>
                </ul>
                
                <h3>Current Projects</h3>
                <p>We are currently working on:</p>
                <ul>
                    <li>Project Alpha: A new platform for project management.</li>
                    <li>Project Beta: A mobile app for social networking.</li>
                    <li>Project Gamma: A website for educational resources.</li>
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
                <p><a href="https://discord.gg/YOUR_INVITE_CODE" target="_blank">Click here to join our Discord server!</a></p>
            `;
        } else if (content === 'source') {
            pageDiv.innerHTML = `
                <h2>Source Mode</h2>
                <div class="source-theme">
                    <h3>This is the Source Code</h3>
                </div>
            `;
        } else {
            pageDiv.innerHTML = '<p>Invalid Page</p>';
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
});
