function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer(); // increment is now the anonymous function
console.log(increment()); // returns 1
console.log(increment()); // returns 2 because counter is saved
console.log(increment()); // returns 3
console.log(increment()); // returns 4

// Closure is a special function where the values of variables within the function persist in memory
