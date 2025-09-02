function toggleSkillDetails(skillItem) {
    // Toggle the expanded class
    skillItem.classList.toggle('expanded');
    
    // Add a smooth animation
    const details = skillItem.querySelector('.skill-details');
    
    if (skillItem.classList.contains('expanded')) {
        // Expanding
        details.style.maxHeight = details.scrollHeight + 'px';
    } else {
        // Collapsing
        details.style.maxHeight = '0px';
    }
    
    // Add a subtle click feedback
    skillItem.style.transform = 'scale(0.98)';
    setTimeout(() => {
        skillItem.style.transform = '';
    }, 150);
}

// Add click indicator on hover
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        // Add cursor pointer
        item.style.cursor = 'pointer';
        
        // Add subtle indication that it's clickable
        const header = item.querySelector('.skill-item-header') || item;
        
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
});
