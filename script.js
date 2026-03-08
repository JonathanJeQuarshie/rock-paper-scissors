let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = Math.floor(Math.random() * 3);
  if (choices === 0) {
    return "rock";
  } else if (choices === 1) {
    return "paper";
  } else if (choices === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("rock, paper, scissors");
  return humanChoice;
}
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win! " + humanChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice;
  }
}
 