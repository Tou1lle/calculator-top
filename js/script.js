//variables for 2 numbers and an operator, a variable for display
let firstNumber;
let secondNumber;
let operator;
let displayValue = "";

//get the display, buttons
const numberButtons = document.querySelectorAll(".number-button");
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
    } else if (operator === "*") {
        result = multiply(a, b);
    } else if (operator === "/") {
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