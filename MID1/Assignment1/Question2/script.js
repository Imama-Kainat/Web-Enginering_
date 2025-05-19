// Task Array
let tasks = [];

// Get Elements
const taskInput = document.getElementById("task-name");
const priorityInput = document.getElementById("task-priority");
const searchInput = document.getElementById("search-task");
const filterPriority = document.getElementById("filter-priority");
const taskList = document.getElementById("task-list");
const completedList = document.getElementById("completed-list");
const taskCount = document.getElementById("task-count");

// Add Task
document.getElementById("add-task").addEventListener("click", () => {
    const name = taskInput.value.trim();
    const priority = priorityInput.value;

    if (name) {
        tasks.push({ name, priority, completed: false });
        taskInput.value = "";
        renderTasks();
    }
});

// Render Tasks
function renderTasks() {
    taskList.innerHTML = "";
    completedList.innerHTML = "";

    // Filter tasks
    let filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchInput.value.toLowerCase()) &&
        (filterPriority.value === "all" || task.priority === filterPriority.value)
    );

    // Group tasks using map()
    filteredTasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task", task.priority);

        taskElement.innerHTML = `
            <span>${task.name}</span>
            <div>
                <button class="complete" data-index="${index}">✅</button>
                <button class="delete" data-index="${index}">❌</button>
            </div>
        `;

        if (task.completed) {
            taskElement.classList.add("completed");
            completedList.appendChild(taskElement);
        } else {
            taskList.appendChild(taskElement);
        }
    });

    // Update Task Count
    taskCount.innerText = tasks.reduce((count, task) => count + (task.completed ? 0 : 1), 0);
}

// Event Delegation
document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete")) {
        tasks[e.target.dataset.index].completed = true;
        renderTasks();
    }
    if (e.target.classList.contains("delete")) {
        tasks.splice(e.target.dataset.index, 1);
        renderTasks();
    }
});

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("toggle-icon").textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
}

// Search & Filter
searchInput.addEventListener("input", renderTasks);
filterPriority.addEventListener("change", renderTasks);
