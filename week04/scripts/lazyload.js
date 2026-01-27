const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("modified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;
