document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImg = document.getElementById("image-lightbox-img");
    const closeButton = document.querySelector(".image-lightbox-close");

    if (!lightbox || !lightboxImg || !closeButton) return;

    document.querySelectorAll(".concert-image-button").forEach((button) => {
        button.addEventListener("click", () => {
            const src = button.dataset.lightboxSrc;
            const alt = button.dataset.lightboxAlt || "";

            lightboxImg.src = src;
            lightboxImg.alt = alt;
            lightbox.classList.add("is-open");
            lightbox.setAttribute("aria-hidden", "false");
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImg.src = "";
        lightboxImg.alt = "";
    };

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
            closeLightbox();
        }
    });
});
