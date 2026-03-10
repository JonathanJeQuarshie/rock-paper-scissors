let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
    return "scissors";
  


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
function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }
  console.log(`Final score — You: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  }
  if (computerScore > humanScore) {
    console.log("Sorry! You lost the game!");
  }
  if (humanScore === computerScore) {
    console.log("It's a tie game!");
  }
}
playGame();
 