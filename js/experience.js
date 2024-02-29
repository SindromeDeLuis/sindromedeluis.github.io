const jobs = [
    /*
    j1 = {
        image: "j1.png",
        company: "",
        jobTitle: "",
        department: "",
        description: "",
        duration: "",
        tools: ["", ]
    },*/
    j2 = {
        image: "j2.png",
        company: "Cargill de Venezuela, S.R.L.",
        jobTitle: "Engineer in training",
        department: "Operations Management",
        description: `
            - Coordination of requirements with all departments of the business.
        `,
        duration: "january 2024 - Current",
        tools: ["Power Apps", "Power BI", "Power Automate"]
    },
    j3 = {
        image: "j3.png",
        company: "Cargill de Venezuela, S.R.L.",
        jobTitle: "Intern",
        department: "Food Safety, Quality and Regulatories",
        description: `
            - Coordination of requirements with the food safety teams of at all (4) locations.<br>
            - Development of applications aligned to the Quality Management System in the Power Apps platform.<br>
            - Creation of automated workflows with Power Automate.<br>
            - Design of dashboards and interactive reports using Power BI.
        `,
        duration: "march 2023 - october 2023",
        tools: ["Power Apps", "Power BI", "Power Automate"]
    }
]

const experienceList = document.querySelector("#experience-gallery")
const experienceTemplate = document.querySelector("#experience-template")
const experienceFragment = document.createDocumentFragment()

jobs.forEach(job => {
    const clone = experienceTemplate.content.firstElementChild.cloneNode(true)

    clone.querySelector("#job-image").src = "images/companies/"+job.image
    clone.querySelector("#job-image").alt = job.company
    clone.querySelector("#job-image").title = job.company
    clone.querySelector("#job-company").textContent = job.company
    clone.querySelector("#job-jobTitle").textContent = job.jobTitle
    clone.querySelector("#job-department").textContent = job.department
    clone.querySelector("#job-description").innerHTML = job.description
    clone.querySelector("#job-duration").textContent = job.duration
    job.tools.forEach(tool => {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(tool))
        li.setAttribute("id", tool.toLowerCase())
        clone.querySelector("#job-tools").appendChild(li)
    })
    
    experienceFragment.appendChild(clone)
})

experienceList.appendChild(experienceFragment)


/*const images = document.querySelectorAll(".experience img")
const descriptions = document.querySelectorAll(".experience .description")

images.forEach((img, i) => {
    img.addEventListener("click", () => {showDescription(i)});
})

function showDescription(i) {
    descriptions[i].classList.toggle("show");
}*/