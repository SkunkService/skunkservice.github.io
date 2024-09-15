async function startVoice(text, lang = "en-US", pitch = 1, rate = 1, volume = 1) {
    if (typeof text !== 'string' || text.trim() === '') {
        throw new Error('Text is required and must be a non-empty string.');
    }

    return new Promise((resolve, reject) => {
        const utterance = new SpeechSynthesisUtterance(text);

        // Set the properties
        utterance.lang = lang;
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;

        // Set event handlers
        utterance.onend = () => {
            resolve('Speech has finished.');
        };

        utterance.onerror = (event) => {
            reject(new Error('An error occurred during speech synthesis: ' + event.error));
        };

        // Start speaking
        speechSynthesis.speak(utterance);
    });
}
