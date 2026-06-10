/* ==========================
   AOS ANIMATION
========================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll('.counter');

const startCounter = (counter) => {

    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {

        if (current < target) {

            current += increment;

            counter.innerText = Math.ceil(current);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();
};

counters.forEach(counter => {
    startCounter(counter);
});

/* ==========================
   PROJECT FILTER
========================== */

const filterButtons =
document.querySelectorAll('.filter-buttons button');

const projectCards =
document.querySelectorAll('.project-card');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        filterButtons.forEach(btn => {
            btn.classList.remove('active-filter');
        });

        button.classList.add('active-filter');

        const filter =
        button.getAttribute('data-filter');

        projectCards.forEach(card => {

            if (
                filter === 'all' ||
                card.classList.contains(filter)
            ) {

                card.style.display = 'block';

            } else {

                card.style.display = 'none';

            }

        });

    });

});

/* ==========================
   MOBILE MENU
========================== */

/* ==========================
   MOBILE MENU
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector("#navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("show");
        });

        // optional: close menu when clicking a link
        document.querySelectorAll("#navbar a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("show");
            });
        });

    }

});

/* ==========================
   SCROLL TOP BUTTON
========================== */

const scrollTopBtn =
document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {

    if(window.scrollY > 300){

        scrollTopBtn.style.display = 'block';

    } else {

        scrollTopBtn.style.display = 'none';

    }

});

scrollTopBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

/* ==========================
   PARTICLES JS
========================== */

particlesJS("particles-js", {

    "particles": {

        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },

        "color": {
            "value": "#06b6d4"
        },

        "shape": {
            "type": "circle"
        },

        "opacity": {
            "value": 0.3
        },

        "size": {
            "value": 3
        },

        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#06b6d4",
            "opacity": 0.2,
            "width": 1
        },

        "move": {
            "enable": true,
            "speed": 2
        }

    },

    "interactivity": {

        "detect_on": "canvas",

        "events": {

            "onhover": {
                "enable": true,
                "mode": "repulse"
            },

            "onclick": {
                "enable": true,
                "mode": "push"
            }

        },

        "modes": {

            "repulse": {
                "distance": 100
            },

            "push": {
                "particles_nb": 4
            }

        }

    },

    "retina_detect": true

});

/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
