const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");

function updateClock() {
  const currentTime = new Date();

  const s = currentTime.getSeconds();
  const sRot = (s / 60) * 360 + 90;
  // to avoid rewinding when
  // another round starts
  if (sRot === 90) {
    secHand.classList.add("no-transition");
  } else {
    secHand.classList.remove("no-transition");
  }
  secHand.style.transform = `rotate(${sRot}deg)`;

  const m = currentTime.getMinutes();
  const mRot = (m / 60) * 360 + (s / 60) * 6 + 90;
  if (mRot === 90) {
    minHand.classList.add("no-transition");
  } else {
    minHand.classList.remove("no-transition");
  }
  minHand.style.transform = `rotate(${mRot}deg)`;

  const h = currentTime.getHours();
  const hRot = (h / 12) * 360 + (m / 60) * 30 + 90;
  if (hRot === 90) {
    hourHand.classList.add("no-transition");
  } else {
    hourHand.classList.remove("no-transition");
  }
  hourHand.style.transform = `rotate(${hRot}deg)`;
}

// call updateClock without delay for the first time
updateClock();
setInterval(updateClock, 1000);
