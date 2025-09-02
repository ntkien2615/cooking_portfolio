// Scroll Animation System
class ScrollAnimations {
    constructor() {
        this.initScrollAnimations();
        this.initSmoothScrolling();
        this.initActiveNavHighlight();
    }

    // Initialize scroll-triggered animations
    initScrollAnimations() {
        // Add animation classes to elements
        this.addAnimationClasses();
        
        // Create intersection observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    }

    // Add animation classes to elements
    addAnimationClasses() {
        // Hero section animations
        const heroContent = document.querySelector('.hero-content .text-content');
        const heroImage = document.querySelector('.hero-content .image-content');
        if (heroContent) heroContent.classList.add('scroll-animate', 'slide-up');
        if (heroImage) heroImage.classList.add('scroll-animate', 'slide-right');

        // About section animations
        const aboutHeader = document.querySelector('.about-header');
        const storyItems = document.querySelectorAll('.story-item');
        const skillsPreview = document.querySelector('.skills-preview');
        
        if (aboutHeader) aboutHeader.classList.add('scroll-animate', 'fade-up');
        storyItems.forEach((item, index) => {
            item.classList.add('scroll-animate', 'slide-up');
            item.style.animationDelay = `${index * 0.2}s`;
        });
        if (skillsPreview) skillsPreview.classList.add('scroll-animate', 'slide-left');

        // Skills section animations
        const skillsHeader = document.querySelector('.skills-section h2');
        const firstYearShowcase = document.querySelector('.first-year-showcase');
        const skillItems = document.querySelectorAll('.skill-item');
        const skillsFooter = document.querySelector('.skills-footer');

        if (skillsHeader) skillsHeader.classList.add('scroll-animate', 'fade-down');
        if (firstYearShowcase) firstYearShowcase.classList.add('scroll-animate', 'slide-up');
        skillItems.forEach((item, index) => {
            item.classList.add('scroll-animate', 'slide-left');
            item.style.animationDelay = `${index * 0.1}s`;
        });
        if (skillsFooter) skillsFooter.classList.add('scroll-animate', 'fade-up');

        // Projects section animations
        const projectsHeader = document.querySelector('.projects-section h2');
        const projectsIntro = document.querySelector('.projects-intro');
        const projectItems = document.querySelectorAll('.project-item');
        const futureProjectsNote = document.querySelector('.future-projects-note');

        if (projectsHeader) projectsHeader.classList.add('scroll-animate', 'fade-down');
        if (projectsIntro) projectsIntro.classList.add('scroll-animate', 'fade-up');
        projectItems.forEach((item, index) => {
            item.classList.add('scroll-animate', 'slide-up');
            item.style.animationDelay = `${index * 0.3}s`;
        });
        if (futureProjectsNote) {
            futureProjectsNote.classList.add('scroll-animate', 'fade-up');
            futureProjectsNote.style.animationDelay = '0.6s';
        }

        // Contact section animations
        const contactHeader = document.querySelector('.contact-section h2');
        const contactIntro = document.querySelector('.intro-text');
        const socialLinks = document.querySelectorAll('.social-link');

        if (contactHeader) contactHeader.classList.add('scroll-animate', 'zoom-in');
        if (contactIntro) contactIntro.classList.add('scroll-animate', 'fade-up');
        socialLinks.forEach((link, index) => {
            link.classList.add('scroll-animate', 'bounce-up');
            link.style.animationDelay = `${index * 0.1}s`;
        });

        // Footer section animations
        const footerSection = document.querySelector('.footer-section');
        const footerMain = document.querySelector('.footer-main');
        const footerNote = document.querySelector('.footer-note');
        const footerSovereignty = document.querySelector('.footer-sovereignty');

        if (footerSection) footerSection.classList.add('scroll-animate', 'fade-up');
        if (footerMain) footerMain.classList.add('scroll-animate', 'slide-up');
        if (footerNote) {
            footerNote.classList.add('scroll-animate', 'zoom-in');
            footerNote.style.animationDelay = '0.3s';
        }
        if (footerSovereignty) {
            footerSovereignty.classList.add('scroll-animate', 'bounce-up');
            footerSovereignty.style.animationDelay = '0.6s';
        }
    }

    // Smooth scrolling for navigation links
    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Add click animation to nav item
                    anchor.classList.add('nav-clicked');
                    setTimeout(() => anchor.classList.remove('nav-clicked'), 300);

                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Add pulse animation to target section
                    targetElement.classList.add('section-highlight');
                    setTimeout(() => targetElement.classList.remove('section-highlight'), 1000);
                }
            });
        });
    }

    // Highlight active navigation item
    initActiveNavHighlight() {
        const sections = document.querySelectorAll('section, .hero');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id || 'home';
                    
                    // Remove active class from all nav links
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    // Add active class to current section's nav link
                    const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`) || 
                                     document.querySelector(`nav a[href="#home"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
}

// Parallax effect for hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Add loading animation
function initLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Animate hero section on load
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('hero-loaded');
        }
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
    initParallaxEffect();
    initLoadingAnimation();
});

// Add scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', initScrollProgress);

// Walter White Video Handler
class VideoHandler {
    constructor() {
        this.initVideoHandling();
    }

    initVideoHandling() {
        const video = document.querySelector('.profile-video video');
        
        if (video) {
            // Ensure video plays
            video.addEventListener('loadeddata', () => {
                video.play().catch(error => {
                    console.log('Video autoplay failed:', error);
                });
            });

            // Handle video errors
            video.addEventListener('error', () => {
                const container = video.parentElement;
                container.style.background = 'rgba(255, 107, 53, 0.1)';
                container.innerHTML = `
                    <div style="
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: #ff6b35;
                        text-align: center;
                        font-weight: bold;
                    ">
                        <i class="fas fa-video" style="font-size: 3em; margin-bottom: 10px;"></i>
                        <br>Walter White Video
                        <br><small>Loading...</small>
                    </div>
                `;
            });

            // Add special Walter White interactions
            video.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });

            // Add dramatic effect on hover
            const container = video.parentElement;
            container.addEventListener('mouseenter', () => {
                video.playbackRate = 0.8; // Slow motion effect
            });

            container.addEventListener('mouseleave', () => {
                video.playbackRate = 1; // Normal speed
            });
        }
    }
}

// Initialize video handler
document.addEventListener('DOMContentLoaded', () => {
    new VideoHandler();
});
