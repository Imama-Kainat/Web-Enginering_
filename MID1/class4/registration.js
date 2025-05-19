const students = {
    1: { name: "Nehal", courses: [] },
    2: { name: "Ibrahim Khan", courses: [] },
    3: { name: "Emaan Fatima", courses: [] },
};

const studentSelect = document.getElementById("studentSelect");
const registeredCourses = document.getElementById("registeredCourses");
const addCourseBtn = document.getElementById("addCourseBtn");
const deleteCourseBtn = document.getElementById("deleteCourseBtn");

studentSelect.addEventListener("change", () => {
    updateRegisteredCourses();
});

addCourseBtn.addEventListener("click", () => {
    const selectedStudentId = studentSelect.value;
    if (selectedStudentId) {
        const selectedCourses = Array.from(document.querySelectorAll('.courses input[type="checkbox"]:checked'));
        selectedCourses.forEach(course => {
            const courseName = course.value;
            if (!students[selectedStudentId].courses.includes(courseName)) {
                students[selectedStudentId].courses.push(courseName);
            }
        });
        updateRegisteredCourses();
    }
});

deleteCourseBtn.addEventListener("click", () => {
    const selectedCourseItems = Array.from(registeredCourses.querySelectorAll('input[type="checkbox"]:checked'));
    const selectedStudentId = studentSelect.value;
    selectedCourseItems.forEach(item => {
        const courseName = item.value;
        students[selectedStudentId].courses = students[selectedStudentId].courses.filter(course => course !== courseName);
    });
    updateRegisteredCourses();
});

function updateRegisteredCourses() {
    const selectedStudentId = studentSelect.value;
    registeredCourses.innerHTML = '';
    if (selectedStudentId) {
        students[selectedStudentId].courses.forEach(course => {
            const li = document.createElement("li");
            li.innerHTML = `<input type="checkbox" value="${course}"> ${course}`;
            registeredCourses.appendChild(li);
        });
    }
}
