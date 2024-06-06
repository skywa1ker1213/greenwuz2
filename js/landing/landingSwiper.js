var swiper = new Swiper(".healthySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1377: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView:3
        },
        900:{
            slidesPerView: 2
        },
        0:{
            slidesPerView: 1
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});