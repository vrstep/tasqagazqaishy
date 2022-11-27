// Selecting elements
const gameContainer = document.querySelector('.container');
const optionButtons = gameContainer.querySelectorAll('.btn-option');
const scorecontainer = gameContainer.querySelector('.score-container');
const restartButton = gameContainer.querySelector('.restart-btn');  

// Building functions

// Hook up the event listener
optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        let playerSelection = button.textContent.toLowerCase();
        let computerSelection = getComputerChoice(computerChoice);
        playRound(playerSelection, computerSelection);
        console.log(playerSelection);
        console.log(computerSelection);
    });
});

let computerChoice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random];
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') console.log("You lost");
            else if (computerSelection == 'scissors') console.log("You won");
            else console.log("Tie");
            break;
        
        case 'paper':
            if (computerSelection == 'scissors') console.log("You lost");
            else if (computerSelection == 'rock') console.log("You won");
            else console.log("Tie");
            break;

        case 'scissors':
            if (computerSelection == 'rock') console.log("You lost");
            else if (computerSelection == 'paper') console.log("You won");
            else console.log("Tie");
            break;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        //let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        // let computerSelection = getComputerChoice(computerChoice);
        console.log(`Player's choice: ${playerSelection}. Computer's choice: ${computerSelection}`);
        console.log(`Round ${i}`);
        playRound(playerSelection, computerSelection);
    }
}

// console.log(game());