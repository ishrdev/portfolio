const menu = document.querySelector(".burger-menu")
const dropdown = document.querySelector(".dropdown-menu")

const animateMenu = () => {
    menu.classList.toggle('open')
    dropdown.classList.toggle('open')
}

menu.addEventListener('click', animateMenu)


let swiper = new Swiper('.project_slide-container', {
    // Optional parameters
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    centerSlide: "true",
    centeredSlidesBounds: "true",
    fade: "true",
    shortSwipes: false,
    longSwipes: false,

    // pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        600: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 4,
        },
    },
});