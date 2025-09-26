<<<<<<< HEAD
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website functionality
    initWebsite();
});

function initWebsite() {
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add mobile menu toggle functionality
    const menuButton = document.querySelector('.menu');
    const navList = document.querySelector('nav ul');
    if (menuButton && navList) {
        menuButton.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

    // Add scroll-to-top functionality
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            document.body.classList.add('scroll-active');
        } else {
            document.body.classList.remove('scroll-active');
        }
    });
=======
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website functionality
    initWebsite();
});

function initWebsite() {
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add mobile menu toggle functionality
    const menuButton = document.querySelector('.menu');
    const navList = document.querySelector('nav ul');
    if (menuButton && navList) {
        menuButton.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

    // Add scroll-to-top functionality
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            document.body.classList.add('scroll-active');
        } else {
            document.body.classList.remove('scroll-active');
        }
    });
>>>>>>> 4a4adfd (V2)
}