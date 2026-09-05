document.addEventListener("DOMContentLoaded", function () {

    const navbarContainer =
        document.getElementById("navbar-container");

    if (!navbarContainer) {
        return;
    }

    fetch("components/navbar.html")
        .then(function (response) {

            if (!response.ok) {
                throw new Error(
                    "Navbar file could not be loaded"
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
                "Error loading navbar:",
                error
            );

        });

});


function initializeMobileMenu() {

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener(
            "click",
            function () {

                mobileMenu.classList.toggle(
                    "active"
                );

            }
        );

    }

}