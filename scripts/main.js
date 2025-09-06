// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerSticky = document.getElementById('hamburger-sticky');
    const stickyNavList = document.getElementById('sticky-nav-list');
    const hamburgerHeader = document.getElementById('hamburger-header');
    const headerNavList = document.getElementById('header-nav-list');
    const navOverlay = document.getElementById('nav-overlay');

    function closeAllNav() {
        if (stickyNavList) stickyNavList.classList.remove('active');
        if (headerNavList) headerNavList.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        
        // Remove active class from hamburgers
        if (hamburgerSticky) hamburgerSticky.classList.remove('active');
        if (hamburgerHeader) hamburgerHeader.classList.remove('active');
    }

    function openNav(list, hamburger) {
        closeAllNav();
        if (list) {
            list.classList.add('active');
        }
        if (hamburger) {
            hamburger.classList.add('active');
        }
        if (navOverlay) navOverlay.classList.add('active');
    }

    if (hamburgerSticky && stickyNavList) {
        hamburgerSticky.addEventListener('click', function() {
            if (stickyNavList.classList.contains('active')) {
                closeAllNav();
            } else {
                openNav(stickyNavList, hamburgerSticky);
            }
        });
    }
    
    if (hamburgerHeader && headerNavList) {
        hamburgerHeader.addEventListener('click', function() {
            if (headerNavList.classList.contains('active')) {
                closeAllNav();
            } else {
                openNav(headerNavList, hamburgerHeader);
            }
        });
    }
    
    // Close nav when clicking a link (mobile UX)
    [stickyNavList, headerNavList].forEach(function(list) {
        if (list) {
            list.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', closeAllNav);
            });
        }
    });
});

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
