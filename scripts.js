// Welcome animation
window.addEventListener('load', () => {
    const overlay = document.querySelector('.welcome-overlay');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 2500);
    
    // Add hero background animation
    document.querySelector('.hero').classList.add('animated');
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-fade').forEach((element) => {
    observer.observe(element);
});
