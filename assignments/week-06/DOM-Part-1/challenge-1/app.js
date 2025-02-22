/*
    Write your challenge solution here
*/


const toggleButton = document.getElementById('toggleButton');
const body = document.querySelector('body');
const status = document.getElementById('status');

toggleButton.addEventListener('click', () => {
    document.querySelector('.bulb').classList.toggle('off');
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Turn Off';
        status.textContent = 'Status : On';
    } else {
        toggleButton.textContent = 'Turn On'
        status.textContent = 'Status : Off';
    }
})