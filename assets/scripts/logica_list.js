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

    if (taskInput.value !== '' && prioritySelect.value !== '') {
        const task = {
            name: taskInput.value,
            priority: prioritySelect.value
        };


        tasks.push(task);
        renderTasks();
    } else {
        alert('EL CAMPO ESTA VACIO');
    }


    taskInput.value = '';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newName = prompt('Ingrese el nuevo nombre de la tarea:');
    if (newName !== '') {
        tasks[index].name = newName;
        renderTasks();
    } else {
        alert('EL CAMPO ESTA VACIO');
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.sort((a, b) => {
        if (a.priority === 'low') return 1;
        if (a.priority === 'medium' && b.priority !== 'low') return 1;
        if (a.priority === 'high' && (b.priority === 'high' || b.priority === 'medium')) return 1;
        return -1;
    });

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
