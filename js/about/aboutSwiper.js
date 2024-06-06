var swiper = new Swiper(".allProductSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1108:{
            slidesPerView: 4
        },

        801:{
            slidesPerView: 3
        },

        600:{
            slidesPerView: 2
        },

        0:{
            slidesPerView: 1,
        }
        
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});