// Skills & Projects
const skills = ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Accessibility', 'Git & GitHub', 'UI/UX Design'];

const projects = [
    { title: 'Portfolio Website', description: 'Responsive personal portfolio site.', img: 'images/portfolio.png' },
    { title: 'Filtered Temples', description: 'Dynamic filtering using JS arrays.', img: 'images/filtered-temples.png' },
    { title: 'Form Validation', description: 'Accessible form with client-side validation.', img: 'images/form-validation.png' },
    { title: 'Weather App', description: 'Interactive weather app fetching API data.', img: 'images/weather-app.png' },
    { title: 'Task Tracker', description: 'A productivity app using localStorage.', img: 'images/task-tracker.png' }
];

// Load Skills
function loadSkills() {
    const list = document.getElementById('skillsList');
    if (!list) return;
    list.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
}

// Load Projects with Animation
function loadProjects() {
    const container = document.getElementById('projects');
    if (!container) return;
    container.innerHTML = projects.map(p => `
        <div class="project">
            <img src="${p.img}" loading="lazy" alt="${p.title}" class="project-img">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
        </div>`).join('');

    const projectEls = document.querySelectorAll('.project');
    projectEls.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease-out';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Dark Mode
function toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.className);
}
function loadTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) document.body.className = saved;
}

// Form validation + localStorage
function handleForm() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            feedback.textContent = 'Please fill in all fields.';
            feedback.style.color = 'red';
            return;
        }

        const submission = { name, email, message, date: new Date().toLocaleString() };
        const saved = JSON.parse(localStorage.getItem('messages')) || [];
        saved.push(submission);
        localStorage.setItem('messages', JSON.stringify(saved));

        feedback.textContent = 'Message sent successfully!';
        feedback.style.color = 'green';
        feedback.classList.add('success');
        form.reset();

        setTimeout(() => { feedback.textContent = ''; feedback.classList.remove('success'); }, 3000);
    });
}

// Contact Cards (Email / GitHub / LinkedIn)
function loadContactCards() {
    const container = document.getElementById('contactCards');
    if (!container) return;
    const contacts = [
        { name: 'Email', link: 'mailto:tobiloba@example.com' },
        { name: 'GitHub', link: 'https://github.com/thetobsdev' },
        { name: 'LinkedIn', link: 'https://linkedin.com/in/tobiloba' }
    ];
    container.innerHTML = contacts.map(c => `
        <div class="card">
            <h3>${c.name}</h3>
            <a href="${c.link}" target="_blank">${c.link}</a>
        </div>`).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    loadSkills();
    loadProjects();
    loadTheme();
    handleForm();
    loadContactCards();

    const btn = document.getElementById('themeBtn');
    if (btn) btn.addEventListener('click', toggleTheme);
});
