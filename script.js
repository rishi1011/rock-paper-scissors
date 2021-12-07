const resultText = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

let computerScore = 0;
let playerScore = 0;

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
        } else if (computerSelection === "SCISSORS") {
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

function game(event) {
    let computerSelection = computerPlay();
    let playerSelection = event.target.innerText.toUpperCase();
    let result = playRound(playerSelection, computerSelection);

    if (result === "computer wins") {
        computerScore++;
        resultText.innerText = "computer " + computerScore;
    } else if (result === "player wins") {
        playerScore++;
        resultText.innerText = "player " + playerScore;
    } else {
        resultText.innerText = "tie";
    }

    if (computerScore === 5 || playerScore === 5) {
        console.log("done");

        if (computerScore === playerScore) {
            resultText.innerText = "game tie";
        } else if (computerScore > playerScore) {
            resultText.innerText = "computer wins";
        } else {
            resultText.innerText = "player wins";
        }
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', game);
});
