# **FocusFlow – Interactive To-Do List**  

## **📌 Introduction**  
Welcome to **FocusFlow**, a sleek and interactive **to-do list** designed to help you organize and prioritize your tasks effortlessly. 🚀  

I approached this project by ensuring a **clean, dynamic, and user-friendly UI** inspired by **Notion & Trello**. Using **Vanilla JavaScript**, I implemented real-time task management with **dynamic UI updates**—no page refresh required! The to-do list allows users to **add, delete, complete, and prioritize tasks**, while maintaining a **minimalist yet efficient workflow**.  

---

## **🎯 Features Implemented**  

### ✅ **Dynamic Task Management**  
I approached task management by making sure that **tasks are fully dynamic** and updated in real-time.  
- Users can **add tasks** with a name and priority level (**High 🔥, Medium ⚡, Low ✅**).  
- Each task is **displayed dynamically** using `map()` and grouped by priority.  
- **"Complete" button ✅** moves a task to the completed list.  
- **"Delete" button ❌** removes a task entirely.  

### ✅ **Priority-Based Task Organization**  
I structured the priority system using **color-coded labels** to make tasks visually distinguishable:  
- **High Priority 🔥** – Urgent tasks  
- **Medium Priority ⚡** – Important but not urgent  
- **Low Priority ✅** – Can be done anytime  

This allows users to **immediately recognize task urgency** without extra effort.  

### ✅ **Real-Time Task Count with `reduce()`**  
I approached task counting efficiently by using the `reduce()` function to calculate the total number of **incomplete tasks** dynamically. This ensures users always know **what's left to do**, without needing a manual update.  

### ✅ **Efficient Event Delegation**  
Instead of adding multiple event listeners for each task, I approached event handling using **event delegation**.  
- I **attached a single event listener** to the parent container, ensuring that all dynamically generated tasks **inherit event handling automatically**.  
- This approach makes the app **more performant and scalable**.  

### ✅ **Instant UI Updates (No Refresh Needed!)**  
I structured the app to **update the UI in real-time** by modifying the DOM directly. This ensures:  
- **Tasks appear immediately** upon addition.  
- **Completion and deletion updates the UI instantly**.  
- **No page refresh is required** to see changes.  

---

## **🚀 Bonus Features**  

### 🌟 **Search & Filter**  
I approached search and filtering with a **simple and intuitive method**:  
- Users can **search tasks** by name.  
- Tasks can be **filtered by priority** (High, Medium, Low) to focus on the most important ones.  

The filtering system updates **instantly**, allowing users to refine their task list **without extra effort**.  

### 🌙 **Dark Mode Toggle**  
I implemented **a smooth dark mode toggle** using a **sun 🌞 & moon 🌙 switch**:  
- Users can **switch between light and dark mode** dynamically.  
- The UI updates **instantly**, making it **easy on the eyes for night-time usage**.  
- I made sure that both light and dark themes maintain a **clean, readable design**.  

---

## **🛠️ How I Implemented It**  

### 1️⃣ **Using Arrays to Store Tasks**  
I structured tasks as an array of objects:  
```js
let tasks = [
    { name: "Buy groceries", priority: "high", completed: false },
    { name: "Complete project", priority: "medium", completed: false }
];
```
This allows me to dynamically **add, delete, and modify tasks** without modifying the HTML manually.  

### 2️⃣ **Using `map()` to Render Tasks Dynamically**  
I used `map()` to loop through tasks and dynamically **generate task cards** in the UI:  
```js
tasks.map(task => `<div class="task">${task.name}</div>`).join("")
```
This ensures the UI is always **in sync** with the data.  

### 3️⃣ **Using `reduce()` to Count Incomplete Tasks**  
I used `reduce()` to count how many tasks **are still pending**:  
```js
const incompleteTasks = tasks.reduce((count, task) => count + (task.completed ? 0 : 1), 0);
document.getElementById("task-count").innerText = incompleteTasks;
```
This allows the **task count to update dynamically** without manual intervention.  

### 4️⃣ **Using Event Delegation for Buttons**  
Instead of adding individual event listeners, I used **event delegation**:  
```js
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
```
This makes the app **more efficient**, especially for dynamically generated tasks.  

### 5️⃣ **Dynamically Updating the UI Without Refresh**  
Whenever a task is **added, completed, or deleted**, I call `renderTasks()` to update the UI **instantly**:  
```js
function renderTasks() {
    taskList.innerHTML = "";  // Clears previous tasks
    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.innerHTML = `<span>${task.name}</span>`;
        taskList.appendChild(taskElement);
    });
}
```
This ensures **real-time task updates** without needing to refresh the page.  

### 6️⃣ **Implementing Dark Mode**  
I approached dark mode using **CSS class toggling**:  
```js
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("toggle-icon").textContent = 
        document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
}
```
This provides a **seamless transition** between themes.  

---

## **🎨 Color Theme (Inspired by Notion & Trello)**  
I designed **FocusFlow** using a clean, minimal UI with **Trello-inspired colors**:  

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| **Background** | `#F4F5F7` (Light Gray) | `#1E1E1E` (Dark Gray) |
| **Task Cards** | `#FFFFFF` (White) | `#333333` (Dark Gray) |
| **High Priority** | `#FF3B3B` (Red) | `#FF6B6B` (Light Red) |
| **Medium Priority** | `#FFA500` (Orange) | `#FFB74D` (Light Orange) |
| **Low Priority** | `#5AAC44` (Green) | `#74C365` (Light Green) |
| **Completed Tasks** | `#A0A0A0` (Gray) | `#757575` (Dark Gray) |
| **Buttons** | `#0079BF` (Trello Blue) | `#00A8E8` (Light Blue) |

---

## **🛠️ Tech Stack Used**  
✅ **HTML** – Structure  
✅ **CSS (Grid, Flexbox, Animations)** – Styling & UI Design  
✅ **JavaScript (DOM Manipulation, `map()`, `reduce()`, Event Delegation)** – Interactivity  

---

## **📌 How to Use FocusFlow?**  

1️⃣ **Download the files** (`index.html`, `styles.css`, `script.js`).  
2️⃣ **Open `index.html`** in a browser.  
3️⃣ **Add tasks** and set priority (**High, Medium, Low**).  
4️⃣ **Click "Complete" ✅** to move tasks to the completed list.  
5️⃣ **Click "Delete" ❌** to remove a task.  
6️⃣ **Use the search & filter** to find tasks quickly.  
7️⃣ **Click 🌙 to enable Dark Mode** and switch to a night-friendly UI.  

---

## **🎯 Conclusion**  
I approached this project with a focus on **simplicity, efficiency, and real-time updates**. **FocusFlow** provides an intuitive and powerful task management experience with **smooth interactions, efficient code, and a clean UI**.  

Let me know if you have any suggestions! 🚀😊