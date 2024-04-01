const menu = document.querySelector(".burger-menu")
const dropdown = document.querySelector(".dropdown-menu")

const animateMenu = () => {
    menu.classList.toggle('open')
    dropdown.classList.toggle('open')
}

menu.addEventListener('click', animateMenu)

// animation on scroll 
const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('progress-animation');
        } else {
            entry.target.classList.remove('progress-animation');
        }

        });
    });
    
    //Get multiple elements instead of a single one using "querySelectorAll"
    const bars = document.querySelectorAll('.progress');
    // Loop over the elements and add each one to the observer
    bars.forEach((element) => observer.observe(element));



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