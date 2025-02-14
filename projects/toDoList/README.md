# Todo list with local storage

To save tasks:

1. Create a task object from user input
2. Store it in local storage (browser provides an API)
   - `localStorage.setItem("tasks", JSON.stringify(tasks))`, wrapped in a function.
   - View this in chrome dev tools under application -> local storage
   - Benefit of this approach: PERSISTENCE across refresh. If you don't use local storage and click refresh all your native JS objects are cleared. Local storage persists across refresh and you can always use a `DOMContentLoaded` event listener to refresh and re-display your JS objects.
   - To load from local storage: `JSON.parse(localStorage.getItem("tasks"))`
3. Display the newly added task in an `li` using a `renderTask` function that takes in a single task
   - This goes in its own function. The function can be called on an event-driven basis (when the user inputs a new task) and also when the DOM loads for the first time, so if there's anything in local storage it gets loaded up. For each task, create a new li and add it to the ul.
   - This same function handles user interaction with the task. We want to acheive 2 features:
     1. If a user clicks the task but not the delete button, we want to toggle the class `completed`
        - Add an event listener to the `li`, checking for clicks. Pass the anonymous function an event `e`. We can determine where the click has occurred using `e.target.tagName` and ignore the click if the tagname is `BUTTON`.
        - If button is not clicked but `li` is, we toggle the completed task on the `li`. save the task to local storage.
     2. If the user clicks the delete button, we want to no longer render the task and remove it from local storage
        - Add an event listener specifically to the button: `li.querySelector("button").addEventListener("click")`. Since this is within the same renderTask function, we do have access to the task object. We can filter the tasks array to exclude this particular object, using the filter function.
        - Then remove the li
        - Then save the task list.
        - Question: Once the task has been created by the user and a second task is added, we are now no longer in the renderTask function of the first task. If the user clicks the delete button of the first task, how does the renderTask function have access to the value of `li`? _because addEventListener creates a closure_. It has access to the `li` element created in its outer scope, even though the renderTask function has completed execution.
