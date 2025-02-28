/**
     Write your challenge solution here
*/


const togglePanel = document.querySelector('.toggle-btn');

togglePanel.addEventListener('click', updatePanelVisibility);
document.querySelector('.close-btn').addEventListener('click', updatePanelVisibility);

function updatePanelVisibility() {
    const panelSection = document.querySelector('.panel');
    panelSection.classList.toggle('active');
}

document.querySelector('.content').addEventListener('mouseup', () => {
    const panelSection = document.querySelector('.panel');
    if(panelSection.classList.contains('active')) {
        panelSection.classList.remove('active');
    }
});


const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(item.textContent);
    })
})
