//variables for 2 numbers and an operator, a variable for display
let firstNumber;
let secondNumber;
let operator;
let displayValue = "";

//get the display, buttons
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector(".operator-button-equal");
let currentDisplay = document.querySelector(".current");
let previousDisplay = document.querySelector(".previous");

// Functions for add, substract, multiply, divide
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b).toFixed(4);
}

// a function the creates an operation
function operate(a, operator, b) {
    let result = 0;

    if (operator === "+") {
        result = add(a, b);
    } else if (operator === "-") {
        result = substract(a, b);
    } else if (operator === "x") {
        result = multiply(a, b);
    } else if (operator === "÷") {
        if (b === 0) {
            return "ERROR: Division 0!";
        }
        result = divide(a, b);
    } else {
        return "ERROR";
    }

    return result;
}

//when clicking on buttons, display them
function showNumbers() {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            const number = button.textContent;
            displayValue += number;
            currentDisplay.textContent = displayValue;
        });
    });
}

showNumbers();

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") return;
        firstNumber = parseFloat(displayValue);
        operator = button.textContent;
        displayValue = "";
        previousDisplay.textContent = firstNumber + `${operator}`;
    });
});

equalButton.addEventListener("click", () => {
    secondNumber = parseFloat(displayValue);
    let result = operate(firstNumber, operator, secondNumber);
    displayValue = result.toString();
    currentDisplay.textContent = displayValue;
    previousDisplay.textContent = "";
});