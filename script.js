const videoPlayer = document.getElementById('videoPlayer');
const audioPlayer = document.getElementById('audioPlayer');

// Sync the video to the audio controls
audioPlayer.addEventListener('play', () => {
    videoPlayer.play();
});

audioPlayer.addEventListener('pause', () => {
    videoPlayer.pause();
});

audioPlayer.addEventListener('seeked', () => {
    videoPlayer.currentTime = audioPlayer.currentTime;
});

// Optional: Sync the audio to video events if the user uses browser-specific video controls
videoPlayer.addEventListener('play', () => {
    audioPlayer.play();
});

videoPlayer.addEventListener('pause', () => {
    audioPlayer.pause();
});

videoPlayer.addEventListener('seeked', () => {
    audioPlayer.currentTime = videoPlayer.currentTime;
});
