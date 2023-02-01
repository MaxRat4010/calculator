const digits = document.querySelectorAll(".digit");
const operand = document.querySelectorAll(".operator");
const equalsKey = document.querySelector(".equals");
const previous = document.querySelector(".previous-operand");
const current = document.querySelector(".current-operand");
const decimal = document.querySelector(".decimal");
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

