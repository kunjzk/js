// do-while
// let teaCollection = [];
// let tea = "abc";
// do {
//   tea = prompt("Enter your favorite tea. type stop to finish"); // the prompt function gets user input, but only works in the browser.
//   if (tea !== "stop") {
//     teaCollection.push(tea); // inequality check is !==, not !=
//   }
// } while (tea !== "stop");

// console.log(teaCollection);

// for-of
// easy syntax to loop through arrays

let numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// for-in
// easy syntax to loop through maps (aka objects)
cities = {
  london: 1,
  new_york: 2,
  sweden: 3,
};

for (city in cities) {
  console.log(city);
  console.log(cities[city]);
}

// forEach executes a function for each element in the array.
let teaCollection = ["green", "oolong", "chai"];
teaCollection.forEach((tea) => {
  // equivalent to function(tea) {<body>}
  if (tea == "chai") {
    console.log("found chai. returning.");
    return;
  }
  console.log(tea);
});
