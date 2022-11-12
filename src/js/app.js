"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navside = document.querySelector(".navside");
    const desktopNavDark = document.querySelector(".header__section");
    const closeNav = document.querySelector(".closeNav");
    const body = document.body;

    burger.addEventListener("click", () => {
        if (!navside.classList.contains("showNav")) {
            navside.classList.add("showNav");
            desktopNavDark.classList.add("darkNav");
            body.classList.add("darkBody");
        }
    });

    closeNav.addEventListener("click", () => {
        navside.classList.remove("showNav");
        desktopNavDark.classList.remove("darkNav");
        body.classList.remove("darkBody");
    });

    // Copyright
    const copyright = document.getElementById("copyright");
    copyright.textContent = new Date().getFullYear();

    const loginBtns = document.querySelectorAll(".btnForLogin");
    const loginBoard = document.querySelector(".login__board");
    const loginBoardClose = document.querySelector(".login__board_close");

    // localStorage for login board
    let saveBoard = localStorage.getItem("save");

    if (saveBoard === "boardEnabled") {
        loginBoard.classList.add("showBoard");
        body.classList.add("scrollHidden");
        desktopNavDark.classList.add("boardDarkNav");
    } else {
        loginBoard.classList.remove("showBoard");
        body.classList.remove("scrollHidden");
        desktopNavDark.classList.remove("boardDarkNav");
    }

    loginBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            loginBoard.classList.add("showBoard");
            body.classList.add("scrollHidden");
            desktopNavDark.classList.add("boardDarkNav");
            localStorage.setItem("save", "boardEnabled");
        });

    });

    loginBoardClose.addEventListener("click", () => {
        loginBoard.classList.remove("showBoard");
        body.classList.remove("scrollHidden");
        desktopNavDark.classList.remove("boardDarkNav");
        localStorage.setItem("save", "boardDisabled");
    });

    document.addEventListener("mouseup", e => {
        if (e.target !== burger && e.target !== navside && e.target !== loginBoard) {
            navside.classList.remove("showNav");
            desktopNavDark.classList.remove("darkNav");
            body.classList.remove("darkBody");
        }
    });
});