const projects = [
    p1 = {
        name: "Club de Tae Kwon Do Valle de San Diego",
        subtitle: "Website",
        preview: "p1.png",
        url: "https://sindromedeluis.github.io/tae-kwon-do-san-diego/",
    },
    p2 = {
        name: "Project 2",
        subtitle: "Subtitle 2",
        preview: "p2.jpg",
        url: "",
    },
    p3 = {
        name: "Project 3",
        subtitle: "Subtitle 3",
        preview: "p3.jpg",
        url: "",
    },
    p4 = {
        name: "Project 4",
        subtitle: "Subtitle 4",
        preview: "p4.jpg",
        url: "",
    },
    p5 = {
        name: "Project 5",
        subtitle: "Subtitle 5",
        preview: "p5.jpg",
        url: "",
    },
    p6 = {
        name: "Project 6",
        subtitle: "Subtitle 6",
        preview: "p6.jpg",
        url: "",
    },
]

const projectList = document.querySelector("#gallery")
const projectTemplate = document.querySelector("#project-template")
const projectFragment = document.createDocumentFragment()

projects.forEach(project => {
    const clone = projectTemplate.content.firstElementChild.cloneNode(true)

    clone.querySelector("#name-project").textContent = project.name;
    clone.querySelector("#subtitle").textContent = project.subtitle;
    clone.querySelector("#image").src = "img/"+project.preview;
    clone.querySelector("#url").setAttribute("href", project.url);
    
    projectFragment.appendChild(clone)
})

projectList.appendChild(projectFragment)