// Project Data
const projects = [
    { title: "Portfolio Website", desc: "My professional portfolio.", img: "https://via.placeholder.com/300x200", link: "#" },
    { title: "Calculator App", desc: "Vanilla JS calculator.", img: "https://via.placeholder.com/300x200", link: "#" },
    { title: "Todo List", desc: "Task manager app.", img: "https://via.placeholder.com/300x200", link: "#" }
];

// Render Projects
const projectGallery = document.querySelector("#project-gallery");
if (projectGallery) {
    projects.forEach(project => {
        const card = `
      <div class="project-card">
        <img src="${project.img}" alt="${project.title}" loading="lazy">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}">View Project</a>
      </div>
    `;
        projectGallery.innerHTML += card;
    });
}

// Contact Form Submission
const form = document.querySelector("#form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        const submission = { name, email, message };
        localStorage.setItem("lastSubmission", JSON.stringify(submission));

        document.querySelector("#form-response").textContent = "Thank you! Your message has been saved locally.";
        form.reset();
    });
}
