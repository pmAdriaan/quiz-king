// Background Music Files
const backgroundMusicOptions = [
    './assets/music/bg-music1.mp3',
    './assets/music/bg-music2.mp3',
    './assets/music/bg-music3.mp3'
];

// SFX Files
const audioSettings = {
    correct: './assets/sfx/correct.wav',
    incorrect: './assets/sfx/incorrect.wav',
};

// DOM Elements
const elements = {
    backgroundMusic: document.getElementById("backgroundMusic"),
    volumeSlider: document.getElementById("volumeSlider"),
    muteToggleMusicButton: document.getElementById("muteToggleMusic"),
    muteToggleSfxButton: document.getElementById("muteToggleSfx"),
};

// Set initial volume and mute state from local storage or default
let savedVolume = parseFloat(localStorage.getItem("savedVolume")) || 0.3;
let savedMusicMuteState = localStorage.getItem("savedMusicMuteState") === "true" || false;
let savedSfxMuteState = localStorage.getItem("savedSfxMuteState") === "true" || false;

let isMusicMuted = savedMusicMuteState;
let isSfxMuted = savedSfxMuteState;

elements.volumeSlider.addEventListener("input", updateVolume);
elements.muteToggleMusicButton.addEventListener("click", toggleMuteMusic);
elements.muteToggleSfxButton.addEventListener("click", toggleMuteSfx);

elements.volumeSlider.value = savedVolume;
updateMuteMusicButton();
updateMuteSfxButton();
updateVolume();

// Function to update audio volume based on slider value
function updateVolume() {
    const masterVolume = elements.volumeSlider.value;
    elements.backgroundMusic.volume = isMusicMuted ? 0 : masterVolume;
    saveSettings();
}

// Function to toggle music mute state
function toggleMuteMusic() {
    isMusicMuted = !isMusicMuted;
    updateMuteMusicButton();
    updateVolume();
}

// Function to toggle SFX mute state
function toggleMuteSfx() {
    isSfxMuted = !isSfxMuted;
    updateMuteSfxButton();
    saveSettings();
}

// Function to update music mute button text
function updateMuteMusicButton() {
    elements.muteToggleMusicButton.textContent = isMusicMuted ? "Music: Off" : "Music: On";
}

// Function to update SFX mute button text
function updateMuteSfxButton() {
    elements.muteToggleSfxButton.textContent = isSfxMuted ? "SFX: Off" : "SFX: On";
}

// Function to play correct or incorrect SFX based on the answer
function playAnswerSFX(isCorrect) {
    if (isSfxMuted) {
        return;
    }

    const sfxVolume = elements.volumeSlider.value;
    isCorrect ? playSFXWithVolume(audioSettings.correct, sfxVolume) : playSFXWithVolume(audioSettings.incorrect, sfxVolume);
}

// Function to play SFX with specified volume
function playSFXWithVolume(audioFile, volume) {
    const audioElement = new Audio(audioFile);
    audioElement.volume = volume;
    audioElement.play();
}

// Function to fade out the background music
function fadeOutBackgroundMusic() {
    let currentVolume = elements.backgroundMusic.volume;
    const fadeOutInterval = setInterval(() => {
        currentVolume = Math.max(0, currentVolume - 0.02);
        elements.backgroundMusic.volume = currentVolume;
        if (currentVolume <= 0) {
            clearInterval(fadeOutInterval);
            elements.backgroundMusic.pause();
        }
    }, 200); // fade out time interval
}

// Function to save volume and mute state to local storage
function saveSettings() {
    localStorage.setItem("savedVolume", elements.volumeSlider.value);
    localStorage.setItem("savedMusicMuteState", isMusicMuted);
    localStorage.setItem("savedSfxMuteState", isSfxMuted);
}

// Function to set a random background music option
function setRandomBackgroundMusic() {
    const randomIndex = Math.floor(Math.random() * backgroundMusicOptions.length);
    elements.backgroundMusic.src = backgroundMusicOptions[randomIndex];
    elements.backgroundMusic.load();
}

// Set initial random background music
setRandomBackgroundMusic();
