// Dark Mode Toggle
const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Active Navigation Link Update
const navLinks = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage || (!href && currentPage === '')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animation to cards
const cards = document.querySelectorAll('.featured-card, .project-card, .experience-item, .skill-category');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Update nav link on page load
window.addEventListener('load', () => {
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop() || 'index.html';
        const current = window.location.pathname.split('/').pop() || 'index.html';
        if (href === current) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + H -> Home
    if (e.altKey && e.key === 'h') {
        window.location.href = 'index.html';
    }
    // Alt + A -> About
    if (e.altKey && e.key === 'a') {
        window.location.href = 'about.html';
    }
    // Alt + P -> Projects
    if (e.altKey && e.key === 'p') {
        window.location.href = 'projects.html';
    }
    // Alt + T -> Toggle Theme
    if (e.altKey && e.key === 't') {
        themeBtn.click();
    }
});
