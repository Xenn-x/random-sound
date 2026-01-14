document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');

    // Available audio files
    const audioFiles = [
        'audio/1.mp3',
        'audio/2.mp3',
        'audio/3.mp3',
        'audio/4.mp3'
    ];

    playBtn.addEventListener('click', () => {
        // Play random sound
        const randomIndex = Math.floor(Math.random() * audioFiles.length);
        const audio = new Audio(audioFiles[randomIndex]);

        // Improve UX by disabling button while playing or just playing overlapping
        // Let's allow overlapping sounds for fun, but maybe add a visual click effect purely in JS if needed
        // but css :active handles most of it.

        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
        });

        // Optional: Log which sound is playing
        console.log(`Playing: ${audioFiles[randomIndex]}`);
    });
});
        
