"use strict";

const containerButtons = document.querySelector(".buttons");
const containerScreen = document.querySelector(".screen");
let firstNum = "";
let operator = "";
let secondNum = "";

const init = function () {
  containerScreen.textContent = "";
  firstNum = "";
  operator = "";
  secondNum = "";
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
    firstNum += e.target.dataset.button;
    containerScreen.textContent = firstNum;
  }
  if (e.target.classList.contains("button--digit") && operator !== "") {
    secondNum += e.target.dataset.button;
    containerScreen.textContent = secondNum;
  }
  if (e.target.classList.contains("button--operator")) {
    if (secondNum !== "") return;
    operator = e.target.dataset.button;
    containerScreen.textContent = `${firstNum} ${operator}`;
  }
  if (e.target.classList.contains("button--clear")) init();
  if (e.target.classList.contains("button--equals"))
    containerScreen.textContent = operate(+firstNum, operator, +secondNum);
});

init();
