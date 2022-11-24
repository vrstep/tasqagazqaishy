let computerChoice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random];
}

let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
let computerSelection = getComputerChoice(computerChoice);

console.log(`Player's choice: ${playerSelection}. Computer's choice: ${computerSelection}`);

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') console.log("You lost");
            else if (computerChoice == 'scissors') console.log("You won");
            else console.log("Tie");
            break;
        
        case 'paper':
            if (computerSelection == 'scissors') console.log("You lost");
            else if (computerChoice == 'rock') console.log("You won");
            else console.log("Tie");
            break;

        case 'scissors':
            if (computerSelection == 'rock') console.log("You lost");
            else if (computerChoice == 'paper') console.log("You won");
            else console.log("Tie");
            break;
    }
}

console.log(playRound(playerSelection, computerSelection))