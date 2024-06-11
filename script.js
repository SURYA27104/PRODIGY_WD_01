window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    }
});

const navLinks = document.querySelectorAll('#navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'rgba(255, 215, 0, 0.8)';
        link.style.color = 'black';
        link.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
        link.style.color = 'white';
    });
});