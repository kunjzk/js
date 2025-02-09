// This will send an alert on the browser - never do this in production, it's damn annoying - useful for checking that your js script is being called.
// alert("connected");

// ------ Example 1: change text on button click ------

// First, grab the changeTextButton element
// This is the way:
// let hold = document.getElementById("changeTextButton");
// console.log(hold);

// Add an event listener directly, higher order function
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this); // this refers to the button element with id changeTextButton
    let parargaph = document.getElementById("myParagraph");
    parargaph.textContent = "Hi I am shmol";
  });

// As an aside, if we use an arrow function, "this" becomes the window object. Check console to confirm.
// the window object contains information about the browser window, as well as the entire document.
// document.getElementById("changeTextButton").addEventListener("click", () => {
//   console.log(this);
// });

// ------ Example 2: traverse the dom and highlight text ------
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    console.log(this);
    let elementToHighlight = document.getElementById("citiesList").children[0]; // can also use firstElementChild
    console.log(elementToHighlight);
    elementToHighlight.classList.toggle("highlight"); // classList.add works too
  });

// ------ Example 3: Manipulating dom elements ------
document.getElementById("changeOrder").addEventListener("click", function () {
  console.log(this);
  let coffeeType = document.getElementById("coffeeType");
  console.log(coffeeType);
  coffeeType.textContent = "Espresso";
});

// ------ Example 4: Creating and inserting elements ------
document.getElementById("addNewItem").addEventListener("click", function () {
  console.log(this);
  let newLi = document.createElement("li");
  newLi.textContent = "Hamster Food";
  let shoppingList = document.getElementById("shoppingList");
  shoppingList.append(newLi);
});

// ------ Example 5: Removing DOM events ------
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    console.log(this);
    let taskList = document.getElementById("taskList");
    console.log(taskList);
    taskList.lastElementChild.remove(); // better than original method: taskList.children[2].remove()
  });
