/**
    Write your challenge solution here
*/

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((singleItem) => {
    
    singleItem.addEventListener('click', () => {
        closeOpenAccordion();     
        updateVisibility(singleItem);
    });
});


function closeOpenAccordion() {
    accordionItems.forEach((singleItem) => {
        singleItem.classList.remove('active');
    });
}


function updateVisibility(target) {
    target.classList.add('active');
}