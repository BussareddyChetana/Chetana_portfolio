/* =========================================
   ABOUT 3D PARTICLE BACKGROUND
========================================= */

const aboutCanvas = document.getElementById("about3D");

if (aboutCanvas) {

    const aboutCtx = aboutCanvas.getContext("2d");

    let aboutParticles = [];
    let aboutWidth = 0;
    let aboutHeight = 0;

    const aboutMouse = {
        x: null,
        y: null
    };


    function resizeAboutCanvas() {

        const rect = aboutCanvas.parentElement.getBoundingClientRect();

        aboutWidth = rect.width;
        aboutHeight = rect.height;

        aboutCanvas.width = aboutWidth;
        aboutCanvas.height = aboutHeight;

        createAboutParticles();
    }


    function createAboutParticles() {

        aboutParticles = [];

        const particleCount =
            Math.min(90, Math.floor(aboutWidth / 14));

        for (let i = 0; i < particleCount; i++) {

            aboutParticles.push({

                x: Math.random() * aboutWidth,

                y: Math.random() * aboutHeight,

                z: Math.random(),

                size: Math.random() * 1.8 + 0.6,

                speedX:
                    (Math.random() - 0.5) * 0.25,

                speedY:
                    (Math.random() - 0.5) * 0.25

            });
        }
    }


    function drawAboutParticles() {

        aboutCtx.clearRect(
            0,
            0,
            aboutWidth,
            aboutHeight
        );


        /* Move particles */

        aboutParticles.forEach(function(particle) {

            particle.x += particle.speedX;
            particle.y += particle.speedY;


            /* Wrap around screen */

            if (particle.x < 0) {
                particle.x = aboutWidth;
            }

            if (particle.x > aboutWidth) {
                particle.x = 0;
            }

            if (particle.y < 0) {
                particle.y = aboutHeight;
            }

            if (particle.y > aboutHeight) {
                particle.y = 0;
            }


            /* Mouse interaction */

            if (
                aboutMouse.x !== null &&
                aboutMouse.y !== null
            ) {

                const dx =
                    particle.x - aboutMouse.x;

                const dy =
                    particle.y - aboutMouse.y;

                const distance =
                    Math.sqrt(dx * dx + dy * dy);

                if (distance < 160) {

                    particle.x +=
                        dx / distance * 0.25;

                    particle.y +=
                        dy / distance * 0.25;

                }
            }

        });


        /* Draw connections */

        for (
            let i = 0;
            i < aboutParticles.length;
            i++
        ) {

            for (
                let j = i + 1;
                j < aboutParticles.length;
                j++
            ) {

                const p1 = aboutParticles[i];
                const p2 = aboutParticles[j];

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;

                const distance =
                    Math.sqrt(dx * dx + dy * dy);

                if (distance < 110) {

                    const opacity =
                        (1 - distance / 110) * 0.18;

                    aboutCtx.beginPath();

                    aboutCtx.moveTo(
                        p1.x,
                        p1.y
                    );

                    aboutCtx.lineTo(
                        p2.x,
                        p2.y
                    );

                    aboutCtx.strokeStyle =
                        `rgba(139, 124, 255, ${opacity})`;

                    aboutCtx.lineWidth = 0.6;

                    aboutCtx.stroke();
                }
            }
        }


        /* Draw particles */

        aboutParticles.forEach(function(particle) {

            const depth =
                0.5 + particle.z;

            const size =
                particle.size * depth;

            const opacity =
                0.25 + particle.z * 0.55;

            aboutCtx.beginPath();

            aboutCtx.arc(
                particle.x,
                particle.y,
                size,
                0,
                Math.PI * 2
            );

            aboutCtx.fillStyle =
                `rgba(139, 124, 255, ${opacity})`;

            aboutCtx.fill();

        });


        requestAnimationFrame(
            drawAboutParticles
        );
    }


    /* Mouse movement */

    const aboutSection =
        aboutCanvas.parentElement;

    aboutSection.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                aboutSection.getBoundingClientRect();

            aboutMouse.x =
                event.clientX - rect.left;

            aboutMouse.y =
                event.clientY - rect.top;

        }
    );


    aboutSection.addEventListener(
        "mouseleave",
        function() {

            aboutMouse.x = null;
            aboutMouse.y = null;

        }
    );


    window.addEventListener(
        "resize",
        resizeAboutCanvas
    );


    resizeAboutCanvas();

    drawAboutParticles();

}

/* =========================================
   SKILLS — 3D DIGITAL NETWORK
========================================= */

const skillsCanvas = document.getElementById("skills3D");

if (skillsCanvas) {

    const skillsCtx = skillsCanvas.getContext("2d");

    let skillsParticles = [];
    let skillsWidth = 0;
    let skillsHeight = 0;

    const skillsMouse = {
        x: null,
        y: null
    };


    function resizeSkillsCanvas() {

        const section =
            skillsCanvas.parentElement;

        skillsWidth = section.offsetWidth;
        skillsHeight = section.offsetHeight;

        skillsCanvas.width = skillsWidth;
        skillsCanvas.height = skillsHeight;

        createSkillsParticles();
    }


    function createSkillsParticles() {

        skillsParticles = [];

        const count = Math.min(
            75,
            Math.floor(skillsWidth / 18)
        );

        for (let i = 0; i < count; i++) {

            skillsParticles.push({

                x: Math.random() * skillsWidth,

                y: Math.random() * skillsHeight,

                depth: Math.random(),

                size:
                    Math.random() * 2 + 0.5,

                speedX:
                    (Math.random() - 0.5) * 0.18,

                speedY:
                    (Math.random() - 0.5) * 0.18

            });

        }
    }


    function animateSkills() {

        skillsCtx.clearRect(
            0,
            0,
            skillsWidth,
            skillsHeight
        );


        /* Move particles */

        skillsParticles.forEach(function(particle) {

            particle.x += particle.speedX;
            particle.y += particle.speedY;


            if (particle.x < 0) {
                particle.x = skillsWidth;
            }

            if (particle.x > skillsWidth) {
                particle.x = 0;
            }

            if (particle.y < 0) {
                particle.y = skillsHeight;
            }

            if (particle.y > skillsHeight) {
                particle.y = 0;
            }

        });


        /* Draw network connections */

        for (
            let i = 0;
            i < skillsParticles.length;
            i++
        ) {

            for (
                let j = i + 1;
                j < skillsParticles.length;
                j++
            ) {

                const first =
                    skillsParticles[i];

                const second =
                    skillsParticles[j];

                const dx =
                    first.x - second.x;

                const dy =
                    first.y - second.y;

                const distance =
                    Math.sqrt(dx * dx + dy * dy);

                if (distance < 140) {

                    const opacity =
                        (1 - distance / 140) * 0.14;

                    skillsCtx.beginPath();

                    skillsCtx.moveTo(
                        first.x,
                        first.y
                    );

                    skillsCtx.lineTo(
                        second.x,
                        second.y
                    );

                    skillsCtx.strokeStyle =
                        `rgba(79, 172, 254, ${opacity})`;

                    skillsCtx.lineWidth = 0.7;

                    skillsCtx.stroke();
                }

            }

        }


        /* Draw particles */

        skillsParticles.forEach(function(particle) {

            const depth =
                0.45 + particle.depth;

            const size =
                particle.size * depth;

            const opacity =
                0.18 + particle.depth * 0.5;

            skillsCtx.beginPath();

            skillsCtx.arc(
                particle.x,
                particle.y,
                size,
                0,
                Math.PI * 2
            );

            skillsCtx.fillStyle =
                `rgba(79, 172, 254, ${opacity})`;

            skillsCtx.fill();

        });


        requestAnimationFrame(
            animateSkills
        );
    }


    /* Mouse interaction */

    const skillsSection =
        skillsCanvas.parentElement;


    skillsSection.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                skillsSection.getBoundingClientRect();

            skillsMouse.x =
                event.clientX - rect.left;

            skillsMouse.y =
                event.clientY - rect.top;

        }
    );


    skillsSection.addEventListener(
        "mouseleave",
        function() {

            skillsMouse.x = null;
            skillsMouse.y = null;

        }
    );


    window.addEventListener(
        "resize",
        resizeSkillsCanvas
    );


    resizeSkillsCanvas();

    animateSkills();

}

/* =========================================
   PROJECTS — 3D DEPTH PARTICLES
========================================= */

const projectsCanvas =
    document.getElementById("projects3D");

if (projectsCanvas) {

    const projectsCtx =
        projectsCanvas.getContext("2d");

    let projectWidth = 0;
    let projectHeight = 0;

    const projectParticles = [];

    const projectMouse = {
        x: 0,
        y: 0
    };

    const particleCount = 110;

    function resizeProjectsCanvas() {

        const section =
            projectsCanvas.parentElement;

        projectWidth = section.offsetWidth;
        projectHeight = section.offsetHeight;

        projectsCanvas.width = projectWidth;
        projectsCanvas.height = projectHeight;

        projectParticles.length = 0;

        for (let i = 0; i < particleCount; i++) {

            projectParticles.push({
                x: Math.random() * projectWidth,
                y: Math.random() * projectHeight,
                z: Math.random(),
                speed: 0.15 + Math.random() * 0.45,
                size: 0.6 + Math.random() * 1.5
            });

        }
    }


    function drawProjectsParticles() {

        projectsCtx.clearRect(
            0,
            0,
            projectWidth,
            projectHeight
        );


        projectParticles.forEach(function(particle) {

            /*
                Move particle forward.
                Smaller z = farther away.
                Larger z = closer.
            */

            particle.z += particle.speed * 0.0025;


            if (particle.z > 1) {

                particle.z = 0;

                particle.x =
                    Math.random() * projectWidth;

                particle.y =
                    Math.random() * projectHeight;
            }


            /*
                Mouse parallax
            */

            const mouseOffsetX =
                (projectMouse.x - projectWidth / 2)
                * particle.z
                * 0.015;

            const mouseOffsetY =
                (projectMouse.y - projectHeight / 2)
                * particle.z
                * 0.015;


            const x =
                particle.x + mouseOffsetX;

            const y =
                particle.y + mouseOffsetY;


            /*
                Depth scaling
            */

            const size =
                particle.size *
                (0.5 + particle.z * 2);


            const opacity =
                0.15 +
                particle.z * 0.65;


            /*
                Draw particle
            */

            projectsCtx.beginPath();

            projectsCtx.arc(
                x,
                y,
                size,
                0,
                Math.PI * 2
            );

            projectsCtx.fillStyle =
                `rgba(139, 124, 255, ${opacity})`;

            projectsCtx.fill();

        });


        /*
            Subtle connections between
            particles that are close together
        */

        for (
            let i = 0;
            i < projectParticles.length;
            i++
        ) {

            for (
                let j = i + 1;
                j < projectParticles.length;
                j++
            ) {

                const first =
                    projectParticles[i];

                const second =
                    projectParticles[j];


                const firstX =
                    first.x +
                    (projectMouse.x - projectWidth / 2)
                    * first.z *
                    0.015;

                const firstY =
                    first.y +
                    (projectMouse.y - projectHeight / 2)
                    * first.z *
                    0.015;


                const secondX =
                    second.x +
                    (projectMouse.x - projectWidth / 2)
                    * second.z *
                    0.015;

                const secondY =
                    second.y +
                    (projectMouse.y - projectHeight / 2)
                    * second.z *
                    0.015;


                const dx =
                    firstX - secondX;

                const dy =
                    firstY - secondY;


                const distance =
                    Math.sqrt(
                        dx * dx + dy * dy
                    );


                if (
                    distance < 95 &&
                    Math.abs(first.z - second.z) < 0.25
                ) {

                    const opacity =
                        (1 - distance / 95) *
                        0.12 *
                        Math.min(first.z, second.z);


                    projectsCtx.beginPath();

                    projectsCtx.moveTo(
                        firstX,
                        firstY
                    );

                    projectsCtx.lineTo(
                        secondX,
                        secondY
                    );

                    projectsCtx.strokeStyle =
                        `rgba(139, 124, 255, ${opacity})`;

                    projectsCtx.lineWidth = 0.5;

                    projectsCtx.stroke();
                }

            }

        }


        requestAnimationFrame(
            drawProjectsParticles
        );
    }


    /*
        Mouse movement
    */

    projectsCanvas.parentElement.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                projectsCanvas.parentElement
                    .getBoundingClientRect();

            projectMouse.x =
                event.clientX - rect.left;

            projectMouse.y =
                event.clientY - rect.top;
        }
    );


    projectsCanvas.parentElement.addEventListener(
        "mouseleave",
        function() {

            projectMouse.x =
                projectWidth / 2;

            projectMouse.y =
                projectHeight / 2;
        }
    );


    window.addEventListener(
        "resize",
        resizeProjectsCanvas
    );


    resizeProjectsCanvas();

    projectMouse.x =
        projectWidth / 2;

    projectMouse.y =
        projectHeight / 2;

    drawProjectsParticles();
}

/* =========================================
   EXPERIENCE — FLOWING ENERGY
========================================= */

const experienceCanvas =
    document.getElementById("experience3D");

if (experienceCanvas) {

    const experienceCtx =
        experienceCanvas.getContext("2d");

    let experienceWidth = 0;
    let experienceHeight = 0;

    const experienceParticles = [];

    function resizeExperienceCanvas() {

        const section =
            experienceCanvas.parentElement;

        experienceWidth =
            section.offsetWidth;

        experienceHeight =
            section.offsetHeight;

        experienceCanvas.width =
            experienceWidth;

        experienceCanvas.height =
            experienceHeight;

        createExperienceParticles();
    }


    function createExperienceParticles() {

        experienceParticles.length = 0;

        for (let i = 0; i < 55; i++) {

            experienceParticles.push({

                x:
                    Math.random() *
                    experienceWidth,

                y:
                    Math.random() *
                    experienceHeight,

                speed:
                    0.3 +
                    Math.random() * 0.7,

                size:
                    0.6 +
                    Math.random() * 1.2,

                opacity:
                    0.2 +
                    Math.random() * 0.5

            });

        }
    }


    function animateExperience() {

        experienceCtx.clearRect(
            0,
            0,
            experienceWidth,
            experienceHeight
        );


        /*
            Soft vertical energy paths
        */

        for (let i = 0; i < 7; i++) {

            const x =
                experienceWidth *
                (0.08 + i * 0.14);

            const gradient =
                experienceCtx.createLinearGradient(
                    x,
                    0,
                    x,
                    experienceHeight
                );

            gradient.addColorStop(
                0,
                "rgba(139, 124, 255, 0)"
            );

            gradient.addColorStop(
                0.5,
                "rgba(139, 124, 255, 0.08)"
            );

            gradient.addColorStop(
                1,
                "rgba(139, 124, 255, 0)"
            );

            experienceCtx.strokeStyle =
                gradient;

            experienceCtx.lineWidth = 1;

            experienceCtx.beginPath();

            experienceCtx.moveTo(
                x,
                0
            );

            experienceCtx.lineTo(
                x,
                experienceHeight
            );

            experienceCtx.stroke();
        }


        /*
            Move and draw particles
        */

        experienceParticles.forEach(
            function(particle) {

                particle.y += particle.speed;

                if (
                    particle.y >
                    experienceHeight + 10
                ) {

                    particle.y = -10;

                    particle.x =
                        Math.random() *
                        experienceWidth;
                }


                experienceCtx.beginPath();

                experienceCtx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                experienceCtx.fillStyle =
                    `rgba(139, 124, 255, ${particle.opacity})`;

                experienceCtx.fill();


                /*
                    Particle trail
                */

                const trail =
                    experienceCtx.createLinearGradient(
                        particle.x,
                        particle.y - 35,
                        particle.x,
                        particle.y
                    );

                trail.addColorStop(
                    0,
                    "rgba(139, 124, 255, 0)"
                );

                trail.addColorStop(
                    1,
                    `rgba(139, 124, 255, ${particle.opacity * 0.5})`
                );

                experienceCtx.strokeStyle =
                    trail;

                experienceCtx.lineWidth = 1;

                experienceCtx.beginPath();

                experienceCtx.moveTo(
                    particle.x,
                    particle.y - 35
                );

                experienceCtx.lineTo(
                    particle.x,
                    particle.y
                );

                experienceCtx.stroke();

            }
        );


        requestAnimationFrame(
            animateExperience
        );
    }


    window.addEventListener(
        "resize",
        resizeExperienceCanvas
    );

    resizeExperienceCanvas();

    animateExperience();
}

/* =========================================
   EDUCATION — 3D DEPTH FIELD
========================================= */

const educationCanvas =
    document.getElementById("education3D");

if (educationCanvas) {

    const educationCtx =
        educationCanvas.getContext("2d");

    let educationWidth = 0;
    let educationHeight = 0;

    const educationParticles = [];

    function resizeEducationCanvas() {

        const section =
            educationCanvas.parentElement;

        educationWidth =
            section.offsetWidth;

        educationHeight =
            section.offsetHeight;

        educationCanvas.width =
            educationWidth;

        educationCanvas.height =
            educationHeight;

        createEducationParticles();
    }


    function createEducationParticles() {

        educationParticles.length = 0;

        const count =
            Math.min(
                100,
                Math.floor(educationWidth / 12)
            );

        for (let i = 0; i < count; i++) {

            educationParticles.push({

                x:
                    Math.random() *
                    educationWidth,

                y:
                    Math.random() *
                    educationHeight,

                depth:
                    Math.random(),

                speedX:
                    (Math.random() - 0.5) * 0.15,

                speedY:
                    (Math.random() - 0.5) * 0.12,

                size:
                    0.4 +
                    Math.random() * 1.3

            });
        }
    }


    function animateEducation() {

        educationCtx.clearRect(
            0,
            0,
            educationWidth,
            educationHeight
        );


        educationParticles.forEach(
            function(particle) {

                particle.x +=
                    particle.speedX;

                particle.y +=
                    particle.speedY;


                if (particle.x < 0) {
                    particle.x =
                        educationWidth;
                }

                if (
                    particle.x >
                    educationWidth
                ) {
                    particle.x = 0;
                }


                if (particle.y < 0) {
                    particle.y =
                        educationHeight;
                }

                if (
                    particle.y >
                    educationHeight
                ) {
                    particle.y = 0;
                }


                const size =
                    particle.size *
                    (0.5 +
                    particle.depth);


                const opacity =
                    0.15 +
                    particle.depth * 0.55;


                educationCtx.beginPath();

                educationCtx.arc(
                    particle.x,
                    particle.y,
                    size,
                    0,
                    Math.PI * 2
                );

                educationCtx.fillStyle =
                    `rgba(139, 124, 255, ${opacity})`;

                educationCtx.fill();

            }
        );


        requestAnimationFrame(
            animateEducation
        );
    }


    window.addEventListener(
        "resize",
        resizeEducationCanvas
    );


    resizeEducationCanvas();

    animateEducation();
}
/* =========================================
   CONTACT — DIGITAL SIGNALS
========================================= */

const contactCanvas =
    document.getElementById("contact3D");

if (contactCanvas) {

    const contactCtx =
        contactCanvas.getContext("2d");

    let contactWidth = 0;
    let contactHeight = 0;

    const contactParticles = [];

    const contactMouse = {
        x: 0,
        y: 0
    };


    function resizeContactCanvas() {

        const section =
            contactCanvas.parentElement;

        contactWidth =
            section.offsetWidth;

        contactHeight =
            section.offsetHeight;

        contactCanvas.width =
            contactWidth;

        contactCanvas.height =
            contactHeight;

        createContactParticles();
    }


    function createContactParticles() {

        contactParticles.length = 0;

        for (let i = 0; i < 65; i++) {

            contactParticles.push({

                x:
                    Math.random() *
                    contactWidth,

                y:
                    Math.random() *
                    contactHeight,

                size:
                    0.5 +
                    Math.random() * 1.4,

                speed:
                    0.2 +
                    Math.random() * 0.5,

                opacity:
                    0.15 +
                    Math.random() * 0.5

            });
        }
    }


    function animateContact() {

        contactCtx.clearRect(
            0,
            0,
            contactWidth,
            contactHeight
        );


        contactParticles.forEach(
            function(particle) {

                particle.x += particle.speed;

                if (
                    particle.x >
                    contactWidth + 10
                ) {
                    particle.x = -10;

                    particle.y =
                        Math.random() *
                        contactHeight;
                }


                const dx =
                    particle.x -
                    contactMouse.x;

                const dy =
                    particle.y -
                    contactMouse.y;

                const distance =
                    Math.sqrt(
                        dx * dx + dy * dy
                    );


                let offsetX = 0;
                let offsetY = 0;


                if (distance < 180) {

                    offsetX =
                        dx *
                        0.015;

                    offsetY =
                        dy *
                        0.015;
                }


                contactCtx.beginPath();

                contactCtx.arc(
                    particle.x + offsetX,
                    particle.y + offsetY,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                contactCtx.fillStyle =
                    `rgba(139, 124, 255, ${particle.opacity})`;

                contactCtx.fill();

            }
        );


        /*
            Connect nearby particles
        */

        for (
            let i = 0;
            i < contactParticles.length;
            i++
        ) {

            for (
                let j = i + 1;
                j < contactParticles.length;
                j++
            ) {

                const first =
                    contactParticles[i];

                const second =
                    contactParticles[j];

                const dx =
                    first.x - second.x;

                const dy =
                    first.y - second.y;

                const distance =
                    Math.sqrt(
                        dx * dx + dy * dy
                    );


                if (distance < 100) {

                    const opacity =
                        (1 - distance / 100) *
                        0.10;

                    contactCtx.beginPath();

                    contactCtx.moveTo(
                        first.x,
                        first.y
                    );

                    contactCtx.lineTo(
                        second.x,
                        second.y
                    );

                    contactCtx.strokeStyle =
                        `rgba(139, 124, 255, ${opacity})`;

                    contactCtx.lineWidth = 0.5;

                    contactCtx.stroke();
                }
            }
        }


        requestAnimationFrame(
            animateContact
        );
    }


    contactCanvas.parentElement.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                contactCanvas.parentElement
                    .getBoundingClientRect();

            contactMouse.x =
                event.clientX - rect.left;

            contactMouse.y =
                event.clientY - rect.top;
        }
    );


    contactCanvas.parentElement.addEventListener(
        "mouseleave",
        function() {

            contactMouse.x =
                contactWidth / 2;

            contactMouse.y =
                contactHeight / 2;
        }
    );


    window.addEventListener(
        "resize",
        resizeContactCanvas
    );


    resizeContactCanvas();

    contactMouse.x =
        contactWidth / 2;

    contactMouse.y =
        contactHeight / 2;

    animateContact();
}