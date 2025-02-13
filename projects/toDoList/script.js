let count = 0;

allTaskIds = [];

function addNewTask(count, userInput) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.setAttribute("class", "delete-task");
  btn.innerHTML = "delete";
  li.textContent = userInput;
  li.setAttribute("id", "task-" + count);
  li.appendChild(btn);
  let ul = document.getElementById("todo-list");
  ul.appendChild(li);

  btn.addEventListener("click", function (e) {
    console.log("button clicked");
    let taskId = e.target.parentElement.id;
    console.log(taskId);
    let task = document.getElementById(taskId);
    task.parentNode.removeChild(task);
  });
}

document.getElementById("add-task-btn").addEventListener("click", function () {
  let inputField = document.getElementById("todo-input");
  let userInput = inputField.value;
  if (userInput == "") {
    return;
  }
  console.log(count++);
  console.log(userInput);
  addNewTask(count, userInput);
  inputField.value = "";
});
