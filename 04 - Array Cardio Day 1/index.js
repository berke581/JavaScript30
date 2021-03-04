// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inv1500 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(inv1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const invNames = inventors.map((inventor) => {
  return {
    first: inventor.first,
    last: inventor.last
  };
});
// Or we could return the concatenated string
// first + ' ' + last rather than an object
console.table(invNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthSorted = inventors.sort((a, b) => {
  if (a.year < b.year) return -1;
  else if (a.year > b.year) return 1;

  // To make it stable
  return 0;
});
console.table(birthSorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearsLived = inventors.reduce(
  (sum, inventor) => sum + (inventor.passed - inventor.year),
  0
);
console.log(yearsLived);

// 5. Sort the inventors by years lived
const lived = inventors.sort((a, b) => {
  if (a.passed - a.year < b.passed - b.year) return -1;
  else if (a.passed - a.year > b.passed - b.year) return 1;

  return 0;
});
console.table(lived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const container = document.querySelector(".mw-category");
const list = Array.from(container.querySelectorAll("a")).map(
  (el) => el.textContent
);
const result = list.filter((el) => el.includes("de"));
console.log(result);

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortLast = people.sort((a, b) => {
  const [aLast] = a.split(", ");
  const [bLast] = b.split(", ");
  if (aLast < bLast) return -1;
  else if (aLast[0] > bLast[0]) return 1;

  return 0;
});
console.log(sortLast);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const sum = data.reduce((accumulator, el) => {
  if (!accumulator[el]) accumulator[el] = 0;
  ++accumulator[el];

  return accumulator;
}, {});
console.log(sum);
