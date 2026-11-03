async function checkStatus() {
    const statusElement = document.getElementById("status");

    statusElement.textContent = "Checking...";

    try {
        const response = await fetch("/health");
        const data = await response.json();

        statusElement.textContent = data.message;
        statusElement.style.color = "green";
    } catch (error) {
        statusElement.textContent = "Application is not responding.";
        statusElement.style.color = "red";
    }
}