let updateTimer;
let currentTrack;
let trackIndex = 0;
let isRandom = false;
let isPlaying = false;
let isRepeat = false; // Add a flag for repeat mode
let wave = document.querySelector('.wave div');
let trackName = document.querySelector('.track-name');
let randomIcon = document.querySelector('.fa-random');
let trackImage = document.getElementById('track-image');
let nowPlaying = document.querySelector('.now-playing');
let seekSlider = document.querySelector('.seek-slider');
let trackArtist = document.querySelector('.track-artist');
let currentTime = document.querySelector('.current-time');
let volumeSlider = document.querySelector('.volume-slider');
let nextTrackButton = document.querySelector('.next-track');
let prevTrackButton = document.querySelector('.prev-track');
let totalDuration = document.querySelector('.total-duration');
let playbackIcon = document.querySelector('.playback-track i');

let musicList = [
    {
        name: 'Joy in Chaos',
        artist: 'Holy Drills',
        img: 'assets/images/joy.webp',
        music: 'assets/audios/joy.mp3'
    },
    {
        name: 'Awesome God',
        artist: 'Youths',
        img: 'assets/images/awesome.jpg',
        music: 'assets/audios/Awesome God.mp3'
    },
    {
        name: 'Makossa Beat',
        artist: 'Drummers',
        img: 'assets/images/beat.jpg',
        music: 'assets/audios/High Praise Makossa Beat Loop.mp3'
    },
    {
        name: 'Hossana & Spirit',
        artist: 'Holy Drills',
        img: 'assets/images/spirit.jpg',
        music: 'assets/audios/spirit.mp3'
    },
    {
        name: 'God Only Knows',
        artist: 'A Week Away',
        img: 'assets/images/gods.jpg',
        music: 'assets/audios/God Only Knows.mp3'
    },
    {
        name: 'Yeshua',
        artist: 'Holy Drills',
        img: 'assets/images/Yeshua.webp',
        music: 'assets/audios/Yeshua.mp3'
    },
    {
        name: 'Yahweh Sabaoth',
        artist: 'Nathaniel Bassey',
        img: 'assets/images/Yahweh.webp',
        music: 'assets/audios/Yahweh.mp3'
    },
    {
        name: 'How Great',
        artist: 'Holy Drills',
        img: 'assets/images/great.webp',
        music: 'assets/audios/great.mp3'
    },
];

// Load track and optionally autoplay it
const loadTrack = (index, autoplay = false) => {
    if (currentTrack) {
        currentTrack.pause(); // Pause current track if playing
        currentTrack.src = ''; // Reset the src to unload the old track
    }

    trackIndex = index;
    currentTrack = new Audio(musicList[trackIndex].music);
    clearInterval(updateTimer);
    reset();

    trackImage.src = musicList[trackIndex].img;
    trackName.textContent = musicList[trackIndex].name;
    trackArtist.textContent = musicList[trackIndex].artist;
    nowPlaying.textContent = `Playing music ${trackIndex + 1} of ${musicList.length}`;
    updateTimer = setInterval(setUpdate, 1000);

    currentTrack.addEventListener('ended', () => {
        if (isRepeat) {
            currentTrack.play(); // Repeat the current track
        } else if (isRandom) {
            randomTrack(); // Play a random track when the current one ends
        } else {
            nextTrack(); // Play the next track in order
        }
    });

    randomBgColor();

    if (autoplay) {
        playpauseTrack(); // Automatically play the track if autoplay is true
    }
};

// Generate a random background color
const randomBgColor = () => {
    let color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    let color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
};

// Reset UI and track settings
const reset = () => {
    seekSlider.value = 0;
    currentTime.textContent = '00:00';
    totalDuration.textContent = '00:00';
    volumeSlider.value = 100; // Set volume slider to maximum on reset
    setVolume();

    if (isPlaying) {
        playbackIcon.classList.remove('fa-play-circle');
        playbackIcon.classList.add('fa-pause-circle');
        toggleWaveAnimation(true); // Start wave animation
    } else {
        playbackIcon.classList.remove('fa-pause-circle');
        playbackIcon.classList.add('fa-play-circle');
        toggleWaveAnimation(false); // Stop wave animation
    }
};

// Update seek bar and time display
const setUpdate = () => {
    let seekPosition = 0;
    if (currentTrack && currentTrack.duration) {
        seekPosition = (currentTrack.currentTime / currentTrack.duration) * 100;
        seekSlider.value = seekPosition;
        currentTime.textContent = formatTime(currentTrack.currentTime);
        totalDuration.textContent = formatTime(currentTrack.duration);
    }
};

// Format time into MM:SS
const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// Seek to a specific position in the track
const seekTo = () => {
    if (currentTrack) {
        let seekTo = currentTrack.duration * (seekSlider.value / 100);
        currentTrack.currentTime = seekTo;
    }
};

// Set the volume of the track
const setVolume = () => {
    if (currentTrack) {
        currentTrack.volume = volumeSlider.value / 100;
    }
};

// Play/pause the current track
const playpauseTrack = () => {
    if (isPlaying) {
        currentTrack.pause();
        isPlaying = false;
        playbackIcon.classList.remove('fa-pause-circle');
        playbackIcon.classList.add('fa-play-circle');
        toggleWaveAnimation(false); // Stop wave animation
    } else {
        currentTrack.play();
        isPlaying = true;
        playbackIcon.classList.remove('fa-play-circle');
        playbackIcon.classList.add('fa-pause-circle');
        toggleWaveAnimation(true); // Start wave animation
    }
};

// Play next track
const nextTrack = () => {
    if (isRandom) return; // Do not change track if in random mode
    trackIndex = (trackIndex + 1) % musicList.length;
    loadTrack(trackIndex, true); // Autoplay the next track
};

// Play previous track
const prevTrack = () => {
    if (isRandom) return; // Do not change track if in random mode
    trackIndex = (trackIndex - 1 + musicList.length) % musicList.length;
    loadTrack(trackIndex, true); // Autoplay the previous track
};

// Play a random track
const randomTrack = () => {
    let randomIndex = Math.floor(Math.random() * musicList.length);
    trackIndex = randomIndex;
    loadTrack(trackIndex, true); // Autoplay the random track
};

// Toggle repeat track mode
const repeatTrack = () => {
    if (currentTrack) {
        isRepeat = !isRepeat;
        currentTrack.loop = isRepeat;
        document.querySelector('.fa-repeat').style.color = isRepeat ? '#ff0000' : '#000000'; // Example color change
    }
};

// Toggle wave animation
const toggleWaveAnimation = (status) => {
    if (status) {
        wave.classList.add('playing');
    } else {
        wave.classList.remove('playing');
    }
};

// Initialize the player by loading the first track
loadTrack(trackIndex, false); // Do not autoplay initially

// Event listeners
seekSlider.addEventListener('input', seekTo);
volumeSlider.addEventListener('input', setVolume);

// Handle volume control buttons
document.querySelector('.fa-volume-up').addEventListener('click', () => {
    volumeSlider.value = Math.min(100, volumeSlider.value + 10); // Increase volume
    setVolume();
});
document.querySelector('.fa-volume-down').addEventListener('click', () => {
    volumeSlider.value = Math.max(0, volumeSlider.value - 10); // Decrease volume
    setVolume();
});

// Handle track navigation buttons
nextTrackButton.addEventListener('click', () => {
    if (!isRandom) nextTrack(); // Navigate to next track only if not in random mode
});
prevTrackButton.addEventListener('click', () => {
    if (!isRandom) prevTrack(); // Navigate to previous track only if not in random mode
});

// Handle playback and random/repeat modes
document.querySelector('.playback-track').addEventListener('click', playpauseTrack);
randomIcon.addEventListener('click', () => {
    isRandom = !isRandom;
    randomIcon.style.color = isRandom ? '#ff0000' : '#000000'; // Example color change
    if (isRandom) {
        randomTrack(); // Play a random track if random mode is enabled
    } else {
        // If random mode is turned off while a track is playing, do nothing
        if (isPlaying) {
            // Optionally, pause or do something else here if needed
            // For example, pause the track and reset:
            currentTrack.pause();
            isPlaying = false;
            playbackIcon.classList.remove('fa-pause-circle');
            playbackIcon.classList.add('fa-play-circle');
        }
    }
});
document.querySelector('.fa-repeat').addEventListener('click', repeatTrack); // Toggle repeat track mode
