// similar to python

function* numberGenerator() {
  // * makes it a generator. Doesn't generate everything at once, only does one at a time when called
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
console.log(gen); // Object [Generator] {} --> gen is a generator object not a function

// gen.next() is an iterator --> it iterates through the values returned by the generator
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next().value);
console.log(gen.next().value);
