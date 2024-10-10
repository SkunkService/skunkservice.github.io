document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const go = params.get('go');

    const pageContent = {
        terms: `
            <h2>Terms of Service</h2>
            <p>Welcome to SkunkService! By using our service, you agree to the following terms:</p>
            <ul>
                <li>You must provide accurate and complete information when creating an account.</li>
                <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                <li>You agree to notify us immediately of any unauthorized use of your account.</li>
                <li>We reserve the right to modify or terminate the service for any reason without notice.</li>
            </ul>
            <p>These terms are subject to change, and your continued use of the service constitutes your acceptance of any updates.</p>
        `,
        privacy: `
            <h2>Privacy Policy</h2>
            <p>Your privacy is important to us. We collect personal information to provide you with a better service.</p>
            <p>We do not share your information with third parties without your consent, except as required by law.</p>
            <p>You have the right to access, correct, or delete your personal information at any time.</p>
        `,
        guide: `
            <h2>Guidelines</h2>
            <p>We expect all users to adhere to our community guidelines:</p>
            <ul>
                <li>Be respectful to others in the community.</li>
                <li>No spamming or advertising without permission.</li>
                <li>Report any inappropriate content to the moderators.</li>
            </ul>
        `,
        promises: `
            <h2>Promises of Guidelines</h2>
            <p>At SkunkService, we promise to:</p>
            <ul>
                <li>Provide a safe and welcoming environment for all users.</li>
                <li>Ensure transparency in our operations and decision-making processes.</li>
                <li>Actively listen to user feedback and make improvements based on community input.</li>
            </ul>
        `
    };

    const pageDiv = document.getElementById('page');

    if (go && pageContent[go]) {
        pageDiv.innerHTML = pageContent[go];
    } else {
        pageDiv.innerHTML = '<h2>Welcome to SkunkService</h2><p>Select a section from the navigation above.</p>';
    }
});
