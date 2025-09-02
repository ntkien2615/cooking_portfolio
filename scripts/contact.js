// Contact Section Animation
function initContactAnimation() {
    const contactSection = document.querySelector('.contact-section');
    const characters = document.querySelectorAll('.character-item');
    
    // Intersection Observer for triggering animation when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCharacters();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    if (contactSection) {
        observer.observe(contactSection);
    }
    
    function animateCharacters() {
        characters.forEach((character, index) => {
            const delay = parseFloat(character.dataset.delay) * 1000;
            
            setTimeout(() => {
                character.classList.add('animate');
                
                // Add a subtle bounce effect
                setTimeout(() => {
                    character.style.transform += ' scale(1.05)';
                    setTimeout(() => {
                        character.style.transform = character.style.transform.replace(' scale(1.05)', '');
                    }, 200);
                }, 100);
                
            }, delay);
        });
    }
}

// Floating animation for characters
function addFloatingAnimation() {
    const characters = document.querySelectorAll('.character-item');
    
    characters.forEach((character, index) => {
        // Add subtle floating animation after initial animation
        setTimeout(() => {
            character.style.animation = `float-${index % 2 === 0 ? 'up' : 'down'} 3s ease-in-out infinite`;
        }, 3000); // Start floating after all characters are animated
    });
}

// Add floating keyframes to CSS dynamically
function addFloatingKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes float-down {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initContactAnimation();
    addFloatingKeyframes();
    
    // Start floating animation after a delay
    setTimeout(addFloatingAnimation, 4000);
});
