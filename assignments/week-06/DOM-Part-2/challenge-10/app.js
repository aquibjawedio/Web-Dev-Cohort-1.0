/*
    Write your challenge solution here
*/

// Image data
const images = [
    {
        url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Beautiful Mountain Landscape",
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Ocean Sunset View",
    },
    {
        url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Autumn Forest Path",
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Urban City Skyline",
    },
];

let movesCount = 0;



// seconds = seconds < 10 ? `0${seconds}` : seconds;
// minutes = minutes < 10 ? `0${minutes}` : minutes;

let openedImages = [];

const gameContainer = document.getElementById("gameContainer");

images.forEach((image) => {
    let imageCard = document.createElement("div");
    imageCard.classList.add("card");

    let cardFront = document.createElement("div");
    cardFront.classList.add("card-front");

    let cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.style.backgroundImage = `url(${image.url})`;
    cardBack.style.backgroundPosition = "center";

    imageCard.addEventListener("click", () => {
        if (openedImages.length > 2) {
            openedImages[0].classList.remove("flipped");
            openedImages.shift();
        }
        imageCard.classList.toggle("flipped");
        openedImages.push(imageCard);
        movesCount++;
        document.getElementById("moves").textContent = movesCount;
        document.getElementById("time").textContent = `${minutes}:${seconds}`;
    });

    imageCard.appendChild(cardFront);
    imageCard.appendChild(cardBack);
    gameContainer.appendChild(imageCard);
});

function restartGame() {
    openedImages.forEach((card) => {
        card.classList.remove("flipped");
    });

    openedImages = [];
}
