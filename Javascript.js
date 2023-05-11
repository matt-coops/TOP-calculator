"use strict";

const containerButtons = document.querySelector(".buttons");
const containerMainScreen = document.querySelector(".main--screen");
const containerTopScreen = document.querySelector(".top--screen");
let firstNum = "";
let operator = "";
let secondNum = "";
let result = "";

const init = function () {
  containerMainScreen.textContent = "";
  containerTopScreen.textContent = "";
  firstNum = "";
  operator = "";
  secondNum = "";
  result = "";
};

const operate = function (a, b, c) {
  if (b === "+") return a + c;
  if (b === "-") return a - c;
  if (b === "*") return a * c;
  if (b === "/") return a / c;
};

containerButtons.addEventListener("click", function (e) {
  if (e.target.classList.contains("buttons")) return;
  if (e.target.classList.contains("button--digit") && operator === "") {
    if (firstNum.length === 10) firstNum = firstNum.slice(0, -1);
    firstNum += e.target.dataset.button;
    containerMainScreen.textContent = firstNum;
  }
  if (e.target.classList.contains("button--digit") && operator !== "") {
    secondNum += e.target.dataset.button;
    containerMainScreen.textContent = `${operator} ${secondNum}`;
  }
  if (e.target.classList.contains("button--operator")) {
    if (secondNum !== "") {
      firstNum = operate(+firstNum, operator, +secondNum);
      secondNum = "";
    }
    operator = e.target.dataset.button;
    containerTopScreen.textContent = `${firstNum}`;
    containerMainScreen.textContent = `${operator}`;
  }
  if (e.target.classList.contains("button--clear")) init();
  if (e.target.classList.contains("button--equals")) {
    if (!firstNum || !operator || !secondNum) return;
    containerTopScreen.textContent = `${firstNum} ${operator} ${secondNum}`;
    result = operate(+firstNum, operator, +secondNum);
    containerMainScreen.textContent = result;
    firstNum = result;
    operator = "";
    secondNum = "";
  }
});

init();
