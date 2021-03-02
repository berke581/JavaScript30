document.addEventListener("keydown", (e) => {
  const pressedAudio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);

  if (pressedAudio !== null) {
    pressedAudio.currentTime = 0; // If clicked again before preceding audio finishes
    pressedAudio.play();
    key.classList.add("playing");
  }
});

function endTransition(e) {
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll("div.key");
keys.forEach((key) => {
  key.addEventListener("transitionend", endTransition);
});
