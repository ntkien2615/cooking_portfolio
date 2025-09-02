// Sticky Navigation Script - Appears immediately when scrolling down
window.addEventListener('scroll', function() {
    const stickyNav = document.getElementById('sticky-nav');
    
    // Show sticky nav when scrolled down more than 50 pixels
    if (window.scrollY > 50) {
        stickyNav.classList.add('visible');
    } else {
        stickyNav.classList.remove('visible');
    }
});
