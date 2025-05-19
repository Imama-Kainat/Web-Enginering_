document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM Fully Loaded!");

    // DOM Manipulation - Change Heading
    const heading = document.getElementById("main-heading");
    heading.innerText = "JavaScript Full Guide 🚀";

    // Theme Toggle (Light/Dark Mode) + Local Storage
    const themeToggle = document.getElementById("theme-toggle");
    function changeTheme() {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    }
    themeToggle.addEventListener("click", changeTheme);
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }

    // Local Storage - Save & Retrieve Data
    const userInput = document.getElementById("user-input");
    const saveBtn = document.getElementById("save-btn");
    const displayDiv = document.getElementById("display-data");

    saveBtn.addEventListener("click", () => {
        localStorage.setItem("savedText", userInput.value);
        displayDiv.textContent = "Saved: " + userInput.value;
    });

    if (localStorage.getItem("savedText")) {
        displayDiv.textContent = "Saved: " + localStorage.getItem("savedText");
    }

    // BOM - Alerts, Confirm, Navigator & History
    document.getElementById("alert-btn").addEventListener("click", () => alert("Hello from JavaScript!"));
    document.getElementById("confirm-btn").addEventListener("click", () => {
        confirm("Do you want to continue?") ? alert("You pressed OK!") : alert("You canceled!");
    });

    document.getElementById("back-btn").addEventListener("click", () => window.history.back());
    document.getElementById("forward-btn").addEventListener("click", () => window.history.forward());

    // Fetch API - Using Async/Await
    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            if (!response.ok) {
                throw new Error("❌ Network Response was not OK");
            }
            const data = await response.json();
            document.getElementById("api-data").innerHTML = `
                <strong>Title:</strong> ${data.title} <br> 
                <strong>Body:</strong> ${data.body}
            `;
        } catch (error) {
            console.error("❌ Fetch Error:", error);
        }
    }
    document.getElementById("fetch-data-btn").addEventListener("click", fetchData);

    // Dynamic Button Creation
    document.getElementById("add-btn").addEventListener("click", () => {
        let newButton = document.createElement("button");
        newButton.textContent = "Dynamically Created Button";
        newButton.classList.add("dynamic-btn");
        newButton.addEventListener("click", () => alert("You clicked a dynamically created button!"));
        document.body.appendChild(newButton);
    });

    // 🔹 Promise Example - Simulating a Delayed Task
    function delayedTask(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("✅ Task Completed after " + time + "ms");
            }, time);
        });
    }

    // Using the Promise
    delayedTask(2000)
        .then((message) => console.log(message))
        .catch((error) => console.error("❌ Error:", error));

    // 🔹 Async/Await Example - Simulating an API Call
    async function asyncFunction() {
        console.log("⏳ Fetching Data...");
        try {
            let response = await delayedTask(3000);
            console.log(response);
        } catch (error) {
            console.error("❌ Async/Await Error:", error);
        }
    }
    asyncFunction();
});
