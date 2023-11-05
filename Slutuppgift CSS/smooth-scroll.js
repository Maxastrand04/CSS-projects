document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substr(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate the target element's position
            const offset = targetElement.getBoundingClientRect().top + window.scrollY;

            // Smoothly scroll to the target
            window.scroll({
            top: offset,
            behavior: 'smooth'
            });
        }
    });
});