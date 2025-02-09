console.log("Async example");

function sayHello() {
  console.log("hello");
}

setTimeout(sayHello, 4000); // say hello after 4 seconds

for (i = 0; i < 10; i++) {
  console.log(i);
}

// Output of this file is:
// Async example
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// hello (after 4 seconds)

// Execution was not in order! JS is inherently async
