let playerWins = 0;
let computerWins = 0;
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = prompt("rock or paper or scissors:").toLowerCase();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("you win! rock beats scissors");
    playerWins++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log("you lose! rock beats scissors");
    computerWins++;
  } else if (computerSelection === "rock" && playerSelection === "rock") {
    console.log("it's a draw");
  }
  // paper choice
  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("you win! paper beats rock");
    playerWins++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log("you lose! paper beats rock");
    computerWins++;
  } else if (computerSelection === "paper" && playerSelection === "paper") {
    console.log("it's a draw");
  }
  // scissors choice
  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("you win! scissors beats paper");
    playerWins++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("you lose! scissors beats paper");
    computerWins++;
  } else if (
    computerSelection === "scissors" &&
    playerSelection === "scissors"
  ) {
    console.log("it's a draw");
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    while(true){
        playRound()
        break;
    }
  }
  if (playerWins > computerWins) {
    console.log("you won the game")
  } else {
    console.log("you lost the game")
  }
}
game()
