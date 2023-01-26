
// Create rock paper scissors variables in an array
const choices = ["rock", "paper", "scissors"];


function game() {
    function playRound(playerSelection, computerSelection) {

        if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
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

    function getComputerChoice (choices) {
        let randomChoice = Math.floor(Math.random() * choices.length);
        let computerSelection = choices[randomChoice];
        return computerSelection;
    }
    
}


game();
 // Give one point to the winner of the round (increment their score variable)
 // Play rounds until one of them reaches 5 points
