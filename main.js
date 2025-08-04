function add(x, y) {
  return Number(x) + Number(y);
}

function multiply(x, y) {
  return Number(x) * Number(y);
}

function divide(x, y) {
  return Number(y) != 0 ? Number(x) / Number(y) : "Err";
}

function subtract(x, y) {
  return Number(x) - Number(y);
}

function operate(x, y, oper) {
  try {
    switch (oper) {
      case "*":
        return multiply(x, y);
      case "/":
        return divide(x, y);
      case "+":
        return add(x, y);
      case "-":
        return subtract(x, y);
      default:
        return "Err";
    }
  } catch (error) {
    return "Err";
  }
}

function screenParser(char) {
  if (screenStatus === "n") {
    let existingText = screen.textContent;
    screen.textContent = existingText + char;
  } else {
    screen.textContent = char;
    screenStatus = "n";
  }
}

function resetCalculator() {
  screen.textContent = "";
  firstNum = 0;
  secondNum = 0;
  operator = "";
  screenStatus = "n";
}

function clickButton(e) {
  if (e.target.tagName === "BUTTON") {
    if (
      e.target.className === "numpad-buttons" ||
      e.target.textContent === "."
    ) {
      pressed = "n";
      screenParser(e.target.textContent);
    } else if (
      e.target.className === "symbols-buttons" &&
      e.target.textContent !== "=" &&
      (firstNum === 0 || operator === "")
    ) {
      // Primo operatore dopo un reset o dopo "="
      firstNum = screen.textContent;
      operator = e.target.textContent;
      screenStatus = "y";
      pressed = "y";
    } else if (
      e.target.className === "symbols-buttons" &&
      firstNum !== 0 &&
      operator !== "" &&
      pressed === "n"
    ) {
      secondNum = screen.textContent;
      screen.textContent = operate(firstNum, secondNum, operator);
      firstNum = screen.textContent;
      secondNum = 0;

      if (e.target.textContent === "=") {
        // Dopo "=", azzera l'operatore per evitare calcoli errati
        operator = "";
        screenStatus = "y";
        pressed = "y";
      } else {
        operator = e.target.textContent;
        screenStatus = "y";
        pressed = "y";
      }
    } else if (e.target.textContent === "Reset") {
      resetCalculator();
    }
  }
}

let firstNum = 0;
let secondNum = 0;
let operator = "";
let screenStatus = "n";
let pressed = "n";
const container = document.querySelector(".container");
const screen = document.querySelector(".screen");
container.addEventListener("click", clickButton);
