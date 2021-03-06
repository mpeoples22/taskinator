var formEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task=type']").value;
  //package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  //send it as an argument to creatTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
//create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
 //create div to hold task info and add to list item
  var tasksToDoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
//add HTML content to div
  taskInfoEl.innerHTML = "<h3 class= 'task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);
//add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};
  formEl.addEventListener("click", taskFormHandler);
