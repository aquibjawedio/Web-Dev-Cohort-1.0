// /**
//  * Write your challenge solution here
//  */
// // Image data
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

const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");
let currentIndex = 0;
let autoPlayInterval;

function createCarouselSlides() {
  images.forEach((image, index) => {
    let carouselSlide = document.createElement("div");
    carouselSlide.classList.add("carousel-slide");
    carouselSlide.style.backgroundImage = `url('${image.url}')`;

    carouselTrack.appendChild(carouselSlide);
    createCarouselIndicator(index);
  });
}

function createCarouselIndicator(index) {
  let carouselIndicators = document.createElement('div');
  carouselIndicators.classList.add('carousel-indicator');
  carouselIndicators.setAttribute('id', index);

  carouselNav.appendChild(carouselIndicators);
}


function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  caption.textContent = images[currentIndex].caption;

  document.querySelectorAll('.carousel-indicator').forEach(item => {

    item.addEventListener('click', () => {
      currentIndex = item.id;
      updateCarousel();
    })
    
    item.classList.remove('active');
  })


  document.getElementById(currentIndex).classList.toggle('active');
}


prevButton.addEventListener("click", () => {
  currentIndex == 0 ? currentIndex = images.length - 1 : currentIndex--;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex == images.length - 1 ? currentIndex = 0 : currentIndex++;
  updateCarousel();
});


autoPlayButton.addEventListener("click", () => {
  if (autoPlayInterval) {

      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
      autoPlayButton.textContent = "Start Auto Play";
      timerDisplay.textContent = "";

  } else {

      autoPlayButton.textContent = "Stop Auto Play";
      let countdown = 3;
      timerDisplay.textContent = `Next slide in ${countdown}s`;

      autoPlayInterval = setInterval(() => {
          countdown--;
          timerDisplay.textContent = `Next slide in ${countdown}s`;
          if (countdown === 0) {
              currentIndex = (currentIndex + 1) % images.length;
              updateCarousel();
              countdown = 3;
          }
      }, 1000);

  }
});


createCarouselSlides();
updateCarousel();
