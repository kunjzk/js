// This is an object literal
// We've defined an object but can't reuse it as a template for other car make/models
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car was made in ${this.year}`;
  },
};

console.log(car.start());

// Constructor as a function
// this can be resued
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John", 20);
console.log(john.name);

// Prototype chain: a way to add methods to your custom objects
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

// Prototype chains can be used on built-in objects too, like arrays
Array.prototype.newFunction = function () {
  return `This is a new function for the array with elements ${this}`;
};

let a1 = [1, 2, 3];
let a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(a1.newFunction());
console.log(a2.newFunction());

// Now we finally create a class
class Vehicle {
  // Create a constructor and set member variable
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Create a method
  start() {
    return `${this.model} ${this.make} is a vehicle`;
  }
}

// IMHERITANCE: car is a type of vehicle. Car inherits all of vehicles vars and methods.
class Car extends Vehicle {
  // If you don't declare a constructor here, it uses the constructor of the parent class

  drive() {
    return `${this.make}: This is an inheritance example`;
  }
}

let myCar = new Car("toyota", "corolla");
console.log(myCar.start());
console.log(myCar.drive());
console.log(myCar.make);
console.log(myCar.model);

// Encapsulation: restrict direct access to object data
class BankAccount {
  #balance = 0; // The # makes it private

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let b = new BankAccount();
console.log(b.balance); // undefined. cannot directly access.
console.log(b.getBalance()); // now can access through the getter

// Abstraction
// pressStartButton abstracts away the underlying functions
class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `starting machine..`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing Coffee`;
  }

  pressStartButton() {
    return `${this.start()}, ${this.brewCoffee()}`;
  }
}

let m = new CoffeeMachine();
console.log(m.start());
console.log(m.brewCoffee());
console.log(m.pressStartButton());

// Polymorphism - something that can take multiple forms
// i.e same function (same interface) does different things depending on the data type it is associated to
// some birds can fly, others can't. so we write a polymorphic "fly" function -- fancy way to say we override it
class Bird {
  fly() {
    return `flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

class Sparrow extends Bird {
  // doesn't override bird's fly method, because it can fly
}
let bird = new Bird();
let penguin = new Penguin();
let sparrow = new Sparrow();
console.log(bird.fly());
console.log(sparrow.fly());
console.log(penguin.fly());

// Static methods can only be called by the class, nothing else
// There are cases where you don't want the object to access a method, just the class type
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); // will throw an error. the method is static, so instances can't access it.
console.log(Calculator.add(2, 3)); // won't throw error. static method accessed by class type.

// Getters and Setters
class Employee {
  #salary; // Need to declare salary as a private variable first
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary can't be negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  // keyword for getter
  get salary() {
    return this.#salary;
  }
  // keyword for setter
  set salary(value) {
    if (value < 0) {
      console.log(`Invalid salary`);
    }
    this.#salary = value;
  }
}

let emp = new Employee("Alice", 500);
console.log(emp.salary);
emp.salary = -2; // throws an error
