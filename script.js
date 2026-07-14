// ======================================
// LOADER
// ======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }

    }, 2000);

});

// ======================================
// NICKNAME ANIMATION
// ======================================

const names = [
    "Pooji ❤️",
    "Sakhi 🌸",
    "Ayushvi 💖",
    "Madam 😌",
    "Saturn 🪐",
    "Michan 🥹",
    "Bangaram 💛",
    "Iktara ✨"
];

const changingName = document.getElementById("changing-name");

if (changingName) {

    let index = 0;

    setInterval(() => {

        changingName.innerHTML = names[index];

        index++;

        if (index >= names.length) {

            index = 0;

        }

    }, 1800);

}

// ======================================
// MUSIC
// ======================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const beginBtn = document.getElementById("beginBtn");

let playing = false;

function playMusic() {

    if (!music) return;

    music.play();

    playing = true;

    if (musicBtn) {

        musicBtn.innerHTML = "⏸";

    }

}

function pauseMusic() {

    if (!music) return;

    music.pause();

    playing = false;

    if (musicBtn) {

        musicBtn.innerHTML = "🎵";

    }

}

// Begin Journey

if (beginBtn) {

    beginBtn.addEventListener("click", () => {

        playMusic();

        const childhood = document.querySelector(".childhood");

        if (childhood) {

            childhood.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}

// Music Button

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (playing) {

            pauseMusic();

        }

        else {

            playMusic();

        }

    });

}

// ======================================
// SCROLL ANIMATION
// ======================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform = "translateY(80px)";

    section.style.transition = "1s ease";

    observer.observe(section);

});

// ======================================
// HERO TITLE
// ======================================

const heroTitle = document.querySelector(".hero-content h1");

if (heroTitle) {

    heroTitle.animate([

        {

            opacity: 0,

            transform: "translateY(-40px)"

        },

        {

            opacity: 1,

            transform: "translateY(0px)"

        }

    ], {

        duration: 1500,

        fill: "forwards"

    });

}

// ======================================
// IMAGE HOVER
// ======================================

document.querySelectorAll(".gallery img").forEach((img) => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08) rotate(2deg)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1) rotate(0deg)";

    });

});

// ======================================
// MEMORY CARDS
// ======================================

document.querySelectorAll(".memory-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ======================================
// FLOATING HEARTS
// ======================================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 600);

// ======================================
// CONSOLE
// ======================================

console.log("❤️ Happy Birthday Pooji ❤️");