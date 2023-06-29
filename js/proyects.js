const projects = [
    p2 = {
        name: "Beatrice: Chatbot for English Practice",
        subtitle: "WebApp with chatbot",
        preview: "p4.png",
        url: "https://github.com/SindromeDeLuis/betricebot",
        url2: "https://beatricebot.glitch.me/",
        technologies: ["HTML", "CSS", "Nodejs", "Expressjs", "MongoDB", "Dialogflow ES"],
    },
    p3 = {
        name: "Gestor de Trabajos de Grado para la Universidad José Antonio Páez",
        subtitle: "WebApp",
        preview: "p5.png",
        url: "#",
        url2: "https://www.flipsnack.com/BEBBD966AED/new-flipbook.html",
        technologies: ["PHP", "Laravel", "Vuejs", "Bootstrap", "MySQL"],
    },
    p4 = {
        name: "E-commerce template",
        subtitle: "E-commerce",
        preview: "p2.png",
        url: "https://github.com/SindromeDeLuis/E-commerce",
        url2: "https://sindromedeluis.github.io/E-commerce/",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    p5 = {
        name: "Club de Tae Kwon Do Valle de San Diego",
        subtitle: "Website",
        preview: "p1.png",
        url: "https://github.com/SindromeDeLuis/tae-kwon-do-san-diego",
        url2: "https://sindromedeluis.github.io/tae-kwon-do-san-diego/",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    p6 = {
        name: "News/blog template",
        subtitle: "Website",
        preview: "p3.png",
        url: "https://github.com/SindromeDeLuis/news-blog",
        url2: "https://sindromedeluis.github.io/news-blog/",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
]

const projectList = document.querySelector("#gallery")
const projectTemplate = document.querySelector("#project-template")
const projectFragment = document.createDocumentFragment()

projects.forEach(project => {
    const clone = projectTemplate.content.firstElementChild.cloneNode(true)

    clone.querySelector("#name-project").textContent = project.name
    clone.querySelector("#subtitle").textContent = project.subtitle
    clone.querySelector("#image").src = "images/projects/"+project.preview
    clone.querySelector("#image").loading = "lazy"
    project.technologies.forEach(technology => {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(technology))
        li.setAttribute("id", technology.toLowerCase())
        clone.querySelector("#technologies").appendChild(li)
    })
    clone.querySelector("#url").setAttribute("href", project.url)
    clone.querySelector("#url2").setAttribute("href", project.url2)
    
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