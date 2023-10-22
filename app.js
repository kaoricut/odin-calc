const calcDisplay = document.querySelector(".js-display");
const numberButtons = document.querySelectorAll(".js-number");
const operatorButtons = document.querySelectorAll(".js-operator");
const equalButton = document.querySelector(".js-equal");

let displayValue;
let firstOperand;
let secondOperand;
let operator;

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    populateDisplay(button.dataset.value);
  });
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    storeOperator(button.dataset.value);
    storeFirstOperand();
    nullifyDisplayValue();
  });
});

equalButton.addEventListener("click", () => {
  storeSecondOperand();
  nullifyDisplayValue();
  populateDisplay(operate(firstOperand, secondOperand, operator));
});

function populateDisplay(value) {
  if (!displayValue) {
    calcDisplay.textContent = "";
  }
  calcDisplay.textContent += value;
  storeDisplayValue();
}

function storeDisplayValue() {
  displayValue = +calcDisplay.textContent;
}

function nullifyDisplayValue() {
  displayValue = null;
}

function storeFirstOperand() {
  firstOperand = displayValue;
}

function storeSecondOperand() {
  secondOperand = displayValue;
}

function storeOperator(value) {
  operator = value;
}

function operate(a, b, operator) {
  let result;

  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
  }

  return result;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}