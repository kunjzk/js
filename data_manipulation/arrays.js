let cities = ["tokyo", "bergen", "sydney"];
cities.push("melbourne");
console.log(cities);

cities.pop();
console.log(cities);

// Soft copy: new variable points to the same memory space
let citiesSoft = cities;
console.log(citiesSoft);

cities.pop();
console.log(citiesSoft);
console.log(cities);

// Hard copy: deep copy
let citiesHard = [...cities];
console.log(citiesHard);

cities.pop();
console.log(cities);
console.log(citiesHard);

// Merge arrays

let asian = ["delhi", "singapore", "bangkok"];
let europe = ["paris", "rome", "london"];

let merged = asian.concat(europe);
console.log(merged);

console.log(asian + europe); // this produces a string
console.log([asian, europe]); // produces a 2d array

// check membership
let isPresent = asian.includes("singapore");
console.log(isPresent);
