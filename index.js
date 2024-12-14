// Subscribe Button

function subscribe() {
  let button = document.querySelector(".js-subscribe-button");

  if (button.innerHTML === "Subscribe") {
    button.innerHTML = "Subscribed";
    button.classList.add("is-subscribe");
  } else {
    document.querySelector(".js-subscribe-button").innerHTML = "Subscribe";
    button.classList.remove("is-subscribe");
  }
}

//Amazon Shipping Calculator

// function calculateShipping() {
//   let cost = Number(document.querySelector(".js-input-cost").value);
//   let totalCost = document.querySelector(".js-total-cost");
//   if (cost < 40 && cost > 0) {
//     totalCost.classList.remove("error-text-style");
//     cost = (cost * 100 + 10 * 100) / 100;
//     document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
//   } else if (cost >= 40) {
//     totalCost.classList.remove("error-text-style");

//     document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
//   } else {
//     totalCost.classList.add("error-text-style");
//     document.querySelector(
//       ".js-total-cost"
//     ).innerHTML = `Error: cost cannot be less than $0`;
//   }
// }

function calculateShipping() {
  let cost = Number(document.querySelector(".js-input-cost").value);
  let totalCost = document.querySelector(".js-total-cost");
  if (cost < 0) {
    totalCost.classList.add("error-text-style");
    document.querySelector(
      ".js-total-cost"
    ).innerHTML = `Error: cost cannot be less than $0`;
    return;
  } else if (cost < 40) {
    totalCost.classList.remove("error-text-style");
    cost = (cost * 100 + 10 * 100) / 100;
  }
  totalCost.classList.remove("error-text-style");
  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}

function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateShipping();
  }
}

//Excersices

test = document.querySelector(".js-button").classList.contains("js-button");

console.log(test);

function clickButton(button) {
  let buttonElement = document.querySelector(button);

  if (buttonElement.classList.contains("is-toggled")) {
    buttonElement.classList.remove("is-toggled");
  } else buttonElement.classList.add("is-toggled");
}

function oneClickButton(button) {
  let buttonElement = document.querySelector(button);

  if (buttonElement.classList.contains("is-toggled")) {
    buttonElement.classList.remove("is-toggled");
  } else {
    turnOffPreviousButton();
    buttonElement.classList.add("is-toggled");
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector(".is-toggled");

  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}
