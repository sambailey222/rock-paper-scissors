
// randomly generate computer selection
function computerPlay() {
    const possiblePlays = ["Rock", "Paper", "Scissors"]
    let play = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
    return play;
}

// keep track of player, computer scores and tied rounds
let playerScore = 0;
let computerScore = 0;
let tiedRounds = 0;

// use scores to declare winner and print final scores
function finalScore (playerScore, computerScore, tiedRounds) {
    let message = "";
    if (playerScore > computerScore) {
        message += `Congratulations! You won against the computer! `;
    } else if (computerScore > playerScore) {
        message += `You suck! The computer beat you. `;
    } else {
        message += `You tied with the computer. ` 
    }
    return message;
}

// select each element of the scores
const printPlayerScore = document.querySelector("#player");
const printComputerScore = document.querySelector("#computer");
const printTiedRounds = document.querySelector("#tied");
const resultsDiv = document.querySelector("#results");
const printWinner = document.createElement('p');
// set extra p for a winner

// keep track of rounds played
let roundsPlayed = 0;

function playRound (playerSelection, computerSelection) {
        
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        playerScore ++;
        roundsPlayed ++;
        console.log(`player score = ${playerScore}`);
        printPlayerScore.innerHTML = `Current player score: ${playerScore}`;

        // update p innerHTML with winner result
        // append p to page once 5 rounds has been played.
        if (roundsPlayed == 5) {
            printWinner.innerHTML = finalScore(playerScore, computerScore, tiedRounds);
            resultsDiv.appendChild(printWinner);
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        computerScore ++;
        roundsPlayed ++;
        console.log(`computer score = ${computerScore}`);
        printComputerScore.innerHTML = `Current computer score: ${computerScore}`;
        if (roundsPlayed == 5) {
            printWinner.innerHTML = finalScore(playerScore, computerScore, tiedRounds);
            resultsDiv.appendChild(printWinner);
        }
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
         playerScore ++;
         roundsPlayed ++;
         console.log(`player score = ${playerScore}`);
         printPlayerScore.innerHTML = `Current player score: ${playerScore}`;
         if (roundsPlayed == 5) {
            printWinner.innerHTML = finalScore(playerScore, computerScore, tiedRounds);
            resultsDiv.appendChild(printWinner);
        }
    } 
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        computerScore ++;
        roundsPlayed ++;
        console.log(`computer score = ${computerScore}`);
        printComputerScore.innerHTML = `Current computer score: ${computerScore}`;
        if (roundsPlayed == 5) {
            printWinner.innerHTML = finalScore(playerScore, computerScore, tiedRounds);
            resultsDiv.appendChild(printWinner);
        }
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
         playerScore ++;
         roundsPlayed ++;
         console.log(`player score = ${playerScore}`);
         printPlayerScore.innerHTML = `Current player score: ${playerScore}`;
         if (roundsPlayed == 5) {
            printWinner.innerHTML = finalScore(playerScore, computerScore, tiedRounds);
            resultsDiv.appendChild(printWinner);
        }   
    } 
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        computerScore ++;
        roundsPlayed ++;
        console.log(`computer score = ${computerScore}`);
        printComputerScore.innerHTML = `Current computer score: ${computerScore}`;
        if (roundsPlayed == 5) {
            printWinner.innerHTML = finalScore(playerScore, computerScore, tiedRounds);
            resultsDiv.appendChild(printWinner);

        }
    } 
    else {
        tiedRounds ++;
        roundsPlayed ++;
        console.log(`tied rounds = ${tiedRounds}`);
        printTiedRounds.innerHTML = `Tied rounds: ${tiedRounds}`;
        if (roundsPlayed == 5) {
            // alert(finalScore (playerScore, computerScore, tiedRounds))
            printWinner.innerHTML = finalScore(playerScore, computerScore, tiedRounds);
            resultsDiv.appendChild(printWinner);
        }
        
    }
    return 1;
}

function resetGame () {
    printPlayerScore.innerHTML = `Current player score: 0`;
    printComputerScore.innerHTML = `Current computer score: 0`;
    printTiedRounds.innerHTML = `Tied rounds: 0`;
    playerScore = 0;
    computerScore = 0;
    tiedRounds = 0;
    roundsPlayed = 0;
    printWinner.innerHTML = "";
}

//set function for each button on mouseclick
const rock = document.querySelector("#rock");
rock.addEventListener('click', () => playRound("rock", computerPlay()));

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => playRound("paper", computerPlay()));

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => playRound("scissors", computerPlay()));

const reset = document.querySelector("#reset");
reset.addEventListener('click', () => resetGame());




// OLD LOOP FOR PLAYING IN THE CONSOLE AND NOT ON PAGE
// let i = 0;

// do {
//     let computerSelection = computerPlay();
//     // prompt user for input. 
//     // if user enters characters that are not paper, rock or scissors, reprompt the user. 
//     let playerSelection = '';
//     while (playerSelection.toUpperCase() !== 'ROCK' && playerSelection.toUpperCase() !== 'PAPER' && playerSelection.toUpperCase() !== 'SCISSORS') {
//         playerSelection = prompt('Enter Rock, Paper or Scissors');
//     }
//     console.log(playRound(playerSelection, computerSelection));
//     i++ 
// } while ( i < 5);