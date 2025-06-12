const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addTaskModal = $("#addTaskModal");
// Modal elements
const todoAdd = $(".add-btn");
const modalClose = $(".btn-secondary");
// Modal close button
const modalCloseBtn = $(".modal-close");
const inputElement = $("#taskTitle");
const todoAppForm = $(".todo-app-form");
//---------------
const todoTasks = [];
todoAdd.onclick = function (event) {
  event.preventDefault();
  // Focus input dau tien khi mo modal
  // Hien thi modal
  addTaskModal.className = "modal-overlay show";
  setTimeout(() => {
    inputElement.focus();
  }, 300);
};

// Xu ly su kien submit form
todoAppForm.onsubmit = function (event) {
  event.preventDefault();
  const newTask = {
    title: inputElement.value,
    description: $("#taskDescription").value,
    category: $("#taskCategory").value,
    priority: $("#taskPriority").value,
    startTime: $("#startTime").value,
    endTime: $("#endTime").value,
    DuaDate: $("#taskDate").value,
    cardColor: $("#taskColor").value,
    isCompleted: false,
  };
  todoTasks.unshift(newTask);
  todoAppForm.reset();
  renderTasks();
  closeModal();
};

function renderTasks() {
  const html = todoTasks
    .map(
      (task) => `
      <div class="task-card ${task.cardColor} ${task.isCompleted ? "completed" : ""}">
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
                                Mark as ${task.isCompleted ? "Active" : "Complete"}
                            </div>
                            <div class="dropdown-item delete">
                                <i class="fa-solid fa-trash fa-icon"></i>
                                Delete
                            </div>
                        </div>
                    </button>
                </div>
                <p class="task-description">${task.description}</p>
                <div class="task-time">${task.startTime} AM - ${task.endTime} PM</div>
      </div>`,
    )
    .join("");
  const todoList = $(`.task-grid`);
  todoList.innerHTML = html;
}
function closeModal() {
  addTaskModal.className = "modal-overlay";
}

// Dong modal khi click vao nut create hoac cancel
modalClose.onclick = function (event) {
  event.preventDefault();
  // Dong modal
  closeModal();
};

// Dong modal khi click vao nut close
modalCloseBtn.onclick = function (event) {
  event.preventDefault();
  // Dong modal
  closeModal();
};

$(`.btn-primary`).onclick = function (event) {
  event.preventDefault();
  todoAppForm.requestSubmit();
};
