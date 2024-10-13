// tiktok.js

const BASE_URL = 'https://api.tiktok.com/v1'; // Placeholder URL, update with the actual one

// Function to fetch trending TikTok videos without authentication
export async function getTrendingVideos() {
    try {
        const response = await fetch(`${BASE_URL}/trending`); // Replace with actual endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching trending videos:', error);
        throw error; // Re-throw the error for handling in the caller
    }
}
