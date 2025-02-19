const fs = require("node:fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const allTasksJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, allTasksJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added: ", tasks);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

const command = process.argv[2];
const argument = process.argv[3];

if (command == "add") {
  addTask(argument);
} else if (command == "list") {
  listTasks();
} else if (command == "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found");
}
