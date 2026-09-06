
const audio = document.getElementById("audioPlayer");

// Get player controls
const playerControls = document.querySelectorAll(".player-control-icon");

const previousBtn = playerControls[0];
const nextBtn = playerControls[1];
const playBtn = playerControls[2];
const shuffleBtn = playerControls[3];
const repeatBtn = playerControls[4];

// Get progress bar and time elements
const progressBar = document.querySelector(".progress-bar");
const currentTime = document.querySelector(".curr-time");
const totalTime = document.querySelector(".tot-time");


// ---------------- PLAY / PAUSE ----------------

playBtn.addEventListener("click", function () {

    if (audio.paused) {
        audio.play();

        // Change play icon to pause icon
        playBtn.src = "./assets/player_icon3.png";

    } else {
        audio.pause();

        // Change back to play icon
        playBtn.src = "./assets/player_icon3.png";
    }

});


// LOAD SONG DURATION 

audio.addEventListener("loadedmetadata", function () {

    progressBar.max = audio.duration;

    totalTime.innerText = formatTime(audio.duration);

});


// UPDATE PROGRESS BAR 

audio.addEventListener("timeupdate", function () {

    progressBar.value = audio.currentTime;

    currentTime.innerText = formatTime(audio.currentTime);

});


// MOVE MUSIC USING PROGRESS BAR 

progressBar.addEventListener("input", function () {

    audio.currentTime = progressBar.value;

});


// FORMAT TIME 

function formatTime(time) {

    let minutes = Math.floor(time / 60);

    let seconds = Math.floor(time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}


// WHEN SONG ENDS 

audio.addEventListener("ended", function () {

    progressBar.value = 0;

    currentTime.innerText = "0:00";

});

// Volume control

const volumeBar = document.querySelector(".is-controls-icon");

audio.volume = 1;

volumeBar.addEventListener("input", function () {
    audio.volume = volumeBar.value / 100;
});
    
