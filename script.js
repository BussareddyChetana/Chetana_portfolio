/* ==============================
   TYPING ANIMATION
================================= */

const typingElement = document.getElementById("typing");

const roles = [
    "AI/ML Developer",
    "GenAI Enthusiast",
    "Python Developer",
    "Full Stack Developer"
];

let roleIndex = 0;
let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}


typeEffect();


/* ==============================
   INTERACTIVE PARTICLES
================================= */

const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");

let particles = [];

let mouse = {
    x: null,
    y: null
};


/* Canvas size */

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


/* Mouse position */

window.addEventListener("mousemove", function(event) {

    mouse.x = event.x;
    mouse.y = event.y;

});


/* Create particles */

function createParticles() {

    particles = [];

    const numberOfParticles = 80;

    for (let i = 0; i < numberOfParticles; i++) {

        particles.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            size: Math.random() * 2 + 1,

            speedX: (Math.random() - 0.5) * 0.5,

            speedY: (Math.random() - 0.5) * 0.5

        });

    }

}

createParticles();


/* Draw particles */

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(function(particle) {

        particle.x += particle.speedX;
        particle.y += particle.speedY;


        /* Screen boundaries */

        if (particle.x < 0 ||
            particle.x > canvas.width) {

            particle.speedX *= -1;

        }


        if (particle.y < 0 ||
            particle.y > canvas.height) {

            particle.speedY *= -1;

        }


        /* Mouse interaction */

        if (mouse.x !== null &&
            mouse.y !== null) {

            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);


            if (distance < 120) {

                particle.x -= dx * 0.01;
                particle.y -= dy * 0.01;

            }

        }


        /* Draw */

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(150, 140, 255, 0.7)";

        ctx.fill();

    });


    requestAnimationFrame(animateParticles);

}

animateParticles();


/* ==============================
   PROJECT FILTER
================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* Remove active state */

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        /* Activate clicked button */

        button.classList.add("active");


        const selectedCategory =
            button.dataset.filter;


        /* Filter projects */

        projectCards.forEach(function(card) {

            const cardCategory =
                card.dataset.category;

            /*
             * Find the Bootstrap column
             * containing this project card
             */

            const projectColumn =
                card.closest(".project-column");


            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.classList.remove("hide");

                if (projectColumn) {

                    projectColumn.classList.remove("hide");

                }

            } else {

                card.classList.add("hide");

                if (projectColumn) {

                    projectColumn.classList.add("hide");

                }

            }

        });

    });

});



/* ==============================
   PROJECT CARD 3D EFFECT
================================= */

projectCards.forEach(function(card) {

    card.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 40;

            const rotateY =
                (centerX - x) / 40;


            card.style.transform =
                `translateY(-10px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform =
                "translateY(0) rotateX(0) rotateY(0)";

        }
    );

});
/* ==============================
   EXPERIENCE SCROLL ANIMATION
================================= */

const timelineItems =
    document.querySelectorAll(".timeline-item");


const experienceObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.2
        }

    );


timelineItems.forEach(function(item) {

    experienceObserver.observe(item);

});
/* =========================================
   SKILL CARD INTERACTIVE 3D EFFECT
========================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach(function(card) {

    card.addEventListener("mousemove", function(event) {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 30;

        const rotateY =
            (centerX - x) / 30;

        card.style.transform =
            `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "translateY(0) rotateX(0deg) rotateY(0deg)";

    });

});
/* =========================================
   EDUCATION CARD INTERACTIVE EFFECT
========================================= */

const educationCards =
    document.querySelectorAll(".education-card");


educationCards.forEach(function(card) {

    card.addEventListener("mousemove", function(event) {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 40;

        const rotateY =
            (centerX - x) / 40;

        card.style.transform =
            `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "translateY(0) rotateX(0deg) rotateY(0deg)";

    });

});
/* =========================================
   CONTACT FORM
========================================= */


const contactForm =document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            /* Get form fields */

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");

            const formSuccess =
                document.getElementById("formSuccess");


            /* Get error elements */

            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const messageError =
                document.getElementById("messageError");


            /* Clear previous errors */

            name.classList.remove("is-invalid");
            email.classList.remove("is-invalid");
            message.classList.remove("is-invalid");

            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";

            formSuccess.classList.add("d-none");


            let isValid = true;


            /* Name validation */

            if (name.value.trim() === "") {

                name.classList.add("is-invalid");

                nameError.textContent =
                    "Please enter your name.";

                isValid = false;

            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email.value.trim() === "") {

                email.classList.add("is-invalid");

                emailError.textContent =
                    "Please enter your email.";

                isValid = false;

            }
            else if (
                !emailPattern.test(email.value.trim())
            ) {

                email.classList.add("is-invalid");

                emailError.textContent =
                    "Please enter a valid email address.";

                isValid = false;

            }


            /* Message validation */

            if (message.value.trim() === "") {

                message.classList.add("is-invalid");

                messageError.textContent =
                    "Please enter your message.";

                isValid = false;

            }


            /* Stop if validation fails */

            if (!isValid) {

                return;

            }


            /* Show success message */

            formSuccess.classList.remove("d-none");


            /* Prepare email */

            const subject =
                encodeURIComponent(
                    "Portfolio Contact from " +
                    name.value.trim()
                );


            const body =
                encodeURIComponent(
                    "Name: " +
                    name.value.trim() +
                    "\nEmail: " +
                    email.value.trim() +
                    "\n\nMessage:\n" +
                    message.value.trim()
                );


            /* Open email client */

            window.location.href =
                "mailto:bussareddychetana@gmail.com" +
                "?subject=" +
                subject +
                "&body=" +
                body;

        }
    );

}

/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function() {

        navLinks.classList.toggle("active");

    });


    const navItems =
        navLinks.querySelectorAll("a");


    navItems.forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

        });

    });

}
/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-card, .about-content, " +
        ".skill-card, .project-card, .experience-card, " +
        ".education-card, .contact-info, .contact-card"
    );


const revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function(element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
/* =========================================
   ACTIVE NAVIGATION ON SCROLL
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();

