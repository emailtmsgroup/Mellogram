const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});


const revealElements = document.querySelectorAll(
    ".principle-card, .promise-item, .philosophy-content, .name-story"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});
