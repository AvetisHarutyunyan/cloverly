"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navside = document.querySelector(".navside");
    const desktopNav = document.querySelector(".header__section");
    const closeNav = document.querySelector(".closeNav");
    const body = document.body;

    burger.addEventListener("click", () => {
        if (!navside.classList.contains("showNav")) {
            navside.classList.add("showNav");
            desktopNav.classList.add("darkNav");
            body.classList.add("darkBody");
        }
    });

    closeNav.addEventListener("click", () => {
        navside.classList.remove("showNav");
        desktopNav.classList.remove("darkNav");
        body.classList.remove("darkBody");
    });

    document.addEventListener("mouseup", e => {
        if(e.target !== burger && e.target !== navside) {
            navside.classList.remove("showNav");
            desktopNav.classList.remove("darkNav");
            body.classList.remove("darkBody");
        }
    });

    // Copyright
    const copyright = document.getElementById("copyright");
    copyright.textContent = new Date().getFullYear();
});