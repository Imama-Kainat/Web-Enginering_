document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }

    toggleButton.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            toggleButton.textContent = "🌙";
            localStorage.setItem("dark-mode", "disabled");
        } else {
            body.classList.add("dark-mode");
            toggleButton.textContent = "☀️"; 
            localStorage.setItem("dark-mode", "enabled");
        }
    });
});
