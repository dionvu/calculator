// Constants
const PLUS = "+";
const MINUS = "-";
const MULTIPLY = "*";
const DIVIDE = "/";
const EQUAL = "=";

// Basic operations
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

function operate(a, b, op) {
  if (op == PLUS) {
    return add(a, b);
  }
  if (op == MINUS) {
    return subtract(a, b);
  }
  if (op == MULTIPLY) {
    return multiply(a, b);
  }
  if (op == DIVIDE) {
    return divide(a, b);
  }
}

// Display
let displayUi = document.querySelector("#display-text");

let num1 = "0";
let num2 = "0";
let operation;
let calculation;

let numbersUi = document.querySelectorAll(".numbers");
let operationsUi = document.querySelectorAll(".operations");
let acUi = document.querySelector("#AC");
let signUi = document.querySelector("#sign");
let percentUi = document.querySelector("#percent");

operationsUi.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    changeOperation(e.target);
  });
});

numbersUi.forEach((number) => {
  number.addEventListener("click", (e) => {
    addDigit(e.target);
    console.log("num1: " + num1);
    console.log("num2: " + num2);
    console.log("calc: " + calculation);
  });
});

acUi.addEventListener("click", () => {
  num1 = "0";
  num2 = "0";
  operation = null;
  result = null;
  displayUi.textContent = "0";
  console.log("Everything cleared");
});

signUi.addEventListener("click", () => {
  // Sign Switching for the result of calculation
  if (displayUi.textContent == calculation) {
    calculation = calculation * -1;
    console.log("sign switched");
    displayUi.textContent = calculation;
  }
  // Sign switching for num1
  if (displayUi.textContent == num1 || displayUi.textContent == "-" + num1) {
    if (displayUi.textContent.substring(0, 1) != "-") {
      num1 = "-" + num1;
      console.log("sign switched");
      displayUi.textContent = num1;
    } else {
      num1 = num1.substring(1);
      console.log("sign switched");
      displayUi.textContent = num1;
    }
  }
  // Sign switching for num2
  if (displayUi.textContent == num2 || displayUi.textContent == "-" + num2) {
    if (displayUi.textContent.substring(0, 1) != "-") {
      num2 = "-" + num2;
      console.log("sign switched");
      displayUi.textContent = num2;
    } else {
      num2 = num2.substring(1);
      console.log("sign switched");
      displayUi.textContent = num2;
    }
  }
});

percentUi.addEventListener("click", () => {
  console.log("10");
  if (displayContent() == num1) {
    num1 = (parseFloat(num1) / 100).toString();
    num1 = checkOverFlow(num1);
    displayUi.textContent = num1;
  } else if (displayContent() == num2) {
    num2 = (parseFloat(num2) / 100).toString();
    num2 = checkOverFlow(num2);
    displayUi.textContent = num2;
  } else if (displayContent() == calculation) {
    calculation = (parseFloat(calculation) / 100).toString();
    calculation = checkOverFlow(calculation);
    displayUi.textContent = calculation;
  } else;
});

function addDigit(number) {
  // If operation is null then num1 wasn't chosen yet
  if (operation == null) {
    // Display max digits is 10
    if (num1.length >= 10) {
      return;
    }
    // Number can only have one decimal point
    if (number.textContent == "." && num1.includes(".")) {
      return;
    }
    // Adds digit to the end of string
    if (num1 == "0") {
      num1 = number.textContent;
    } else {
      num1 += number.textContent;
    }
    displayUi.textContent = num1;
  } else {
    // Display max digits is 10
    if (num2.length >= 10) {
      return;
    }
    // Number can only have one decimal point
    if (number.textContent == "." && num2.includes(".")) {
      return;
    }
    // Adds digit to the end of string
    if (num2 == 0) {
      num2 = number.textContent;
    } else {
      num2 += number.textContent;
    }
    displayUi.textContent = num2;
  }
}

function changeOperation(button) {
  if (operation == null) {
    operation = button.textContent;
    console.log(operation);
  } else {
    performOperation(button.textContent);
  }
}

function performOperation(nextOperation) {
  let n1 = parseFloat(num1);
  let n2 = parseFloat(num2);
  let result;

  if (operation == PLUS) {
    result = add(n1, n2);
  } else if (operation == MINUS) {
    result = subtract(n1, n2);
  } else if (operation == MULTIPLY) {
    result = multiply(n1, n2);
  } else if (operation == DIVIDE) {
    result = divide(n1, n2);
  } else return;

  result = checkOverFlow(result);

  calculation = result;
  displayUi.textContent = calculation;
  num1 = result;
  num2 = "0";

  if (nextOperation != EQUAL) {
    operation = nextOperation;
    console.log("Operation: " + operation);
  } else {
    operation = null;
  }

  logAll();
}

function checkOverFlow(num) {
  if (num.toString().length > 10) {
    return num.toString().substring(0, 10);
  }
  return num;
}

function logAll() {
  console.log("num1: " + num1);
  console.log("num2: " + num2);
  console.log("calc: " + calculation);
}

function displayContent() {
  return displayUi.textContent;
}
