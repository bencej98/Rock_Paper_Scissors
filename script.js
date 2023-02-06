
// Create rock paper scissors variables in an array
const choices = ["rock", "paper", "scissors"];
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");


// This functions return which button was clicked
function getPlayerSelection () {

    // The eventlisteners check for click event and return the class of the clicked button

    rockButton.addEventListener('click', (event) => {
        let choice = event.target.className;
        return choice;
    });

    paperButton.addEventListener('click', (event) => {
        let choice = event.target.className;
        return choice;
    });

    scissorsButton.addEventListener('click', (event) => {
        let choice = event.target.className;
        return choice;
    });




}








/*
function game() {
    // This function plays a round based on the selection of the player and the computer
    function playRound(playerSelection, computerSelection) {

        // With these if else block the function decides the winner (from the player POV) based on the input
        if (playerSelection === "rock" && computerSelection === "rock" ||
            playerSelection === "paper" && computerSelection === "paper" || 
            playerSelection === "scissors" && computerSelection === "scissors") {
            alert("It's a tie!");
            return "tie";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            alert("You lose! Paper beats Rock");
            return "loose";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            alert("You win! Rock beats Scissors");
            return "win";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            alert("You win! Paper beats Rock");
            return "win";
        } else if (playerSelection === "paper" && computerSelection === "scissors")  {
            alert("You lose! Scissors beats Paper")
            return "loose";
        } else if(playerSelection === "scissors" && computerSelection === "rock") {
            alert("You lose! Rock beats Scissors")
            return "loose";
        } else if(playerSelection === "scissors" && computerSelection === "paper") {
            alert("You win! Scissors beats Paper")
            return "win";
        }
    }

    // This function randomly select a choice for the computer
    function getComputerChoice (choices) {
        // Randomly gets a number based on the length of the choices array
        let randomChoice = Math.floor(Math.random() * choices.length);
        // Gets the given choise based on the random number from they choices array
        let computerSelection = choices[randomChoice];
        return computerSelection;
    }

    let playerScore = 0;
    let computerScore = 0;
    let result;
    let playerSelection;

    // This while loop goes on until one of the scores reaches 5 points
    while (computerScore != 5 && playerScore != 5) {
        // This is the players selection forced to lowercase
        playerSelection = prompt("Please enter rock paper or scissors: ").toLowerCase();
        let computerSelection = getComputerChoice(choices);
        // Gets the result and based on that assigns a point
        result = playRound(playerSelection, computerSelection);
        if (result === "win") {
            playerScore++;
            
        }
        else if (result === "loose") {
            computerScore++;
        }
    }

    // Displays the result for the player
    if (playerScore == 5) {
        alert("You have won the game!Congrats! :)")
    } else if(computerScore == 5) {
        alert("Unfortunately you have lost the game! :(")
    }
}


game();
 // Give one point to the winner of the round (increment their score variable)
 // Play rounds until one of them reaches 5 points

 */