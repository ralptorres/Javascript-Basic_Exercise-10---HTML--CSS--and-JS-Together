let calculation = localStorage.getItem("calculate") || 0;
// console.log(calculation);

displayCalculation();

function number(number) {
  calculation += number;
  // console.log(calculation);
  document.querySelector(
    ".js-calculation-display"
  ).innerHTML = `${calculation}`;
  localStorage.setItem("calculate", calculation);
}

function result(result) {
  return (calculation = eval(calculation));
}

function displayResult() {
  console.log(result(result));
  document.querySelector(".js-calculation-display").innerHTML = `${result(
    result
  )}`;
  localStorage.setItem("calculate", calculation);
}

function clearResult() {
  calculation = "";
  document.querySelector(".js-calculation-display").innerHTML = 0;
  localStorage.setItem("calculate", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation-display").innerHTML = calculation;
}
