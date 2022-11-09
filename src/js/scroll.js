"use strict";

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".header__section");
    const toUpBtn = document.querySelector(".toUpArrow");
    
    navbar.classList.toggle("navShadow", window.scrollY > 90);
    toUpBtn.classList.toggle("showArrow", window.scrollY > 1000);
});