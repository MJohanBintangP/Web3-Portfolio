document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.box2 nav a');
    const sections = document.querySelectorAll('.content-section');
    const seeMyProjectButton = document.querySelector('.hover-a4 a');

    function navigateToSection(targetId) {
        sections.forEach(section => {
            if (section.getAttribute('id') === targetId) {
                section.classList.remove('hidden');
                setTimeout(() => {
                    section.classList.add('active');
                }, 10);
            } else {
                section.classList.remove('active');
                setTimeout(() => {
                    section.classList.add('hidden');
                }, 500);
            }
        });

        navLinks.forEach(link => link.classList.remove('active'));

        const targetNavLink = document.querySelector(`.box2 nav a[data-target="${targetId}"]`);
        if (targetNavLink) {
            targetNavLink.classList.add('active');
        }
    }

    navigateToSection('about');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            navigateToSection(targetId);
        });
    });

    seeMyProjectButton.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToSection('portfolio');
    });
});