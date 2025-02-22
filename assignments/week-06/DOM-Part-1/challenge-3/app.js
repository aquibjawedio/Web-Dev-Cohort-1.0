/*
    Write your challenge solution here
*/


function updatePreview (target, item) {
    target.textContent = item.value;
}


// Changing name :
let nameInput = document.getElementById('nameInput');
let nameDisplay = document.getElementById('nameDisplay');
nameInput.addEventListener('input', () => {updatePreview(nameDisplay,nameInput)});

// Changing jo title
let jobInput = document.getElementById('jobInput');
let jobDisplay = document.getElementById('jobDisplay');
jobInput.addEventListener('input', (e) => {updatePreview(jobDisplay,jobInput)});


let ageInput = document.getElementById('ageInput');
let ageDisplay = document.getElementById('ageDisplay');
ageInput.addEventListener('input', (e) => {updatePreview(ageDisplay,ageInput)});



let bioInput = document.getElementById("bioInput");
let bioDisplay = document.getElementById('bioDisplay');
bioInput.addEventListener('input', (e) => {updatePreview(bioDisplay,bioInput)});


