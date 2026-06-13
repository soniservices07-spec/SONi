// Navigation links
const header = document.querySelector('.navbar') || document.querySelector('header');

// Initialize page state on load.
window.addEventListener('DOMContentLoaded', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });
});

// Smoothly update header on scroll
window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize navbar state on first paint
if (header && window.scrollY <= 20) {
    header.classList.remove('scrolled');
}

// Highlight Home / Services navigation
if (servicesSection && servicesLink && homeLink) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    servicesLink.classList.add('active');
                    homeLink.classList.remove('active');
                } else if (window.scrollY < servicesSection.offsetTop - 150) {
                    servicesLink.classList.remove('active');
                    homeLink.classList.add('active');
                }
            });
        },
        {
            threshold: 0.35,
        }
    );

    observer.observe(servicesSection);

    if (window.scrollY < servicesSection.offsetTop - 150) {
        homeLink.classList.add('active');
    }
}

window.addEventListener('pageshow', (event) => {
    if (!event.persisted) {
        window.scrollTo(0, 0);
    }
});

// Mobile navigation support
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open', navMenu.classList.contains('active'));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}
