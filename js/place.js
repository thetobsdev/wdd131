const temp = 28;
const speed = 10;

const chillOutput = document.getElementById("chill");

function calculateWindChill(t, s) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

if (temp <= 10 && speed > 4.8) {
    chillOutput.textContent = calculateWindChill(temp, speed) + " °C";
} else {
    chillOutput.textContent = "N/A";
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;
