const compResult = document.querySelector(".comp.result");
const playerResult = document.querySelector(".player.result");
const playerButtons = document.querySelectorAll(".btn.player");
const playerScoreTag = document.querySelector(".player");
const computerScoreTag = document.querySelector(".computer");
const tieDisplayTag = document.querySelector(".tie");
const compButtons = document.querySelectorAll(".btn.comp");
const restartButton = document.querySelector(".restart");

let computerScore = 0;
let playerScore = 0;

restartButton.addEventListener('click', (event) => {
    console.log(event);
    computerScore = 0;
    playerScore = 0;
    computerScoreTag.innerText = computerScore;
    playerScoreTag.innerText = playerScore;
    tieDisplayTag.innerText = "";
    restartButton.style.visibility = "hidden";
    startGame();
});

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
        if (computerSelection == "SCISSORS") {
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
    let text = event.target.innerText;
    let playerSelection = text.toUpperCase().slice(0, text.length - 2).trim();
    let result = playRound(playerSelection, computerSelection);

    compButtons.forEach(btn => {
        btn.style.border = "2px solid aliceblue";
        if (btn.classList.contains(computerSelection.toLowerCase())) {
            btn.style.border = "2px solid yellow";
        }
    })

    if (result === "computer wins") {
        computerScore++;
        computerScoreTag.innerText = computerScore;
    } else if (result === "player wins") {
        playerScore++;
        playerScoreTag.innerText = playerScore;
    } else {
        tieDisplayTag.innerText = "Tie round";
        setTimeout(() => {
            tieDisplayTag.innerText = "";
        }, 500); // in css also 1s
    }

    checkScore(computerScore, playerScore);
}

function checkScore(computerScore, playerScore) {
    if (computerScore === 5 || playerScore === 5) {
        playerButtons.forEach(btn => {
            btn.removeEventListener('click', game);
        });

        if (computerScore === playerScore) {
            tieDisplayTag.innerText = "Tie Game";
        } else if (computerScore > playerScore) {
            tieDisplayTag.innerText = "COMPUTER WINS!!!";
            restartButton.style.visibility = "visible";
        } else {
            tieDisplayTag.innerText = "PLAYER WINS!!!";
            restartButton.style.visibility = "visible";
        }
    }
}

function startGame() {
    playerButtons.forEach(btn => {
        btn.addEventListener('click', game);
    });
}

startGame();
