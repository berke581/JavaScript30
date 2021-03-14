// start with strings, numbers and booleans
let age1 = 100;
let age2 = age1;
console.log(age1, age2);
age1 = 200;
console.log(age1, age2);

let name1 = "first";
let name2 = name1;
console.log(name1, name2);
name1 = "second";
console.log(name1, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

// You might think we can just do something like this:
const team = players;

console.log(players);
console.log(team);
// however what happens when we update that array?
team[3] = "Lux";

// now here is the problem!
console.log(team);
console.log(players);

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
team2[3] = "Team2";
console.log(team2);
console.log(players);

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = "Team3";
console.log(team3);
console.log(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "Team4";
console.log(team4);
console.log(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80
};

console.log(person);

// and think we make a copy:

// number attribute added to person
const captain = person;
captain.number = 99;
console.log(captain);
console.log(person);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 120, age: 12 });
console.log(cap2);

// We will hopefully soon see the object ...spread

// It is usable now
const cap3 = { ...person };
console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer"
  }
};

console.log(wes);

const dev = Object.assign({}, wes);
console.log(dev);

// Poor man's deep clone
const dev2 = JSON.parse(JSON.stringify(wes));
console.log(dev2);
