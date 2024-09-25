// achievement-api.js

// Simulated local storage
const achievements = JSON.parse(localStorage.getItem('achievements')) || [];

// Function to reward an achievement
function rewardAchievement(achievementId, reason = null) {
    const achievement = achievements.find(ach => ach.id === achievementId);
    if (achievement) {
        achievement.rewarded = true; // Mark as rewarded
        localStorage.setItem('achievements', JSON.stringify(achievements));
        console.log(`Achievement rewarded: ${achievement.name}`);
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
