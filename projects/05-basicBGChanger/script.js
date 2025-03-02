const createButton = document.querySelector(".create-button");

createButton.addEventListener("click", updateBGColor);

function updateBGColor() {
    let userInput = document.getElementById("user-input").value;
    userInput = userInput.trim();
    
    if (userInput.charAt(0) == "#") {
        userInput = userInput.slice(1, userInput.length);
    }

    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] > "f") {
            document.getElementById("user-input").value = "";

            return alert("Enter valid input");
        }
    }

    if (
        userInput.length != 3 &&
        userInput.length != 4 &&
        userInput.length != 6
    ) {
        document.getElementById("user-input").value = "";
        return alert("Enter a valid color Code");
    }

    let colorCode = `#${userInput}`;
    let backgroundSection = document.querySelector(".background-section");

    let colorButton = document.createElement("button");
    colorButton.textContent = colorCode;
    colorButton.classList.add("color-button");
    backgroundSection.appendChild(colorButton);

    colorButton.addEventListener("click", () => {
        backgroundSection.style.backgroundColor = colorCode;
    });

    document.getElementById("user-input").value = "";
}

// Random color

const randomButton = document.querySelector(".random-button");

randomButton.addEventListener("click", () => {
    let hexcode = Math.floor(Math.random() * 1000000);
    let backgroundSection = document.querySelector(".background-section");
    backgroundSection.style.backgroundColor = `#${hexcode}`;
});
