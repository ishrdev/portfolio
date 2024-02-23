const menu = document.querySelector(".burger-menu")
const dropdown = document.querySelector(".dropdown-menu")

const animateMenu = () => {
    menu.classList.toggle('open')
    dropdown.classList.toggle('open')
}

menu.addEventListener('click', animateMenu)