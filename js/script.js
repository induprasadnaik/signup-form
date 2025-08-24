const taskInput = document.getElementById("task");
const addTaskBtn = document.getElementById("submit_task");
const taskList = document.getElementById("result");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");


  const span = document.createElement("span");
  span.textContent = taskText;
  span.style.cursor = "pointer";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  const completed = document.createElement("button");
  completed.textContent = "Completed";
  completed.className = "btn btn-success btn-sm";

  completed.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  li.appendChild(span);
  li.appendChild(completed);
  li.appendChild(deleteBtn);
  
  taskList.appendChild(li);

  
  taskInput.value = "";
});