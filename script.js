let images = document.querySelectorAll(".image-box img");

let currentImage = 0;


function openLightbox(image) {

    currentImage = Array.from(images).indexOf(image);

    document.getElementById("largeImage").src =
        image.src;

    document.getElementById("lightbox").style.display =
        "flex";
}


function closeLightbox() {

    document.getElementById("lightbox").style.display =
        "none";
}

function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("largeImage").src =
        images[currentImage].src;
}

function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("largeImage").src =
        images[currentImage].src;
}

function filterImages(category) {

    let items = document.querySelectorAll(".image-box");

    items.forEach(function(item) {

        if (category === "all") {

            item.style.display = "block";

        }
        else if (item.classList.contains(category)) {

            item.style.display = "block";

        }
        else {

            item.style.display = "none";

        }

    });

}