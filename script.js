// Example JS file
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Jenish's Portfolio!");

    // Smooth Scroll Feature for Navigation Links
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});