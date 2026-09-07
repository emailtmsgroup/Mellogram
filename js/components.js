document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       LOAD NAVBAR
    ========================================= */

    const navbarContainer =
        document.getElementById("navbar-container");


    if (navbarContainer) {

        fetch("components/navbar.html")

            .then((response) => {

                if (!response.ok) {

                    throw new Error(
                        "Navbar could not be loaded"
                    );

                }

                return response.text();

            })

            .then((data) => {

                navbarContainer.innerHTML = data;

            })

            .catch((error) => {

                console.error(
                    "Navbar loading error:",
                    error
                );

            });

    }


    /* =========================================
       LOAD FOOTER
    ========================================= */

    const footerContainer =
        document.getElementById("footer-container");


    if (footerContainer) {

        fetch("components/footer.html")

            .then((response) => {

                if (!response.ok) {

                    throw new Error(
                        "Footer could not be loaded"
                    );

                }

                return response.text();

            })

            .then((data) => {

                footerContainer.innerHTML = data;

            })

            .catch((error) => {

                console.error(
                    "Footer loading error:",
                    error
                );

            });

    }

});