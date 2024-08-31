{
    const button = document.querySelector(".button")

    const welcome = () => {
        console.log("Hello world!");
    };
    
    const toggleBackgroundColor = () => {
        const body = document.querySelector(".body")
        const themeName = document.querySelector(".themeName")

        body.classList.toggle("dark")
        button.classList.toggle("button--bright")
        themeName.innerText = button.classList.contains("button--bright") ? "jasny 🌞" : "ciemny 🌙";
    };

    const changeTheme = () => {
        button.addEventListener("click", toggleBackgroundColor);
    };

    const init = () => {
        changeTheme();
        welcome();
    };

    init();
}