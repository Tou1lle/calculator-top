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
const acButton = document.querySelector(".special-button-ac");
const delButton = document.querySelector(".special-button-del");
const modButton = document.querySelector(".special-button-mod");

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

function setFirstNumber(firstN) {
  firstNumber = parseFloat(firstN);
}

function setSecondNumber(secondN) {
  secondNumber = parseFloat(secondN);
}

function setOperator(operatorButton) {
  operator = operatorButton;
}

function setDisplayValue(textNumber) {
  displayValue = textNumber;
}

function setCurrentDisplay(textNumber) {
  currentDisplay.textContent = textNumber;
}

function setPreviousDisplay(textNumber) {
  previousDisplay.textContent = textNumber;
}

function clearDisplayValue() {
  displayValue = "";
}

function clearCurrentDisplay() {
  currentDisplay.textContent = "";
}

function clearPreviousDisplay() {
  previousDisplay.textContent = "";
}

function clearFirstN() {
  firstNumber = null;
}

function clearSecondN() {
  secondNumber = null;
}

function clearOperator() {
  operator = null;
}

function clearNumbers() {
  firstNumber = null;
  secondNumber = null;
}

function increaseDisplayValue(buttonNumber) {
  displayValue += buttonNumber;
}

function decreaseDisplayValueBy1() {
  displayValue = displayValue.slice(0, -1);
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
  } else if (operator === "%") {
    result = a % b;
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
      increaseDisplayValue(number);
      setCurrentDisplay(displayValue);
    });
  });
}

showNumbers();

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    setFirstNumber(displayValue);
    setOperator(button.textContent);
    clearDisplayValue();
    clearCurrentDisplay();
    setPreviousDisplay(`${firstNumber} ${operator}`);
  });
});

equalButton.addEventListener("click", () => {
  setSecondNumber(displayValue);
  if (!firstNumber || !secondNumber) return;
  let result = operate(firstNumber, operator, secondNumber);
  setDisplayValue(result.toString());
  setCurrentDisplay(displayValue);
  clearPreviousDisplay();
  clearOperator();
});

acButton.addEventListener("click", () => {
  clearFirstN();
  clearSecondN();
  clearOperator();
  clearDisplayValue();
  clearCurrentDisplay();
  clearPreviousDisplay();
});

delButton.addEventListener("click", () => {
  decreaseDisplayValueBy1();
  setCurrentDisplay(displayValue);
});