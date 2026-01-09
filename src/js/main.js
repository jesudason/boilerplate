/**
 * Hamburger Menu Toggle Functionality
 * Handles the opening/closing of mobile navigation menu
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger button
    const hamburgerToggle = document.querySelector('.hamburger-toggle');
    
    // Check if hamburger button exists before adding functionality
    if (hamburgerToggle) {
        hamburgerToggle.addEventListener('click', function() {
            // Toggle the active class on the hamburger button
            hamburgerToggle.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = hamburgerToggle.getAttribute('aria-expanded') === 'true';
            hamburgerToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Log for testing purposes
            console.log('Hamburger menu toggled. Active:', hamburgerToggle.classList.contains('active'));
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && hamburgerToggle.classList.contains('active')) {
                hamburgerToggle.classList.remove('active');
                hamburgerToggle.setAttribute('aria-expanded', 'false');
                console.log('Hamburger menu closed via Escape key');
            }
        });
    } else {
        console.log('Hamburger toggle button not found');
    }
});