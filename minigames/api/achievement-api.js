console.log("Loading for Achievement API...");

// Event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Achievement API has been Loaded.");
});

// Simulated local storage
const achievements = JSON.parse(localStorage.getItem('achievements')) || [];

// Function to check if an achievement has been rewarded
function hasAchievement(achievementId) {
    const achievement = achievements.find(ach => ach.id === achievementId);
    if (achievement) {
        return achievement.rewarded;
    }
    console.log('Achievement ID does not exist.');
    return false; // Return false if the achievement does not exist
}

// Function to reward an achievement
function rewardAchievement(achievementId, reason = null) {
    const achievement = achievements.find(ach => ach.id === achievementId);
    if (achievement) {
        if (!achievement.rewarded) {
            achievement.rewarded = true;
            localStorage.setItem('achievements', JSON.stringify(achievements));
            console.log(`Achievement rewarded: ${achievement.name}`);

            // Create a notification element
            const notification = document.createElement('div');
            notification.textContent = `Achievement Unlocked: ${achievement.name}`;
            
            // Styling the notification
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.backgroundColor = '#4CAF50';
            notification.style.color = 'white';
            notification.style.padding = '15px';
            notification.style.borderRadius = '10px';
            notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            notification.style.transition = 'opacity 0.5s ease';
            notification.style.fontFamily = 'Arial, sans-serif';
            notification.style.fontSize = '16px';
            notification.style.fontWeight = 'bold';
            notification.style.zIndex = '1000';

            // Append the notification to the body
            document.body.appendChild(notification);

            // Fade out and remove the notification after a few seconds
            setTimeout(() => {
                notification.style.opacity = '0'; // Fade out
                setTimeout(() => {
                    document.body.removeChild(notification); // Remove from DOM
                }, 500); // Wait for fade-out transition
            }, 3000); // Show for 3 seconds
        } else {
            console.log(`Achievement already rewarded: ${achievement.name}`);
        }
    } else {
        console.log('Achievement ID does not exist.');
    }
}

// Function to create an achievement
function createAchievement(name, description) {
    const newAchievement = {
        id: achievements.length + 1, // Incremental ID
        name,
        description,
        rewarded: false
    };
    achievements.push(newAchievement);
    localStorage.setItem('achievements', JSON.stringify(achievements));
    console.log(`Achievement created: ${name}`);
}

// Function to open achievement list
function onClickAchievementList() {
    window.open('https://skunkservice.github.io/minigames/achievements', '_blank');
}
