const operand1 = document.querySelector(".operand1");
const operand2 = document.querySelector(".operand2");
const answer = document.querySelector(".answer");
const reveal = document.querySelector(".reveal");
const next = document.querySelector(".next");
const operation = document.querySelector(".operation");

const addition = document.querySelector(".add");
const subtraction = document.querySelector(".sub");
const multiply = document.querySelector(".mul");
const divide = document.querySelector(".div");

let lastOperation = "+";

function createQuestion() {
  let result = 0;

  let num1 = Math.floor(Math.random() * 11);
  if (num1 == 0) {
    num1 = 1;
  }
  let num2 = Math.floor(Math.random() * 11);
  if (num2 == 0) {
    num2 = 1;
  }
  
  if (lastOperation == "-") {
    if (num1 - num2 < 0) {
      let tempNum = num1;
      num1 = num2;
      num2 = tempNum;
      result = num1 - num2;
    } else {
      result = num1 - num2;
    }
  } else if (lastOperation == "*") {
    result = num1 * num2;
  } else if (lastOperation == "/") {
    let product = num1 * num2;
    num1 = product;
    result = (num1 / num2);
  } else {
    result = num1 + num2
  }
  
  operand1.innerText = num1;
  operand2.innerText = num2;
  operation.innerText = lastOperation;

  reveal.addEventListener("click", function () {
    answer.innerText = result;
  });
}

addition.addEventListener("click", function () {
  lastOperation = "+";
});
subtraction.addEventListener("click", function () {
  lastOperation = "-";
});
multiply.addEventListener("click", function () {
  lastOperation = "*";
});
divide.addEventListener("click", function () {
  lastOperation = "/";
});

next.addEventListener("click", function () {
  answer.innerText = "?";
  createQuestion();
});

