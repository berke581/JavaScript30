const timesList = Array.from(document.querySelectorAll("li[data-time]"));

const totalSecs = timesList.reduce((total, el) => {
  const [mins, secs] = el.dataset.time.split(":").map(parseFloat);
  return (total += 60 * mins + secs);
}, 0);

let secondsLeft = totalSecs;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(hours, mins, secondsLeft);
