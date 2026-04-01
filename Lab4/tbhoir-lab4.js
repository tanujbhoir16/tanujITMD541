// Tanuj Pravin Bhoir
// ITMD 541-01 Graduate Student

(function() {
    // 1a. Change the main headline text in the hero section.
    document.querySelector('#hero h1').textContent = "Uplift Your Brand with Stellar Marketing";

    // 1b. Change the line of text below the hero headline (bold and italic on thrive and excel).
    document.querySelector('#hero p').innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.";

    // 1c. Change the image in the background of the hero section.
    document.querySelector("#hero").style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";

    // 1d. Remove the "Get Started" CTA from the hero.
    const ctaButton = document.querySelector("#hero a");
    if (ctaButton) ctaButton.remove();

    // 1e. Change the background color of the nav bar to the same color used in the footer.
    const footerColor = getComputedStyle(document.querySelector("footer")).backgroundColor;
    document.querySelector("header").style.backgroundColor = footerColor;

    // 2a. Change the services section icons color to (#47C714).
    document.querySelectorAll("#services .material-symbols-outlined").forEach(icon => {
        icon.style.color = "#47C714";
    });

    // 2b. Change the digital marketing icon to use 'Ads Click'.
    const digitalIcon = document.querySelector("#services [data-icon='digital']");
    if (digitalIcon) digitalIcon.textContent = "ads_click";

    // 3a. Change the layout of tiles in "Specialized Marketing Solutions" to 4 across at >= 1024px.
    const styleTag = document.createElement("style");
    styleTag.textContent = `
        @media (min-width: 1024px) {
            #solutions [data-section="product_cards"] {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 16px;
            }
        }
    `;
    document.head.appendChild(styleTag);

    // 3b. Change the Musicians image.
    const musicianImage = document.querySelector("#solutions [alt='Musicians']");
    if (musicianImage) musicianImage.src = "https://picsum.photos/id/453/400/300";

    // Graduate Requirement - Prevent form submission to the broken URL and show an alert instead.
    const form = document.querySelector("#contact form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission to broken URL

        const name = document.querySelector("#contact #name").value.trim();
        const email = document.querySelector("#contact #email").value.trim();

        if (name && email) {
            alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
        } else {
            alert("Please provide a name and email.");
        }
    });
})();
