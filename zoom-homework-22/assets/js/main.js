const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addBtn = $(".add-btn");
const formApp = $("#addTaskModal");
const modalClose = $(".modal-close");
const btnClose = $(".btn-close");
const todoForm = $(".todo-app-form");
const taskTitle = $("#task1");
const todoList = $("#todoList");
const searchInput = $(".search-input");
const tabButton = $$(".tab-button");

const inputDate = $("#taskDate");
const output = $(".formatted-date");

let editIndex = null;
/*
git clone git@github-HaTrang:Thanh-Hoa95/f8_zoom_online.git

addBtn.onclick = function () {
  handleOpenModal();
};

todoList.onclick = function (event) {
  const taskHeader = event.target.closest(".task-header");

  if (taskHeader) {
    const editBtn = event.target.closest(".edit-btn");
    const deleteBtn = event.target.closest(".delete-btn");
    const completeBtn = event.target.closest(".complete-btn");
    const taskIndex = taskHeader.dataset.index;
    const task = todoTask[taskIndex];
    output.textContent = formattedDate(task.dueDate);

    if (editBtn) {
      editIndex = taskIndex;

    for (const key in task) {
      const value = task[key];
      const input = $(`[name="${key}"]`);

      if (input) {
        input.value = value;
      }
    }
    handleOpenModal();
    const formTitle = formApp.querySelector(".modal-title");

    if (formTitle) {
      formTitle.dataset.original = formTitle.textContent;

      formTitle.textContent = "Edit Task";
    }

    const btnSubmit = formApp.querySelector(".btn-submit");

    if (btnSubmit) {
      btnSubmit.dataset.original = btnSubmit.textContent;
      btnSubmit.textContent = "Save";
    }
  }

  if (deleteBtn) {
    const taskIndex = deleteBtn.dataset.index;
    const task = todoTask[taskIndex];
    if (confirm(`Bạn có muốn xóa công việc ${task.title} không?`)) {
      todoTask.splice(taskIndex, 1);
      saveTodoTask();
      renderTask();
    }
  }

  if (completeBtn) {
    const taskIndex = completeBtn.dataset.index;
    const task = todoTask[taskIndex];
    task.isCompleted = !task.isCompleted;
    saveTodoTask();
    renderTask();
  }
};

function handleOpenModal() {
  formApp.classList.add("show");
  setTimeout(() => taskTitle.focus(), 200);
}

function handleCloseModal() {
  formApp.classList.remove("show");

  if (editIndex !== null) {
    const formTitle = formApp.querySelector(".modal-title");
    if (formTitle?.dataset.original) {
      formTitle.textContent = formTitle.dataset.original;
      delete formTitle.dataset.original;
    }

    const btnSubmit = formApp.querySelector(".btn-submit");
    if (btnSubmit?.dataset.original) {
      btnSubmit.textContent = btnSubmit.dataset.original;
      delete btnSubmit.dataset.original;
    }
  }

  formApp.querySelector(".modal").scrollTop = 0;
  todoForm.reset();
  editIndex = null;
}

modalClose.onclick = function (event) {
  handleCloseModal();
};

btnClose.onclick = function (event) {
  handleCloseModal();
};

const todoTask = JSON.parse(localStorage.getItem("todoTasks")) ?? [];

todoForm.onsubmit = function (event) {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(todoForm));

  // Xử lý phần trăm
  formData.percent = Number(formData.percent || 0);
  formData.isCompleted = formData.percent >= 100;

  // Xử lý phần trăm
  formData.percent = Number(formData.percent || 0);
  formData.isCompleted = formData.percent >= 100;

  if (editIndex !== null) {
    todoTask[editIndex] = formData;
  } else {
    formData.isCompleted = false;
    todoTask.push(formData);
  }
  handleCloseModal();
  saveTodoTask();
  renderTask();
};

function saveTodoTask() {
  localStorage.setItem("todoTasks", JSON.stringify(todoTask));
}

function renderTask() {
  if (!todoTask.length) {
    todoList.innerHTML = `<h3 class="no-task">Chưa có công việc!!!</h3>`;
    return;
  }

  const html = todoTask
    .map(
      (task, index) => `
<div class="task-card ${task.isCompleted ? "completed" : ""}" style="--card-color:${task.color}" >
          <div class="task-header">
            <h3 class="task-title">${task.title}</h3>
            <button class="task-menu">
              <i class="fa-solid fa-ellipsis fa-icon"></i>
              <div class="dropdown-menu">
                <div class="dropdown-item edit-btn" data-index= "${index}">
                  <i class="fa-solid fa-pen-to-square fa-icon"></i>
                  Edit
                </div>
                <div class="dropdown-item complete complete-btn" data-index= "${index}">
                  <i class="fa-solid fa-check fa-icon"></i>
                  ${task.isCompleted ? "Mark as Active" : "Mark as Completed"}
                </div>
                <div class="dropdown-item delete delete-btn" data-index= "${index}">
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

  todoList.innerHTML = html;
}

renderTask(todoTask);

tabButton.forEach((tab) => {
  tab.onclick = function (event) {
    $(".tab-button.active").classList.remove("active");
    tab.classList.add("active");

    if (event.target.closest(".completed")) {
      renderTask(todoTask.filter((task) => task.isCompleted));
    } else if (event.target.closest(".active-task")) {
      renderTask(todoTask.filter((task) => !task.isCompleted));
    } else {
      renderTask(todoTask);
    }
  };
});
