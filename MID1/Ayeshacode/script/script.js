document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.id = "customCursor";

  const arrow = document.createElement("div");
  arrow.id = "cursorArrow";
  cursor.appendChild(arrow);

  document.body.appendChild(cursor);

  let lastX = 0,
    lastY = 0;

  document.addEventListener("mousemove", (e) => {
    let deltaX = e.clientX - lastX;
    let deltaY = e.clientY - lastY;

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    if (deltaX === 0 && deltaY === 0) {
      arrow.innerHTML = ""; // No arrow when stationary
    } else if (Math.abs(deltaX) > Math.abs(deltaY)) {
      arrow.innerHTML = deltaX > 0 ? ">" : "<";
      arrow.style.top = "0";
      arrow.style.left = deltaX > 0 ? "30px" : "-15px";
    } else {
      arrow.innerHTML = deltaY > 0 ? "v" : "^";
      arrow.style.left = "0";
      arrow.style.top = deltaY > 0 ? "25px" : "-15px";
    }

    lastX = e.clientX;
    lastY = e.clientY;
  });
});

// Theme toggle functionality
const themeToggle = document.createElement("button");
themeToggle.id = "theme-toggle";
themeToggle.style.position = "fixed";
themeToggle.style.bottom = "20px";
themeToggle.style.right = "20px";
document.body.appendChild(themeToggle);

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const strengths = [
    "Web Developer",
    "Creative Designer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100;
  const eraseSpeed = 50;
  const delay = 1500;

  const typingText = document.getElementById("typing-text");

  if (!typingText) {
    console.error("Element #typing-text not found.");
    return;
  }

  function typeEffect() {
    const currentText = strengths[index];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex--);
    } else {
      typingText.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, delay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % strengths.length; // Loop back
      setTimeout(typeEffect, speed);
    } else {
      setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
    }
  }

  typeEffect();
});
