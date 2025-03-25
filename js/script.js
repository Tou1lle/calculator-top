//variables for 2 numbers and an operator, a variable for display
let firstNumber;
let secondNumber;
let operator;
let currentValue = "";
let resultFromCalc;

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
  let result = a / b;

  if (result % 1 !== 0) {
    return result.toFixed(4);
  } 

  return result;
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

function setCurrentValue(textNumber) {
  currentValue = textNumber;
}

function setCurrentDisplay(textNumber) {
  currentDisplay.textContent = textNumber;
}

function setPreviousDisplay(textNumber) {
  previousDisplay.textContent = textNumber;
}

function clearCurrentValue() {
  currentValue = "";
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

function increaseCurrentValue(buttonNumber) {
  currentValue += buttonNumber;
}

function decreaseCurrentValueBy1() {
  currentValue = currentValue.slice(0, -1);
}

function clearResult() {
  resultFromCalc = null;
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
      if (!(resultFromCalc === null)) {
        clearResult();
        clearCurrentValue();
        clearCurrentDisplay();
      }
      const number = button.textContent;
      increaseCurrentValue(number);
      setCurrentDisplay(currentValue);
    });
  });
}

showNumbers();

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (operator) {
      if (!currentDisplay.textContent) {
        setOperator(button.textContent)
        setPreviousDisplay(`${firstNumber} ${operator}`);
        return;
      }
      setSecondNumber(currentValue);
      resultFromCalc = operate(firstNumber, operator, secondNumber);
      setFirstNumber(resultFromCalc);
      clearOperator();
      clearSecondN();
      clearCurrentDisplay();
      clearCurrentValue();
      setOperator(button.textContent);
      setPreviousDisplay(`${firstNumber} ${operator}`);
      return;
    }

    setFirstNumber(currentValue);

    if (isNaN(firstNumber)) {
      clearFirstN();
      return;
    };
    setOperator(button.textContent);
    clearCurrentValue();
    clearCurrentDisplay();
    setPreviousDisplay(`${firstNumber} ${operator}`);
  });
});

equalButton.addEventListener("click", () => {
  setSecondNumber(currentValue);
  if (isNaN(firstNumber) || isNaN(secondNumber) || !operator) return;
  resultFromCalc = operate(firstNumber, operator, secondNumber);
  setCurrentValue(resultFromCalc.toString());
  setCurrentDisplay(currentValue);
  clearPreviousDisplay();
  clearFirstN();
  clearSecondN();
  clearOperator();
});

acButton.addEventListener("click", () => {
  clearFirstN();
  clearSecondN();
  clearOperator();
  clearCurrentValue();
  clearCurrentDisplay();
  clearPreviousDisplay();
});

delButton.addEventListener("click", () => {
  decreaseCurrentValueBy1();
  setCurrentDisplay(currentValue);
});