function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            return "tie";
        } else if (computerSelection === "PAPER") {
            return "computer wins";
        } else {
            return "player wins";
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "PAPER") {
            return "tie";
        } else if(computerSelection === "SCISSORS") {
            return "computer wins";
        } else {
            return "player wins";
        }
    } else {
        if (computerSelection === "SCISSORS") {
            return "tie";
        } else if (computerSelection === "ROCK") {
            return "computer wins";
        } else {
            return "player wins";
        }
    }
}

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) return "ROCK";
    else if (randomNum == 2) return "PAPER";
    else return "SCISSORS";
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("rock paper or scissors?").toUpperCase();
        let result = playRound(playerSelection, computerSelection);
        
        if (result === "computer wins") {
            computerScore++;
        } else if (result === "player wins") {
            playerScore++;
        } else {
            continue;
        }
    }
    
    if (computerScore === playerScore) {
        console.log("game tie");
    } else if (computerScore > playerScore) {
        console.log("computer wins");
    } else {
        console.log("player wins");
    }
    
}

game();