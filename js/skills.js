const skills = [
    s1 = {
        name: "HTML",
        icon: "html.svg",
    },
    s2 = {
        name: "CSS",
        icon: "css.svg",
    },
    s3 = {
        name: "JavaScript",
        icon: "javascript.svg",
    },
    s4 = {
        name: "Bootstrap",
        icon: "bootstrap.svg",
    },
    s5 = {
        name: "MongoDB",
        icon: "mongodb.svg",
    },
    s6 = {
        name: "Express.js",
        icon: "expressjs.svg",
    },
    s7 = {
        name: "Vue.js",
        icon: "vuejs.svg",
    },
    s8 = {
        name: "Node.js",
        icon: "nodejs.svg",
    },
]

const skillList = document.querySelector("#skills-gallery")
const skillTemplate = document.querySelector("#skill-template")
const skillFragment = document.createDocumentFragment()

skills.forEach(skill => {
    const clone = skillTemplate.content.firstElementChild.cloneNode(true)

    clone.querySelector("#skill-image").src = "images/skills/"+skill.icon
    clone.querySelector("#skill-image").alt = skill.name
    clone.querySelector("#skill-image").title = skill.name
    
    skillFragment.appendChild(clone)
})

skillList.appendChild(skillFragment)