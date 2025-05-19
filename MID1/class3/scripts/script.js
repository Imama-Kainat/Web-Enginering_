let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();

  if (task) {
    tasks.push({
      id: Date.now(),
      text: task,
      completed: false
    });

    saveTasks();
    renderTasks();
    input.value = '';
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

function toggleComplete(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) span.classList.add('completed');

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerHTML = task.completed
      ? '<img src="resources/undo.png" alt="Undo">'
      : '<img src="resources/check.png" alt="Complete">';
    completeBtn.onclick = () => toggleComplete(task.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<img src="resources/trash.png" alt="Delete">';
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

document.getElementById('taskInput').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
