// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    // Add loading overlay to body
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
        </div>
    `;
    document.body.appendChild(loadingOverlay);

    // Hide loading overlay when page is fully loaded
    window.addEventListener('load', function() {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    });
});

// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    document.body.appendChild(backToTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
