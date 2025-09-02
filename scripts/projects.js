// Projects Section Functionality
class ProjectsManager {
    constructor() {
        this.initProjectAnimations();
        this.initProjectInteractions();
    }

    // Initialize project-specific animations
    initProjectAnimations() {
        // Add staggered animations to tech tags
        const techTags = document.querySelectorAll('.tech-tag');
        techTags.forEach((tag, index) => {
            tag.style.animationDelay = `${index * 0.1}s`;
        });

        // Add hover sound effects (optional)
        this.addSoundEffects();
    }

    // Initialize project interactions
    initProjectInteractions() {
        // Add click tracking for analytics (optional)
        const projectLinks = document.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Add click animation
                const clickEffect = document.createElement('div');
                clickEffect.className = 'click-effect';
                link.appendChild(clickEffect);
                
                setTimeout(() => {
                    clickEffect.remove();
                }, 300);
                
                // Optional: Track click analytics
                this.trackProjectClick(link.href);
            });
        });

        // Add keyboard navigation
        this.initKeyboardNavigation();
    }

    // Add sound effects on hover (optional feature)
    addSoundEffects() {
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Optional: Add subtle sound effect
                // this.playHoverSound();
            });
        });
    }

    // Track project clicks for analytics
    trackProjectClick(url) {
        // Optional: Send analytics data
        console.log(`Project link clicked: ${url}`);
    }

    // Initialize keyboard navigation for accessibility
    initKeyboardNavigation() {
        const projectLinks = document.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    link.click();
                }
            });
        });
    }

    // Optional: Lazy load project images when added
    initLazyLoading() {
        // For future use when project screenshots are added
        const projectImages = document.querySelectorAll('.project-image');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            projectImages.forEach(img => imageObserver.observe(img));
        }
    }
}

// Initialize projects functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsManager();
});

// Add CSS for click effects
const clickEffectStyles = `
    .click-effect {
        position: absolute;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255, 107, 53, 0.6) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: clickWave 0.3s ease-out;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes clickWave {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }

    .project-link {
        position: relative;
        overflow: hidden;
    }
`;

// Inject styles
const styleElement = document.createElement('style');
styleElement.textContent = clickEffectStyles;
document.head.appendChild(styleElement);
