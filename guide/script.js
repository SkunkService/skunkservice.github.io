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
            <h2>Welcome to the SkunkService's Privacy Policy</h2>
            <p>The Privacy Policy governs the safety, community guidelines, and terms of service for SkunkService.</p>
            
            <h3>Community Guidelines</h3>
            <p>SkunkService is committed to maintaining a safe and secure environment for all users. Please review our community guidelines below:</p>
            <ul>
                <li><strong>Not Available for Accounts:</strong> This account is not available in SkunkService.</li>
                <li><strong>Sexual Content:</strong> The rule of privacy policy prohibits sexual content, which is considered illegal and forbidden. Any use of such content will result in a ban.</li>
                <li><strong>Nudity:</strong> Nudity is strictly not allowed under the privacy policy and will lead to a ban if violated.</li>
                <li><strong>Community Guidelines:</strong> Our <a href="?go=guide">SkunkService's Community Guidelines</a> provide protection for both the SkunkService community and SkunkPlatform developers.</li>
                <li><strong>Gore Content:</strong> Any content containing gore, such as blood, hearts, or crudeness, will result in a ban.</li>
                <li><strong>JU (Jumper Utilities):</strong> Jumper Utilities will be protected as DevTools to prevent malware, console abuse, and unsafe software usage.</li>
            </ul>
            
            <h3>Privacy and Security</h3>
            <p>At SkunkService, we take your privacy seriously. Our platform is designed with security features to protect your personal information. We also take steps to avoid malware and unsafe software in our system.</p>

            <p>By adhering to these guidelines, you help us create a safer and more enjoyable environment for everyone in the SkunkService community.</p>
        `,
        guide: `<h2>Community Guidelines</h2>
<p>To ensure a positive environment, we ask all members to follow these simple rules:</p>
<ul>
    <li><strong>Respectfulness:</strong> Treat everyone with kindness and respect, regardless of differing opinions.</li>
    <li><strong>No spamming or unsolicited advertising:</strong> Please refrain from spamming messages or promoting products/services without prior permission.</li>
    <li><strong>Report inappropriate behavior:</strong> If you encounter any offensive or harmful content, please report it to the moderators promptly.</li>
    <li><strong>Stay on-topic:</strong> Keep discussions relevant to the community's purpose.</li>
    <li><strong>Privacy:</strong> Respect others' privacy and never share personal information without consent.</li>
</ul>
<p>By following these guidelines, we can maintain a welcoming and enjoyable space for everyone!</p>`,
        promises: `
            <h2>Promises of Guidelines</h2>
<p>At SkunkService, we are committed to creating a positive and safe community for all users. We promise to uphold the following principles:</p>
<ul>
    <li>
        <strong>Provide a safe and welcoming environment for all users:</strong>
        <p>We strive to ensure that every user feels included and respected. We have zero tolerance for harassment, discrimination, or any form of abuse. Our moderation team is trained to handle reports seriously and with care, ensuring a supportive atmosphere.</p>
    </li>
    <li>
        <strong>Ensure transparency in our operations and decision-making processes:</strong>
        <p>We believe in being open with our community. Our policies, moderation actions, and updates will be communicated clearly and regularly. Users will have access to information about how decisions are made and the reasoning behind significant changes to our services.</p>
    </li>
    <li>
        <strong>Actively listen to user feedback and make improvements based on community input:</strong>
        <p>Your voice matters! We encourage users to share their experiences and suggestions. Regular surveys and feedback sessions will be conducted to gather input, and we will actively work to implement feasible suggestions that enhance the user experience.</p>
    </li>
    <li>
        <strong>Prevent console malware and uphold the integrity of our services:</strong>
        <p>We take the security of our platform seriously. Regular security audits and updates will be performed to prevent malicious activities. We will also provide users with guidance on safe practices and how to recognize potential threats to their accounts.</p>
    </li>
    <li>
        <strong>Establish clear guidelines for our promises and rules:</strong>
        <p>Our guidelines will be clearly outlined and easily accessible. We will define what behaviors are expected from users and what actions may result in warnings or bans. Transparency in our rules ensures everyone knows the standards we uphold.</p>
    </li>
    <li>
        <strong>Our console software is protected by SkunkService's commitments and SkunkPlatform:</strong>
        <p>SkunkService and SkunkPlatform are dedicated to delivering quality software that prioritizes user safety and security. All development practices will adhere to industry standards, ensuring a robust and reliable experience for all users.</p>
    </li>
    <li>
        <strong>SkunkService developers allow access to the API for JavaScript through JSDelivery on GitHub:</strong>
        <p>To foster innovation and creativity, we provide developers with access to our API. We encourage the community to build and share applications that enhance the user experience. Documentation and support will be available for developers seeking to integrate with our platform.</p>
    </li>
    <li>
        <strong>Ensure the safety and security of the console:</strong>
        <p>We are committed to maintaining a secure environment for our users. Regular security measures will be implemented, including encryption, two-factor authentication, and user education on safe practices to protect personal information.</p>
    </li>
</ul>
<p>By adhering to these promises, we aim to create a thriving community where users can enjoy and contribute positively to SkunkService. Thank you for being part of our journey!</p>
        `
    };

    const pageDiv = document.getElementById('page');

    if (go && pageContent[go]) {
        pageDiv.innerHTML = pageContent[go];
    } else {
        pageDiv.innerHTML = '<h2>Welcome to SkunkService</h2><p>Select a section from the navigation above.</p>';
    }

    const translation = localStorage.getItem("translation");
});
