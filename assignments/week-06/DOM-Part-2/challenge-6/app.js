/**
 Write your challenge solution here
 */

// Digital Clock
const digitalClock = document.querySelector(".digital-clock");

const date = document.querySelector(".date");

function showTimeInClock() {

    let currentDate = new Date();


    // Time Handling
    let hour = currentDate.getHours() % 12 == 0 ? 12 : currentDate.getHours() % 12;
    hour = hour < 10 ? `0${hour}` : hour; 

    let minute = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();

    let second = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
    digitalClock.textContent = `${hour}:${minute}:${second}`;


    // Date Handling
    let month = currentDate.getUTCMonth();
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    date.textContent = `${day} ${monthNames[month]} ${year}`;

    console.log(typeof second);
    
    const hoursRotation = ((Number(hour) % 12) * 30) + (Number(minute) * 0.5);
    const minutesRotation = (Number(minute) * 6) + (Number(second) * 0.1)
    const secondRotation = (Number(second) * 6)

    const secondHand = document.querySelector('.second.hand');
    const minuteHand = document.querySelector('.minute.hand');
    const hourHand = document.querySelector('.hour.hand');
    hourHand.style.transform = `translateX(-50%) rotate(${hoursRotation}deg)`
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesRotation}deg)`
    secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`

}

setInterval(showTimeInClock, 1000);

showTimeInClock();


// Analog clock watch

const analogClock = document.querySelector('.clock');

for(let i = 1; i <= 12; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.style.setProperty("--rotation", `${i * 30}deg`);
    numberDiv.classList.add('number');

    const span = document.createElement('span');
    span.textContent = i;
    numberDiv.appendChild(span);
    analogClock.appendChild(numberDiv);
}