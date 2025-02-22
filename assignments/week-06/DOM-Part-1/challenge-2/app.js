/**
 * Write your challenge solution here
 */

const colorButtons = document.querySelectorAll(".color-buttons");
const mainHeading = document.getElementById("mainHeading");

colorButtons.forEach((item) =>
  item.addEventListener('click', (event) => {
    if (event.target.textContent !== 'Reset') {
      mainHeading.style.color = `${event.target.textContent.toLowerCase()}`;
    } else {
      mainHeading.style.color = `black`;
    }
  })
);
