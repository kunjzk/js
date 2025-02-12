const person = {
  name: "Hitesh",
  greet() {
    console.log(`Hi this is ${this.name}`);
  },
};

person.greet(); // Prints the expected value

const greetFunction = person.greet; // Now we are passing the funciton body to a new variable
greetFunction(); // I am undefined. The context (variable name) is missing from the memory space of greetFunction

const boundGreet = person.greet.bind({ name: "Cool Guy" }); // bind will set _this_ to the first argument passed to it
boundGreet();
