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
    if (operator === '/') return num2 === 0 ? "" : divide(num1,num2);
}

let displayValue = "";
let firstNumber = "";
let chosenOperator = "";
let result = "";

currentOperand.textContent = 0;
previousOperand.textContent= "";

digitsBtns.forEach(digit => {
    digit.addEventListener('click', () => {
        displayValue += digit.value;
        currentOperand.textContent = displayValue
    });
});

decimalBtn.addEventListener('click', () => {
    if (currentOperand.textContent.includes('.')) return
    displayValue += decimalBtn.value;
    currentOperand.textContent = displayValue;
});

operandBtns.forEach(operand => {
    operand.addEventListener('click', () => {
        if (firstNumber && displayValue) {
            displayResult();
        }
        firstNumber = displayValue;
        chosenOperator = operand.value
        previousOperand.textContent = firstNumber + ' ' + chosenOperator
        displayValue = "";
    })
})

clearBtn.addEventListener('click', () => {
    displayValue = "";
    firstNumber = "";
    previousOperand.textContent = "";
    currentOperand.textContent = 0; 
})

deleteBtn.addEventListener('click', () => {
    currentOperand.textContent = currentOperand.textContent.slice(0, -1);
    displayValue = currentOperand.textContent
})

equalsKey.addEventListener('click', displayResult);

function roundNum(num) {
    if (Number.isInteger(num) == false) {
        return Math.round(num * 1000) / 1000
    } else {
        return num
    };
};

function displayResult() {
    if (chosenOperator === '/' && displayValue === '0') {
        alert( "can't divide by 0!!")
    } else if (firstNumber == "" || displayValue == "") {
        return;
    } else {
    result = operate(chosenOperator, parseFloat(firstNumber), parseFloat(displayValue));
    currentOperand.textContent = roundNum(result);
    previousOperand.textContent = firstNumber + ' ' + chosenOperator + ' ' + displayValue
    displayValue = result;
    };
};