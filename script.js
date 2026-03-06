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
console.log(getComputerChoice());