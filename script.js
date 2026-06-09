// Mobile Navigation
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('section, .service-card, .hero-logo').forEach((element) => {
    element.classList.add('hidden');
    observer.observe(element);
});

// Smooth Scroll For Internal Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Logo Parallax Effect
const logo = document.querySelector('.hero-logo');

window.addEventListener('mousemove', (e) => {
    if (!logo) return;

    const x = (window.innerWidth / 2 - e.clientX) / 80;
    const y = (window.innerHeight / 2 - e.clientY) / 80;

    logo.style.transform = `translate(${x}px, ${y}px)`;
});

// Active Navigation Highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const href = link.getAttribute('href');

    if (href === currentPage) {
        link.classList.add('active');
    }
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
