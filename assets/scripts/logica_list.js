document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

});

let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('priority');

    const task = {
        name: taskInput.value,
        priority: prioritySelect.value
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = '';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newName = prompt('Ingrese el nuevo nombre de la tarea:');
    if (newName !== null) {
        tasks[index].name = newName;
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
      <span class="task-info ${task.priority}-priority">${task.name}</span>
      <button class="edit-button" onclick="editTask(${index})">Editar</button>
      <button class="delete-button" onclick="deleteTask(${index})">Eliminar</button>
    `;
        taskList.appendChild(li);
    });
}
