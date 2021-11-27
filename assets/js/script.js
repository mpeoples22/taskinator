var formEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task=type']").value;
//validate
if(taskNameInput === "" || taskTypeInput === "") {
  alert("You need to fill out the task form!");
  return false;
}
formEl.reset();

// reset form fields for next task to be entered
document.querySelector("input[name='task-name']").value = "";
document.querySelector("select[name='task-type']").selectedIndex = 0;

var taskDataObj = {
  name: taskNameInput,
  type: taskTypeInput
};

createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
  //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //create div to hold task info and add to list item
    var tasksToDoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class= 'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    tasksToDoEl.appendChild(taskInfoEl);

    console.dir(listItemEl);
//add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

};

formEl.addEventListener("submit", taskFormHandler);