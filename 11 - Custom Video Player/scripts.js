const video = document.querySelector(".player__video");
const timeSlider = document.querySelector(".progress__filled");
const btnPlay = document.querySelector(".player__button");
const skipButtons = document.querySelectorAll("button[data-skip]");
const controlSliders = document.querySelectorAll(".player__slider");
const progress = document.querySelector(".progress");
const fullScreen = document.querySelector(".fullscreen");

video.addEventListener("click", togglePlayPause);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", updateTime);
btnPlay.addEventListener("click", togglePlayPause);
skipButtons.forEach((el) => el.addEventListener("click", handleSkip));
controlSliders.forEach((el) =>
  el.addEventListener("input", updateControlSliders)
);
controlSliders.forEach((el) =>
  el.addEventListener("change", updateControlSliders)
);
fullScreen.addEventListener("click", toggleFullscreen);

function updateTime() {
  const len = Math.min((video.currentTime / video.duration) * 100, 100);
  timeSlider.style.flexBasis = `${len}%`;

  if (video.ended) btnPlay.innerHTML = "►";
}

function togglePlayPause() {
  if (video.paused) video.play();
  else video.pause();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  btnPlay.textContent = icon;
}

function handleSkip() {
  const amount = parseFloat(this.dataset.skip);
  video.currentTime += amount;
}

function updateControlSliders() {
  video[this.name] = this.value;
}

function toggleFullscreen() {
  video.requestFullscreen();
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
