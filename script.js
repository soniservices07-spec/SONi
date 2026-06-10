// Home / Services Navigation Highlight
const servicesSection = document.getElementById('services');
const servicesLink = document.querySelector('a[href="#services"]');
const homeLink = document.querySelector('a[href="index.html"]');

if (servicesSection && servicesLink && homeLink) {
    const servicesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesLink.classList.add('active');
                homeLink.classList.remove('active');
            } else {
                servicesLink.classList.remove('active');
                homeLink.classList.add('active');
            }
        });
    }, {
        threshold: 0.35
    });

    servicesObserver.observe(servicesSection);

    if (window.scrollY < servicesSection.offsetTop - 150) {
        homeLink.classList.add('active');
    }
}
