// ai-api.js

async function generateImage(prompt) {
  const API_KEY = '9ce816ed-e173-4ae5-8e6f-7bc1dec45187'; // Replace with your DeepAI API key
  const API_URL = 'https://api.deepai.org/api/text2img';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: prompt }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const imageUrl = data.output_url; // The URL of the generated image
    return imageUrl;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}

// Example usage
async function handleMessage(msg) {
  try {
    const imageUrl = await generateImage(msg);
    console.log('Generated image URL:', imageUrl);
    // Handle the image URL (e.g., display it on the web page)
    document.getElementById('image-container').src = imageUrl; // Assuming you have an <img> element with id 'image-container'
  } catch (error) {
    console.error('Error handling message:', error);
  }
}
