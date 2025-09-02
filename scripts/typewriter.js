// Typewriter Animation
document.addEventListener('DOMContentLoaded', function() {
    const changingText = document.getElementById('changingText');
    const texts = ['A NEWBIE CODER', 'NOT A METH SELLER','KIÊN'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Deleting backwards - remove one character
            charIndex--;
            changingText.textContent = currentText.substring(0, charIndex);
            
            // If we've deleted all characters
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeWriter, 800); // Pause before typing next text
                return;
            }
        } else {
            // Typing forward - add one character
            changingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            // If we've finished typing the word
            if (charIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, 4000); // Longer pause for reading (4 seconds)
                return;
            }
        }
        
        // Set slower speeds for better readability
        const speed = isDeleting ? 300 : 400; // Much slower speeds
        setTimeout(typeWriter, speed);
    }
    
    // Start the animation
    typeWriter();
});
