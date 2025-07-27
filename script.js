document.addEventListener('DOMContentLoaded', () => {
    // Select elements for mobile navigation
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    // Function to toggle navigation menu
    const navToggle = () => {
        // Toggle Nav active class
        navLinks.classList.toggle('nav-active');

        // Animate individual nav links
        // Apply animation to each link with a delay
        navLinks.querySelectorAll('li').forEach((link, index) => {
            // If animation is already applied, reset it (for closing menu)
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // Apply fade-in animation with a delay for each link
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Toggle burger icon animation (X transformation)
        burger.classList.toggle('toggle');
    };

    // Event listener for burger icon click
    burger.addEventListener('click', navToggle);

    // Close mobile nav when a link is clicked (for single-page navigation)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Check if the nav menu is active (open)
            if (navLinks.classList.contains('nav-active')) {
                // Remove active class to close the menu
                navLinks.classList.remove('nav-active');
                // Remove burger toggle class to reset icon
                burger.classList.remove('toggle');
                // Reset animation for all nav links immediately
                navLinks.querySelectorAll('li').forEach(item => {
                    item.style.animation = '';
                });
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // Toggle navigation for mobile
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // Smooth scroll for all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Close mobile nav if open
                if (nav && nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    if (burger) {
                        burger.classList.remove('toggle');
                    }
                }

                window.scrollTo({
                    top: targetSection.offsetTop - (document.querySelector('.header')?.offsetHeight || 0), // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active nav link on scroll (optional but good for UX)
    const sections = document.querySelectorAll('section');
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
    // Optional: Smooth scroll for internal links (already handled by CSS scroll-behavior: smooth, but JS fallback can be useful)
    // const scrollLinks = document.querySelectorAll('a[href^="#"]');
    // scrollLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault(); // Prevent default anchor jump
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             window.scrollTo({
    //                 top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });
});
