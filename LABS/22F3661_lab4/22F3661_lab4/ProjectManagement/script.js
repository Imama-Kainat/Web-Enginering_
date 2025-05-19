document.addEventListener("DOMContentLoaded", loadProjects);

const addProjectBtn = document.getElementById("addProject");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const projectList = document.getElementById("projectList");

addProjectBtn.addEventListener("click", addProject);
searchInput.addEventListener("input", filterProjects);
filterSelect.addEventListener("change", filterProjects);

function getProjects() {
    return JSON.parse(localStorage.getItem("projects")) || [];
}

function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function addProject() {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const status = document.getElementById("status").value;

    if (title === "" || description === "") {
        alert("Please enter all fields.");
        return;
    }

    const projects = getProjects();
    projects.push({ title, description, status });
    saveProjects(projects);
    loadProjects();
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function loadProjects() {
    projectList.innerHTML = "";
    const projects = getProjects();
    
    projects.forEach((project, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span><strong>${project.title}</strong> - ${project.description} (${project.status})</span>
            <button class="edit" onclick="editProject(${index})">Edit</button>
            <button class="delete" onclick="deleteProject(${index})">Delete</button>
        `;
        projectList.appendChild(li);
    });
}

function deleteProject(index) {
    const projects = getProjects();
    projects.splice(index, 1);
    saveProjects(projects);
    loadProjects();
}

function editProject(index) {
    const projects = getProjects();
    const project = projects[index];

    document.getElementById("title").value = project.title;
    document.getElementById("description").value = project.description;
    document.getElementById("status").value = project.status;

    projects.splice(index, 1);
    saveProjects(projects);
    loadProjects();
}

function filterProjects() {
    const searchText = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
    const projects = getProjects();
    
    projectList.innerHTML = "";

    projects
        .filter(project => 
            (filterValue === "All" || project.status === filterValue) &&
            project.title.toLowerCase().includes(searchText)
        )
        .forEach((project, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span><strong>${project.title}</strong> - ${project.description} (${project.status})</span>
                <button class="edit" onclick="editProject(${index})">Edit</button>
                <button class="delete" onclick="deleteProject(${index})">Delete</button>
            `;
            projectList.appendChild(li);
        });
}
