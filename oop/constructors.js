// Constructors as functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

// To construct an object, you have to use the new keyword
let myCar = new Car("toyota", "camry");
// We are able to view the fields of the car because of the "this" keyword in the functions above
console.log(myCar);

// Constructor as a function
function Tea(type) {
  this.type = type;
  // Can define methods on the object
  this.describe = function () {
    // this keyword is used to refer to the memeber variable type
    return `this is a cup of ${this.type} tea`;
  };
}
let lemonTea = new Tea("lemon");
console.log(lemonTea);
console.log(lemonTea.describe());

// Constructor as a function
function Animal(species) {
  this.species = species;
}

// Another way to add class methods
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("dog");
console.log(dog.sound());

// How to ensure that the constructor is called with the new keyword
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
console.log(tea);
// this should throw an error
let coffee = Drink("coffee");
console.log("coffee");
