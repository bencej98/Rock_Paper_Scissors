let playerSelection = prompt("Please enter rock paper or scissors: ").toLowerCase();
// Create rock paper scissors variables in an array
const choices = ["rock", "paper", "scissors"];

// Returns random choice from the array for the computer
function getComputerChoice (choices) {
    let randomChoice = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[randomChoice];
    return computerSelection;
}

let computerSelection = getComputerChoice(choices);

console.log(computerSelection);

// Create score variables
// Store them in an array
// Computer should choose one from the array
// Player should choose one as by typing it(?)

// After this compare the two values
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
        alert("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors")  {
        alert("You lose! Scissors beats Paper")
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock beats Scissors")
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors beats Paper")
    }
}

console.log(playRound(playerSelection, computerSelection));

    
 // Give one point to the winner of the round (increment their score variable)
 // Play rounds until one of them reaches 5 points
