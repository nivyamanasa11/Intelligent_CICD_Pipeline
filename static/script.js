async function checkStatus() {

    const statusElement =
        document.getElementById("status");

    statusElement.textContent =
        "Checking...";

    try {

        const response =
            await fetch("/health");

        const data =
            await response.json();

        statusElement.textContent =
            data.message;

        statusElement.style.color =
            "green";

    } catch (error) {

        statusElement.textContent =
            "Application is not responding.";

        statusElement.style.color =
            "red";
    }
}


async function showStage(stage) {

    const details =
        document.getElementById("details");

    details.innerHTML =
        "<h2>Loading...</h2>";

    try {

        const response =
            await fetch("/api/pipeline");

        const data =
            await response.json();

        const information =
            data[stage];


        if (stage === "code") {

            details.innerHTML = `
                <h2>1. Code</h2>

                <div class="success">
                    ✓ Source Code Ready
                </div>

                <p>
                    ${information.message}
                </p>

                <p>
                    <b>Repository:</b>
                    ${information.repository}
                </p>

                <a href="${information.repository}"
                   target="_blank">
                    Open GitHub Repository
                </a>
            `;
        }


        else if (stage === "build") {

            details.innerHTML = `
                <h2>2. Build</h2>

                <div class="success">
                    ✓ Build Successful
                </div>

                <p>
                    ${information.message}
                </p>

                <p>
                    <b>Build System:</b>
                    GitHub Actions
                </p>

                <a href="${information.actions}"
                   target="_blank">
                    Open GitHub Actions
                </a>
            `;
        }


        else if (stage === "test") {

            details.innerHTML = `
                <h2>3. Test</h2>

                <div class="success">
                    ✓ Testing Successful
                </div>

                <p>
                    ${information.message}
                </p>

                <p>
                    <b>Docker Image:</b>
                    ${information.docker_image}
                </p>

                <p>
                    <b>Container:</b>
                    ${information.container}
                </p>

                <p>
                    <b>Testing:</b>
                    Automated pytest tests
                </p>
            `;
        }


        else if (stage === "deploy") {

            details.innerHTML = `
                <h2>4. Deploy</h2>

                <div class="success">
                    ✓ Deployment Successful
                </div>

                <p>
                    ${information.message}
                </p>

                <p>
                    <b>Deployment Platform:</b>
                    Render
                </p>

                <p>
                    <b>Webhook:</b>
                    ${information.webhook}
                </p>

                <div class="links">

                    <a href="${information.render_dashboard}"
                       target="_blank">
                       Open Render Dashboard
                    </a>

                    <a href="${information.application}"
                       target="_blank">
                       Open Deployed Application
                    </a>

                    <a href="${information.health_check}"
                       target="_blank">
                       Open Health Check
                    </a>

                </div>
            `;
        }

    } catch (error) {

        details.innerHTML = `
            <h2>Error</h2>
            <p>
                Unable to load pipeline information.
            </p>
        `;
    }
}