async function checkStatus() {

    const statusElement =
        document.getElementById("status");

    statusElement.textContent = "Checking...";

    try {

        const response =
            await fetch("/health");

        const data =
            await response.json();

        statusElement.textContent =
            data.message;

        statusElement.style.color = "green";

    }

    catch (error) {

        statusElement.textContent =
            "Application is not responding.";

        statusElement.style.color = "red";

    }
}


/* =========================
   1. CODE
   ========================= */

function openCode() {

    window.location.href =
        "https://github.com/nivyamanasa11/Intelligent_CICD_Pipeline";

}


/* =========================
   2. BUILD
   ========================= */

function openBuild() {

    window.location.href =
        "https://github.com/nivyamanasa11/Intelligent_CICD_Pipeline/actions";

}


/* =========================
   3. TEST
   ========================= */

function openTest() {

    const info =
        document.getElementById("pipelineInfo");

    info.innerHTML = `

        <h2>3. Test</h2>

        <p>
            Automated application testing is performed
            using Python and Docker.
        </p>

        <div class="test-box">

            <h3>Docker Test Environment</h3>

            <p>
                <b>Docker Image:</b>
                intelligent-cicd:latest
            </p>

            <p>
                <b>Container:</b>
                cicd-app
            </p>

            <p>
                <b>Port:</b>
                5000:5000
            </p>

            <p>
                <b>Test Status:</b>
                Passed
            </p>

        </div>

        <p>
            The application is tested inside a
            containerized environment.
        </p>

    `;

}


/* =========================
   4. DEPLOY
   ========================= */

function openDeploy() {

    window.location.href =
        "https://intelligent-cicd-pipeline.onrender.com/";

}