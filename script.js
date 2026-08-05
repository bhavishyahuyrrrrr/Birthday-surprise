// ================================
// LOADER
// ================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.display = "none";

        // Allow normal page behavior
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";

    }, 3000);

});


// ================================
// STARS GENERATOR
// ================================

const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 150; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        const random = Math.random();

        if (random < 0.33) {

            star.classList.add("small");

        } else if (random < 0.66) {

            star.classList.add("medium");

        } else {

            star.classList.add("large");

        }

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        stars.appendChild(star);

    }


    // ================================
    // SHOOTING STAR
    // ================================

    const shootingStar =
        document.createElement("div");

    shootingStar.classList.add("shooting-star");

    stars.appendChild(shootingStar);

}


// ================================
// OPEN SURPRISE
// ================================

const startBtn =
    document.getElementById("startBtn");

const landing =
    document.getElementById("landing");

const cakeSection =
    document.getElementById("cakeSection");


if (startBtn) {

    startBtn.addEventListener("click", () => {

        landing.style.display = "none";

        cakeSection.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ================================
// BLOW CANDLES
// ================================

const blowBtn =
    document.getElementById("blowBtn");

const flames =
    document.querySelectorAll(".flame");

const celebration =
    document.getElementById("celebration");


if (blowBtn) {

    blowBtn.addEventListener("click", () => {

        flames.forEach((flame) => {

            flame.style.display = "none";

        });

        blowBtn.disabled = true;

        setTimeout(() => {

            cakeSection.classList.add("hidden");

            celebration.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 800);

    });

}


// ================================
// CONTINUE BUTTON
// ================================

const continueBtn =
    document.getElementById("continueBtn");

const loveReveal =
    document.getElementById("loveReveal");


if (continueBtn) {

    continueBtn.addEventListener("click", () => {

        continueBtn.style.display = "none";

        loveReveal.classList.remove("hidden");

    });

}


// ================================
// LETTER
// ================================

const letterBtn =
    document.getElementById("letterBtn");

const letterSection =
    document.getElementById("letterSection");


if (letterBtn) {

    letterBtn.addEventListener("click", () => {

        celebration.classList.add("hidden");

        letterSection.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ================================
// GIFT
// ================================

const giftBtn =
    document.getElementById("giftBtn");

const giftSection =
    document.getElementById("giftSection");


if (giftBtn) {

    giftBtn.addEventListener("click", () => {

        letterSection.classList.add("hidden");

        giftSection.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ================================
// OPEN GIFT
// ================================

const openGiftBtn =
    document.getElementById("openGiftBtn");

const gallerySection =
    document.getElementById("gallerySection");


if (openGiftBtn) {

    openGiftBtn.addEventListener("click", () => {

        giftSection.classList.add("hidden");

        gallerySection.classList.remove("hidden");

        gallerySection.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ================================
// FINAL MESSAGE
// ================================

const finalBtn =
    document.getElementById("finalBtn");

const finalSection =
    document.getElementById("finalSection");


if (finalBtn) {

    finalBtn.addEventListener("click", () => {

        gallerySection.classList.add("hidden");

        finalSection.classList.remove("hidden");

        finalSection.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}