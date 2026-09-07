document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================= */

    document.addEventListener("click", (event) => {

        const menuButton =
            event.target.closest("#menuButton");

        const mobileLink =
            event.target.closest("#mobileMenu a");


        /* Toggle Mobile Menu */

        if (menuButton) {

            const mobileMenu =
                document.getElementById("mobileMenu");

            if (mobileMenu) {

                mobileMenu.classList.toggle("active");

            }

        }


        /* Close Menu After Clicking a Link */

        if (mobileLink) {

            const mobileMenu =
                document.getElementById("mobileMenu");

            if (mobileMenu) {

                mobileMenu.classList.remove("active");

            }

        }

    });


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".principle-card, .promise-item, .philosophy-content, .name-story"
        );


    if (
        revealElements.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.15
                }

            );


        revealElements.forEach((element) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            observer.observe(element);

        });

    }

});