const reviewGuildButton = document.getElementById('review-guild');
const inviteLinkInput = document.getElementById('invitelink-review');

// Function to show modal with dynamic title and description
function showModal(title, description) {
    const modalTitle = document.getElementById('title-alert');
    const modalDescription = document.getElementById('description-alert');
    const blackBackground = document.getElementById('black-background');

    // Set the title and description
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Display the modal
    blackBackground.hidden = false;
    blackBackground.style.display = "flex";
}

// Function to hide modal
function hideModal() {
    document.getElementById('black-background').hidden = true;
    blackBackground.style.display = "none";
}

// Function to validate the invite link
function validateInviteLink(link) {
    const discordInvitePattern = /^https:\/\/discord\.gg\/[A-Za-z0-9]+$/;
    return discordInvitePattern.test(link);
}

reviewGuildButton.addEventListener('click', async () => {
  // Get the invite link from the input field
  const inviteLink = inviteLinkInput.value;

  // Validate the invite link
  if (!validateInviteLink(inviteLink)) {
    showModal('Invalid Link', 'Please enter a valid Discord invite link.');
    return;
  }

  try {
    // Replace with your actual Discord webhook URL
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

    // Display success message in the modal
    showModal('Success!', 'Server review request sent successfully.');
  } catch (error) {
    // Handle error and display error message in the modal
    showModal('Error', 'Error sending review request. Please try again later.');
    console.error('Error sending webhook:', error);
  }
});

// Hide modal when clicking the "OK" button inside the alert
document.getElementById('ok-alert').addEventListener('click', hideModal);
