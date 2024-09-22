const reviewGuildButton = document.getElementById('review-guild');
const inviteLinkInput = document.getElementById('invitelink-review');
const setupBody = document.getElementById('setup-body');
const feedbackBody = document.getElementById('feedback-body');
const reportProblemBody = document.getElementById('report-problem-body');

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

// Button event listeners
document.getElementById('setup-btn').addEventListener('click', () => toggleSection('setup'));
document.getElementById('feedback-btn').addEventListener('click', () => toggleSection('feedback'));
document.getElementById('report-problem-btn').addEventListener('click', () => toggleSection('report'));

reviewGuildButton.addEventListener('click', async () => {
    const inviteLink = inviteLinkInput.value;

    if (!validateInviteLink(inviteLink)) {
        showModal('Invalid Link', 'Please enter a valid Discord invite link.');
        return;
    }

    try {
        const response = await fetch('https://discord.com/api/webhooks/1287297444870357025/VyGYvm6YGiSqMURAceUkbEGpDroIM5legbQjqwAXI7zd10GPKHIern0BlWv-8bxE9cZa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: `A new guild review request with invite link: ${inviteLink}`
            })
        });

        if (!response.ok) {
            throw new Error('Error sending webhook: ' + response.statusText);
        }

        showModal('Success!', 'Server review request sent successfully.');
    } catch (error) {
        showModal('Error', 'Error sending review request. Please try again later.');
        console.error('Error sending webhook:', error);
    }
});

// Hide modal when clicking the "OK" button inside the alert
document.getElementById('ok-alert').addEventListener('click', hideModal);

document.getElementById('authorize-btn').addEventListener('click', () => {
    const clientId = '1257962930863865866'; // Your Discord app client ID
    const redirectUri = 'https://skunkservice.github.io/skunkapp/';
    const permissions = '8'; // Adjust as needed
    const url = `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=${permissions}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=bot+applications.commands+email`;

    // Open the authorization URL in a popout window
    window.open(url, 'popout', 'width=800,height=600');
});
