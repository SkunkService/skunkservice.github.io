const reviewGuildButton = document.getElementById('review-guild');
const inviteLinkInput = document.getElementById('invitelink-review');
const setupBody = document.getElementById('setup-body');
const feedbackBody = document.getElementById('feedback-body');
const reportProblemBody = document.getElementById('report-problem-body');

const feedbackForm = document.getElementById('feedback-form');
const reportForm = document.getElementById('report-problem-form');

// Function to show modal with dynamic title and description
function showModal(title, description) {
    const modalTitle = document.getElementById('title-alert');
    const modalDescription = document.getElementById('description-alert');
    const blackBackground = document.getElementById('black-background');

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    blackBackground.hidden = false;
    blackBackground.style.display = "flex";
}

// Function to hide modal
function hideModal() {
    const blackBackground = document.getElementById('black-background');
    blackBackground.hidden = true;
    blackBackground.style.display = "none";
}

// Function to validate the invite link
function validateInviteLink(link) {
    const discordInvitePattern = /^https:\/\/discord\.gg\/[A-Za-z0-9]+$/;
    return discordInvitePattern.test(link);
}

// Toggle visibility of sections
function toggleSection(showSection) {
    setupBody.hidden = true;
    feedbackBody.hidden = true;
    reportProblemBody.hidden = true;
    
    if (showSection === 'setup') setupBody.hidden = false;
    else if (showSection === 'feedback') feedbackBody.hidden = false;
    else if (showSection === 'report') reportProblemBody.hidden = false;
}

// Function to send feedback or report to the webhook
async function sendToWebhook(content) {
    const webhookUrl = 'https://discord.com/api/webhooks/1287297444870357025/VyGYvm6YGiSqMURAceUkbEGpDroIM5legbQjqwAXI7zd10GPKHIern0BlWv-8bxE9cZa'; // Replace with your actual webhook URL

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        });

        if (!response.ok) {
            throw new Error('Error sending webhook: ' + response.statusText);
        }

        showModal('Success!', 'Your message has been sent successfully.');
    } catch (error) {
        showModal('Error', 'Error sending message. Please try again later.');
        console.error('Error sending webhook:', error);
    }
}

// Button event listeners
document.getElementById('setup-btn').addEventListener('click', () => toggleSection('setup'));
document.getElementById('feedback-btn').addEventListener('click', () => toggleSection('feedback'));
document.getElementById('report-problem-btn').addEventListener('click', () => toggleSection('report'));

// Handle feedback form submission
feedbackForm.addEventListener('submit', () => {
    const name = document.getElementById('feedback-name').value;
    const email = document.getElementById('feedback-email').value;
    const comments = document.getElementById('feedback-comments').value;

    const content = `Feedback from ${name} (${email}): ${comments}`;
    sendToWebhook(content);
});

// Handle report form submission
reportForm.addEventListener('submit', () => {
    const name = document.getElementById('problem-name').value;
    const email = document.getElementById('problem-email').value;
    const description = document.getElementById('problem-description').value;

    const content = `Problem reported by ${name} (${email}): ${description}`;
    sendToWebhook(content);
});

// Review guild button click event
reviewGuildButton.addEventListener('click', () => {
    const inviteLink = inviteLinkInput.value;

    if (!validateInviteLink(inviteLink)) {
        showModal('Invalid Link', 'Please enter a valid Discord invite link.');
        return;
    }

    const content = `A new guild review request with invite link: ${inviteLink}`;
    sendToWebhook(content);
});

// Hide modal when clicking the "OK" button inside the alert
document.getElementById('ok-alert').addEventListener('click', hideModal);

// Authorization button event listener
document.getElementById('authorize-btn').addEventListener('click', () => {
    const redirectUri = 'https://skunkservice.github.io/skunkapp/';
    const permissions = '8'; // Adjust as needed
    const clientId = '1257962930863865866'; // Your actual Discord app client ID
    const url = `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=${permissions}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=bot+applications.commands+email`;

    // Open the authorization URL in a popout window
    window.open(url, 'popout', 'width=800,height=600');
});
