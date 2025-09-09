
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) { // jab 50px scroll ho
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // current URL ka path (like /index.html, /about.html)
    let currentPath = window.location.pathname.split("/").pop();

    // agar root URL ho (jaise domain.com/) to usse index.html treat karo
    if (currentPath === "") {
        currentPath = "index.html";
    }

    // sabhi nav links select karo
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href").split("/").pop();

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
});

