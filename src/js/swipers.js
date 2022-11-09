"use strict";

// Swiper for Product section.
new Swiper(".slides", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    }
});

// Swiper for Use Cases section.
new Swiper(".useCases_slides", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },

    breakpoints: {
        768: {
            slidesPerView: 2
        }
    }
});