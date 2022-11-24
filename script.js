let computerChoice = ['rock', 'paper', 'scissors'];

let playerSelection;
let computerSelection;

function getComputerChoice() {
    let random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random];
}

console.log(getComputerChoice(computerChoice));