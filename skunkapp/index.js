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
}

// Function to hide modal
function hideModal() {
    document.getElementById('black-background').hidden = true;
}

reviewGuildButton.addEventListener('click', async () => {
  // Get the invite link from the input field
  const inviteLink = inviteLinkInput.value;

  // Basic validation (optional, improve based on your needs)
  if (!inviteLink.startsWith('https://discord.gg/')) {
    alert('Please enter a valid Discord invite link.');
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

    // Handle successful webhook response (e.g., display a success message)
    console.log('Webhook sent successfully!');
    alert('Server review request sent!');
  } catch (error) {
    // Handle error (e.g., display an error message)
    console.error('Error sending webhook:', error);
    alert('Error sending review request. Please try again.');
  }
});
// Hide modal when clicking the "OK" button inside the alert
document.getElementById('ok-alert').addEventListener('click', hideModal);
