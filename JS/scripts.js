let button = document.querySelector(".button")
let body = document.querySelector(".body")
let themeName = document.querySelector(".themeName")

button.addEventListener("click", () => {
    body.classList.toggle("dark")
    button.classList.toggle("button--bright")
    themeName.innerText = button.classList.contains("bright") ? "jasny 🌞" : "ciemny 🌙"
});