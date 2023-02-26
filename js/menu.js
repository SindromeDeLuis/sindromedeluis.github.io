const navIcon = document.querySelector(".nav-icon")
const menu = document.querySelector(".menu")

navIcon.addEventListener("click", showMenu);
menu.addEventListener("click", showMenu);

function showMenu() {
    menu.classList.toggle("show");
}