function taskManager(task, callback) {
    console.log(`Adding task: ${task}`);
    callback(task);
}

const taskList = [];

function saveTaskToList(task) {
    taskList.push(task);
    console.log("Task saved: ", taskList);
}

taskManager("Learning JavaScript", saveTaskToList);
taskManager("Practice HOFs", saveTaskToList);
taskManager("Build Projects", saveTaskToList);