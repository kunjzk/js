// Basic function
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
console.log(makeTea("lemon tea"));

// Function within a function
// Functions create an execution context (memory space). Nested functions have an execution context within the outer one.
// Execution context is deleted/released when the associated function returns
function orderTea(teaType) {
  function confirmOrder() {
    return "order confirmed for chai";
  }
  return `${confirmOrder()} of type ${teaType}`;
  // can also just return the inner function: return confirmOrder()
}
console.log(orderTea("green"));

// Arrow functions, this one is named
const greet = () => {};

// Arrow function, this one is unnamed
() => {};

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
console.log(calculateTotal(10, 5));

// If the arrow function is a one-liner, we can write it in a compressed way
const calculateTotalCompressed = (price, quantity) => price * quantity;
console.log(calculateTotalCompressed(10, 5));

// Note: Arrow functions can't pass on the `this` context. Whatever that means.

// Functions that take another function as an argument
// First-class (higher order) functions. This is where a function is treated as a variable. Functions are passed into other functions and returned too.
// A function that accepts a function or returns another one is called a first class function.
function makeTea(teaType) {
  return `Making ${teaType}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

order = processTeaOrder(makeTea);
console.log(order);

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));
