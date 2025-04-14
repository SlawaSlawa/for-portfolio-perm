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

const aboutSliderTwo = new Swiper(".about__slider-two .about__slider", {
    loop: true,
    spaceBetween: 12,
    slidesPerView: "auto",
});

// const shemeSlider = new Swiper(".sheme__slider", {
//     slidesPerView: 1,
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

var shemeSlider = null;
var mediaQuerySize = 768;

function shemeSliderInit() {
    if (!shemeSlider) {
        console.log("new Swiper");
        shemeSlider = new Swiper(".sheme__slider", {
            slidesPerView: 1,
            spaceBetween: 12,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

function shemeSliderDestroy() {
    if (shemeSlider) {
        console.log("destroy");

        shemeSlider.destroy();
        shemeSlider = null;
    }
}

window.addEventListener("load", function () {
    var windowWidth = this.innerWidth;
    if (windowWidth <= mediaQuerySize) {
        shemeSliderInit();
    } else {
        shemeSliderDestroy();
    }
});

window.addEventListener("resize", function () {
    var windowWidth = this.innerWidth;
    if (windowWidth < mediaQuerySize) {
        shemeSliderInit();
    } else {
        shemeSliderDestroy();
    }
});
