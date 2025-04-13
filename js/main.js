const aboutSlider = new Swiper(".about__slider", {
    loop: true,
    spaceBetween: 12,
    slidesPerView: "auto",
    slidesPerView: 1,
    breakpoints: {
        320: {
            slidesPerView: "auto",
        },
        768: {
            slidesPerView: 4,
        },
    },
});

const aboutSliderTwo = new Swiper(".about__slider-two", {
    loop: true,
    spaceBetween: 12,
    slidesPerView: "auto",
});
