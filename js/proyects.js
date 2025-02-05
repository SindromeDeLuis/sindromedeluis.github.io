const projects = [
    /*p1 = {
        name: "Dra. Nayira García Siso | Cirujano plástico",
        subtitle: "Personal website for Dr. Nayira Garcia Siso, Plastic Surgeon",
        preview: "p6.png",
        github: "",
        demo: "",
        technologies: ["HTML", "CSS", "JavaScript", "Vuejs"],
    },*/
    p1 = {
        name: "Tetris",
        subtitle: "Tetris Classic in JS",
        preview: "p6.png",
        github: "https://github.com/SindromeDeLuis/tetris-classic-js",
        demo: "https://tetris-classic-js.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    p2 = {
        name: "Beatrice: Chatbot for English Practice",
        subtitle: "WebApp with chatbot to improve English",
        preview: "p4.png",
        github: "https://github.com/SindromeDeLuis/betricebot",
        demo: "https://beatricebot.onrender.com/",
        technologies: ["HTML", "CSS", "Nodejs", "Expressjs", "MongoDB", "Dialogflow ES"],
    },
    p3 = {
        name: "E-commerce",
        subtitle: "E-commerce template",
        preview: "p2.png",
        github: "https://github.com/SindromeDeLuis/E-commerce",
        demo: "https://sindromedeluis.github.io/E-commerce/",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    p4 = {
        name: "Gestor de Trabajos de Grado",
        subtitle: "Gestor de Trabajos de Grado para la Universidad José Antonio Páez",
        preview: "p5.png",
        github: "https://github.com/SindromeDeLuis/gestor-tesis-ujap",
        demo: "https://www.flipsnack.com/BEBBD966AED/new-flipbook.html",
        technologies: ["Vuejs", "Bootstrap", "PHP", "Laravel", "MySQL"],
    },
    p5 = {
        name: "Club de Tae Kwon Do Valle de San Diego",
        subtitle: "Website",
        preview: "p1.png",
        github: "https://github.com/SindromeDeLuis/tae-kwon-do-san-diego",
        demo: "https://sindromedeluis.github.io/tae-kwon-do-san-diego/",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    p6 = {
        name: "News/blog template",
        subtitle: "Website",
        preview: "p3.png",
        github: "https://github.com/SindromeDeLuis/news-blog",
        demo: "https://sindromedeluis.github.io/news-blog/",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
]

const projectList = document.querySelector("#projects-gallery")
const projectTemplate = document.querySelector("#project-template")
const projectFragment = document.createDocumentFragment()

projects.forEach(project => {
    const clone = projectTemplate.content.firstElementChild.cloneNode(true)

    clone.querySelector("#project-name").textContent = project.name
    clone.querySelector("#project-subtitle").textContent = project.subtitle
    clone.querySelector("#project-image").src = "images/projects/"+project.preview
    clone.querySelector("#project-image").alt = project.name
    project.technologies.forEach(technology => {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(technology))
        li.setAttribute("id", technology.toLowerCase())
        clone.querySelector("#project-technologies").appendChild(li)
    })
    clone.querySelector("#url").setAttribute("href", project.github)
    clone.querySelector("#url2").setAttribute("href", project.demo)
    
    projectFragment.appendChild(clone)
})

projectList.appendChild(projectFragment)


const images = document.querySelectorAll(".project img")
const descriptions = document.querySelectorAll(".project .description")

images.forEach((img, i) => {
    img.addEventListener("click", () => {showDescription(i)});
})

function showDescription(i) {
    descriptions[i].classList.toggle("show");
}