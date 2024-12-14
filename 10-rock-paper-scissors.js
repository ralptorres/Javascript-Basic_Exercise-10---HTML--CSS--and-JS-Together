// Rock Paper Scissors

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  tie: 0,
};

document.querySelector(
  ".js-score"
).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Tie: ${score.tie}`;

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "You lose!";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose!";
    } else if (computerMove === "rock") {
      result = "You win!";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You win!";
    }
  }

  if (result === "You win!") {
    score.wins += 1;
  } else if (result === "You lose!") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-play-result").innerHTML = `${result}`;

  document.querySelector(
    ".js-play-move"
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon" />
        <img src="images/${computerMove}-emoji.png" alt="" class="move-icon" />
        Computer`;

  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Tie: ${score.tie}`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.tie = 0;

  localStorage.removeItem("score");

  document.querySelector(".js-play-result").innerHTML = "";

  document.querySelector(".js-play-move").innerHTML = "";

  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Tie: ${score.tie}`;
}
