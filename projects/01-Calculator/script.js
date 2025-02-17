// Default output
const operatorSign = ["+", "-", "*", "/"];

let finalResult = 0;
let clickedKey = false;

let allClickedStrings = "";

function renderNewOutput() {
    document.querySelector(".final-output").textContent = finalResult;
}

// Fetching the latest typed segment
const numbers = document.querySelectorAll(".number");
numbers.forEach((item) => {
    item.addEventListener("click", () => {
        if (finalResult == 0 && !clickedKey) {
            allClickedStrings += "+";
        }
        document.querySelector(".current-operation").value += item.textContent;
        allClickedStrings += item.textContent;
        clickedKey = true;
    });
});


//  Fetching operator to get the sign
const operators = document.querySelectorAll(".operator");

operators.forEach((sign) => {
    sign.addEventListener("click", () => {
        document.querySelector(".current-operation").value += sign.value;
        allClickedStrings += sign.value;
        clickedKey = true;
    });
});


// Showing live calculation
function getNewResult(tempSign, tempNumber) {
    tempNumber = parseFloat(tempNumber);

    if (tempSign === "+") {

        return finalResult + tempNumber;

    } else if (tempSign === "-") {

        return finalResult - tempNumber;

    } else if (tempSign === "*") {

        let temp = finalResult * tempNumber;
        return temp % 1 == 0 ? temp : temp.toFixed(2);

    } else if (tempSign === "/") {

        let temp = finalResult / tempNumber;
        return temp % 1 == 0 ? temp : temp.toFixed(2);
    }
}

function calculateOperation() {
    let tempNumber = "";
    let tempSign = allClickedStrings[0];

    let i = 1;

    while (i < allClickedStrings.length) {
        let char = allClickedStrings.charAt(i);

        if (operatorSign.includes(char)) {
            finalResult = getNewResult(tempSign, tempNumber);

            tempNumber = "";
            tempSign = char;
        } else {
            tempNumber += char;
        }

        i++;
    }

    finalResult = getNewResult(tempSign, tempNumber);
}


// Equal to button for calculating final output :
document.querySelector(".equal-to").addEventListener("click", () => {

    // checking if the final string is already empty
    if(!allClickedStrings) return;

    calculateOperation();
    renderNewOutput();
    allClickedStrings = "";
});


//  All clear
const allClear = document.querySelector(".clear");

allClear.addEventListener("click", () => {
    location.reload();
});
