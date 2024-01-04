// Constants
const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const DIVIDE = '/';

let operation;
let num1;
let num2;

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

