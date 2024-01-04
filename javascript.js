// Constants
const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
const EQUAL = '=';

// Basic operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

function operate(a, b, op) {
    if(op == PLUS) { return add(a, b); }
    if(op == MINUS) { return subtract(a, b); }
    if(op == MULTIPLY) { return multiply(a, b); }
    if(op == DIVIDE) { return divide(a, b); }
}

// Display 
let displayUi = document.querySelector("#display-text");

let num1 = '0';
let num2 = '0';
let operation;
let result;

let numbersUi = document.querySelectorAll(".numbers");
let operationsUi = document.querySelectorAll(".operations");


operationsUi.forEach(operation => {
    operation.addEventListener("click", (e) => {
        changeOperation(e.target);
    });
});

numbersUi.forEach(number => {
    number.addEventListener("click", (e) => {
        addDigit(e.target);
        console.log("num1: " + num1);
        console.log("num2: " + num2);
    });
});


function addDigit(number) {
    // If operation is null then num1 wasn't chosen yet 
    if(operation == null) {
        // Display max digits is 10
        if(num1.length >= 10) {
            return;
        }
        // Number can only have one decimal point
        if(number.textContent == '.' && num1.includes('.')) {
            return; 
        }
        // Adds digit to the end of string
        if(num1 == "0") {
            num1 = number.textContent;
        }
        else {
            num1 += number.textContent;
        }
    
    }
    else {
        // Display max digits is 10
        if(num2.length >= 10) {
            return;
        }
        // Number can only have one decimal point
        if(number.textContent == '.' && num1.includes('.')) {
            return; 
        }
        // Adds digit to the end of string
        if(num2 == 0) {
            num2 = number.textContent;
        }
        else {
            num2 += number.textContent;
        }
    }
}

function changeOperation(button) {
    if(operation == null) {
        operation = button.textContent;
        console.log(operation);
    }
    else {
        performOperation(button.textContent);
    }

}

function performOperation(nextOperation) {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);

    displayUi.textContent = add(n1, n2);
    num1 = add(n1, n2);
    num2 = '0';

    if(nextOperation != EQUAL) {
        operation = nextOperation;
        console.log("Operation: " + operation);
    }
}
