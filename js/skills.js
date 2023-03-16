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
]

const skillList = document.querySelector("#gallery2")
const skillTemplate = document.querySelector("#skill-template")
const skillFragment = document.createDocumentFragment()

skills.forEach(skill => {
    const clone = skillTemplate.content.firstElementChild.cloneNode(true)

    clone.querySelector("#image2").src = "images/skills/"+skill.icon
    clone.querySelector("#image2").loading = "lazy"
    
    skillFragment.appendChild(clone)
})

skillList.appendChild(skillFragment)