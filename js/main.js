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

const sertificatesSlider = new Swiper(".sertificates__slider", {
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

let shemeSlider = null;
let mediaQuerySize = 768;

function shemeSliderInit() {
    if (!shemeSlider) {
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
    const windowWidth = this.innerWidth;
    if (windowWidth <= mediaQuerySize) {
        shemeSliderInit();
    } else {
        shemeSliderDestroy();
    }
});

window.addEventListener("resize", function () {
    const windowWidth = this.innerWidth;
    if (windowWidth < mediaQuerySize) {
        shemeSliderInit();
    } else {
        shemeSliderDestroy();
    }
});

// SCROLL

const headerEl = document.querySelector(".header");
const heroEl = document.querySelector(".hero");

window.addEventListener("scroll", (evt) => {
    if (pageYOffset >= 100) {
        headerEl.classList.add("header--active");
        heroEl.classList.add("hero--active");
    } else {
        headerEl.classList.remove("header--active");
        heroEl.classList.remove("hero--active");
    }
});

// VALIDATION FORMS

const consultationForm = document.querySelector(".consultation-form");
const calculateForm = document.querySelector(".calculate__form");

consultationForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const inputs = consultationForm.querySelectorAll(
        ".consultation-form__input"
    );
    inputs.forEach((input) => {
        input.classList.remove("form__input--error");
        input
            .closest(".form__input-wrapper")
            .querySelector(".form__input--error-text").style.display = "none";

        if (input.value === "") {
            input.classList.add("form__input--error");
            input
                .closest(".form__input-wrapper")
                .querySelector(".form__input--error-text").style.display =
                "block";
        }
    });
});

calculateForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const inputs = calculateForm.querySelectorAll(".calculate__input");
    inputs.forEach((input) => {
        input.classList.remove("form__input--error");
        input
            .closest(".form__input-wrapper")
            .querySelector(".form__input--error-text").style.display = "none";

        if (input.value === "") {
            input.classList.add("form__input--error");
            input
                .closest(".form__input-wrapper")
                .querySelector(".form__input--error-text").style.display =
                "block";
        }
    });
});
