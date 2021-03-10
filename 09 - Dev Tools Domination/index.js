const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 }
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Regular log");

// Interpolated
console.log("This is a %s message", "log");

// Styled
console.log(
  "%c This is a styled text",
  "font-size: 20px; color: white; background: black;"
);

// warning!
console.warn("Warning!");

// Error :|
console.error("Error!!!");

// Info
console.info("This is an information text.");

// Testing
const para = document.querySelector("p");
console.assert(para.classList.contains("test"), "That is wrong!");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(para);
console.dir(para);

// console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
