// ==============================
// Place Page JavaScript
// ==============================

document.addEventListener("DOMContentLoaded", () => {
    // Footer year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Last modified date
    const modifiedSpan = document.getElementById("lastModified");
    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }

    // Weather data (static for assignment)
    const temperature = 28; // °C
    const windSpeed = 10; // km/h

    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const chillElement = document.getElementById("chill");

    if (tempElement) tempElement.textContent = `${temperature}°C`;
    if (windElement) windElement.textContent = `${windSpeed} km/h`;

    // Wind Chill Calculation
    function calculateWindChill(temp, speed) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1);
    }

    if (chillElement) {
        if (temperature <= 10 && windSpeed > 4.8) {
            chillElement.textContent =
                calculateWindChill(temperature, windSpeed) + " °C";
        } else {
            chillElement.textContent = "N/A";
        }
    }
});
