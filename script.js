
// ELEMENTS
const startBtn = document.getElementById("startBtn");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const giftBtn = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");
const letterBtn = document.getElementById("letterBtn");
const letterContent = document.getElementById("letterContent");
const celebrateBtn = document.getElementById("celebrateBtn");

// TYPING ANIMATION
const typingText = "A little surprise, just for you...";
let charIndex = 0;

function typeText() {
    if (charIndex < typingText.length) {
        document.getElementById("typing").textContent +=
            typingText.charAt(charIndex);

        charIndex++;
        setTimeout(typeText, 75);
    }
}

typeText();

// OPEN MAIN WEBSITE
startBtn.addEventListener("click", () => {

    mainContent.classList.remove("hidden");

    mainContent.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();

});

// MUSIC PLAYER
musicBtn.addEventListener("click", async () => {

    if (music.paused) {

        try {
            await music.play();
            musicBtn.innerHTML = "♫ <span>Pause Music</span>";
        } catch (error) {
            musicBtn.innerHTML = "♫ <span>Try Again</span>";
        }

    } else {

        music.pause();
        musicBtn.innerHTML = "♫ <span>Play Music</span>";

    }

});

// FLOATING PARTICLES
const particles = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("div");

    const symbols = ["♥", "✦", "✨", "♡"];

    particle.className = "particle";

    particle.innerText =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.fontSize =
        (10 + Math.random() * 20) + "px";

    particle.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    particles.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 11000);

}

setInterval(createParticle, 350);

// GIFT OPENING
giftBtn.addEventListener("click", () => {

    giftBtn.style.display = "none";

    giftMessage.classList.remove("hidden");

    createConfetti();

});

// LETTER OPENING
letterBtn.addEventListener("click", () => {

    letterContent.classList.remove("hidden");

    letterBtn.innerText = "Letter Opened ❤️";

    letterBtn.disabled = true;

    letterBtn.style.opacity = "0.6";

    createConfetti();

});

// CONFETTI ANIMATION
function createConfetti() {

    const emojis = ["❤️", "💛", "✨", "🎉", "🌸", "🪔"];

    for (let i = 0; i < 65; i++) {

        const item = document.createElement("div");

        item.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-40px";
        item.style.fontSize = "22px";
        item.style.zIndex = "9999";
        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        const animation = item.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(${window.innerHeight + 80}px) rotate(650deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 2500 + Math.random() * 2000,
                easing: "ease-out"
            }
        );

        animation.onfinish = () => item.remove();

    }

}

// FINAL SURPRISE
celebrateBtn.addEventListener("click", () => {

    createConfetti();

    celebrateBtn.innerText = "Keep Smiling, Assu! ❤️";

});
