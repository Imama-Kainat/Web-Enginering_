const projectCards = document.querySelectorAll(".project-card");
const overlay = document.querySelector(".overlay");
const closeButtons = document.querySelectorAll(".close-popup");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.dataset.project;
    const popup = document.getElementById(`popup-${projectId}`);
    popup.classList.add("active");
    overlay.classList.add("active");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const popup = button.closest(".project-popup");
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });
});

overlay.addEventListener("click", () => {
  document.querySelectorAll(".project-popup.active").forEach((popup) => {
    popup.classList.remove("active");
  });
  overlay.classList.remove("active");
});
