const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog"
];

const container = document.querySelector("#bands");

function strip(str) {
  return str.replace(/^(\bthe\b|\ba\b|\ban\b)/i, "").trim();
}

const sorted = bands.sort((a, b) => {
  if (strip(a) > strip(b)) return 1;
  else return -1;
});

container.innerHTML = sorted.map((el) => `<li>${el}</li>`).join("");
