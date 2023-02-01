const digitsBtns = document.querySelectorAll(".digit");
const operandBtns = document.querySelectorAll(".operator");
const equalsKey = document.querySelector(".equals");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const decimalBtn = document.querySelector(".decimal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

function add (a,b) {
    return a + b;
};

function subtract (a,b) {
    return a - b;
};

function multiply (a,b) {
    return a * b;
};

function divide (a,b) {
    return a / b;
};

function operate (operator, num1, num2) {
    if (operator === '+') return add(num1,num2);
    if (operator === '-') return subtract(num1,num2);
    if (operator === '*') return multiply(num1,num2);
    if (operator === '/') return num2 === 0 ? "Can't divide by 0" : divide(num1,num2);
}

let displayValue = "";
let firstNumber = "";
let chosenOperator = "";
let result = "";

currentOperand.textContent = 0;
previousOperand.textContent= 0;

digitsBtns.forEach(digit => {
    digit.addEventListener('click', () => {
        displayValue += digit.value;
        currentOperand.textContent = displayValue
    });
});

operandBtns.forEach(operand => {
    operand.addEventListener('click', () => {
        firstNumber = displayValue;
        chosenOperator = operand.value
        previousOperand.textContent = firstNumber + chosenOperator
        displayValue = "";
    })
})

equalsKey.addEventListener('click', displayResult);

function displayResult() {
    result = operate(chosenOperator, parseFloat(firstNumber), parseFloat(displayValue));
    currentOperand.textContent = result;
    previousOperand.textContent = firstNumber + chosenOperator + displayValue
    displayValue = result;
}