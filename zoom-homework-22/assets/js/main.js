const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addBtn = $(".add-btn");
const formAdd = $("#addTaskModal");
const modalClose = $(".modal-close");
const btnClose = $(".btn-close");
const todoFrom = $(".todo-app-form");
const formInput = $("#taskTitle");

let todoTask = [];

function closeForm() {
  formAdd.className = "modal-overlay";
}

function openForm() {
  formAdd.className = "modal-overlay show";
  setTimeout(() => formInput.focus(), 300);
}
openForm();

addBtn.onclick = openForm;
modalClose.onclick = closeForm;
btnClose.onclick = closeForm;

todoFrom.onsubmit = function (event) {
  event.preventDefault();

  const newTask = Object.fromEntries(new FormData(todoFrom));
  newTask.isCompleted = false;

  todoFrom.reset();
  closeForm();

  todoTask.push(newTask);
  renderTask(todoTask);
};

function renderTask(tasks) {
  const html = tasks
    .map(
      (task) => `
  <div class="task-card ${task.color} ${task.isCompleted ? "completed" : ""}">
          <div class="task-header">
            <h3 class="task-title">${task.title}</h3>
            <button class="task-menu">
              <i class="fa-solid fa-ellipsis fa-icon"></i>
              <div class="dropdown-menu">
                <div class="dropdown-item">
                  <i class="fa-solid fa-pen-to-square fa-icon"></i>
                  Edit
                </div>
                <div class="dropdown-item complete">
                  <i class="fa-solid fa-check fa-icon"></i>
                  ${task.isCompleted ? "Mark as Active" : "Mark as Completed"}
                </div>
                <div class="dropdown-item delete">
                  <i class="fa-solid fa-trash fa-icon"></i>
                  Delete
                </div>
              </div>
            </button>
          </div>
          <p class="task-description">${task.description}</p>
          <div class="task-time">${task.start_time} - ${task.end_time}</div>
        </div>
  `,
    )
    .join("");

  const todoList = $("#todoList");
  todoList.innerHTML = html;
}
