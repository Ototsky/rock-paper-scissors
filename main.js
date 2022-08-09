let playerWins = 0;
let computerWins = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const outCome = document.querySelector(".result");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    const p = document.createElement("p");
    p.innerText = "you win! rock beats scissors";
    outCome.appendChild(p);
    playerWins++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    const p = document.createElement("p");
    p.innerText = "you lose! rock beats scissors";
    outCome.appendChild(p);
    computerWins++;
  } else if (computerSelection === "rock" && playerSelection === "rock") {
    const p = document.createElement("p");
    p.innerText = "it's a draw";
    outCome.appendChild(p);
  }
  // paper choice
  if (playerSelection === "paper" && computerSelection === "rock") {
    const p = document.createElement("p");
    p.innerText = "you win! paper beats rock";
    outCome.appendChild(p);
    playerWins++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    const p = document.createElement("p");
    p.innerText = "you lose! paper beats rock";
    outCome.appendChild(p);
    computerWins++;
  } else if (computerSelection === "paper" && playerSelection === "paper") {
    const p = document.createElement("p");
    p.innerText = "it's a draw";
    outCome.appendChild(p);
  }
  // scissors choice
  if (playerSelection === "scissors" && computerSelection === "paper") {
    const p = document.createElement("p");
    p.innerText = "you win! scissors beats paper";
    outCome.appendChild(p);
    playerWins++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    const p = document.createElement("p");
    p.innerText = "you lose! scissors beats paper";
    outCome.appendChild(p);
    computerWins++;
  } else if (
    computerSelection === "scissors" &&
    playerSelection === "scissors"
  ) {
    const p = document.createElement("p");
    p.innerText = "it's a draw";
    outCome.appendChild(p);
  }
}

function CheckForWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.innerText = "you win! great jop beating the computer";
    outCome.appendChild(h2);
  }
  if (computerScore === 5) {
    const h2 = document.createElement("h2");
    h2.innerText = "you lose! try again 'till you win";
    outCome.appendChild(h2);
  }
}

rock.addEventListener("click", function () {
  playerSelection = "rock";
  playRound(playerSelection, getComputerChoice());
  CheckForWinner(playerWins, computerWins);
});
paper.addEventListener("click", function () {
  playerSelection = "paper";
  playRound(playerSelection, getComputerChoice());
  CheckForWinner(playerWins, computerWins);
});
scissors.addEventListener("click", function () {
  playerSelection = "scissors";
  playRound(playerSelection, getComputerChoice());
  CheckForWinner(playerWins, computerWins);
});
