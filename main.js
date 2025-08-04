function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function subtract(x, y) {
  return x - y;
}

function operate(x, y, oper) {
  switch (oper) {
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    case "+":
      return add (x, y);
    case "-":
      return subtract(x,y);
  }
}

let firstNum = 0;
let secondNum = 0;
let operator = "";

