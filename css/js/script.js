// Add interactivity to the website
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navbar Links
    const navbarLinks = document.querySelectorAll('.navbar ul li a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').replace('.html', '');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email address.');
            } else {
                alert('Thank you for your message!');
                form.reset();
            }
        });
    }
});
