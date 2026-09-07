document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       LOAD COMPONENT FUNCTION
    ========================================= */

    function loadComponent(
        containerId,
        componentPath
    ) {

        const container =
            document.getElementById(containerId);


        if (!container) {
            return;
        }


        fetch(componentPath)

            .then((response) => {

                if (!response.ok) {

                    throw new Error(
                        `Could not load ${componentPath}`
                    );

                }

                return response.text();

            })

            .then((data) => {

                container.innerHTML = data;


                /* Notify other scripts that
                   the component is loaded */

                document.dispatchEvent(
                    new CustomEvent(
                        "componentLoaded",
                        {
                            detail: {
                                containerId:
                                    containerId
                            }
                        }
                    )
                );

            })

            .catch((error) => {

                console.error(
                    "Component loading error:",
                    error
                );

            });

    }


    /* =========================================
       LOAD NAVBAR
    ========================================= */

    loadComponent(
        "navbar-container",
        "components/navbar.html"
    );


    /* =========================================
       LOAD FOOTER
    ========================================= */

    loadComponent(
        "footer-container",
        "components/footer.html"
    );

});