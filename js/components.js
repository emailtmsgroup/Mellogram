document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       LOAD NAVBAR
    =============================== */

    const navbarContainer =
        document.getElementById("navbar-container");

    if (navbarContainer) {

        fetch("components/navbar.html")
            .then(function (response) {

                if (!response.ok) {
                    throw new Error(
                        "Navbar could not be loaded"
                    );
                }

                return response.text();

            })
            .then(function (data) {

                navbarContainer.innerHTML = data;

                initializeMobileMenu();

            })
            .catch(function (error) {

                console.error(
                    "Navbar loading error:",
                    error
                );

            });

    }


    /* ===============================
       LOAD FOOTER
    =============================== */

    const footerContainer =
        document.getElementById("footer-container");

    if (footerContainer) {

        fetch("components/footer.html")
            .then(function (response) {

                if (!response.ok) {
                    throw new Error(
                        "Footer could not be loaded"
                    );
                }

                return response.text();

            })
            .then(function (data) {

                footerContainer.innerHTML = data;

            })
            .catch(function (error) {

                console.error(
                    "Footer loading error:",
                    error
                );

            });

    }

});


/* ===============================
   MOBILE MENU
================================ */

function initializeMobileMenu() {

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (!menuButton || !mobileMenu) {
        return;
    }


    menuButton.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle("active");

        }
    );

}