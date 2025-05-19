document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const toggle = question.querySelector(".toggle");

    answer.classList.toggle("active");
    toggle.textContent = answer.classList.contains("active") ? "-" : "+";
  });
});
