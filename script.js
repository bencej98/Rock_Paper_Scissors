
// Create rock paper scissors variables in an array
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');

let playerScoreSum = 0;
let computerScoreSum = 0;

function startGame(e) {

    let playerScore = 0;
    let computerScore = 0;
    let result;

    const playerSelection = e.target.className;
    const computerSelection = getComputerChoice(choices);
    // Gets the result and based on that assigns a point
    result = playRound(playerSelection, computerSelection);
    console.log(playerSelection);

    // This function randomly select a choice for the computer
    function getComputerChoice (choices) {
        // Randomly gets a number based on the length of the choices array
        let randomChoice = Math.floor(Math.random() * choices.length);
        // Gets the given choice based on the random number from they choices array
        let computerSelection = choices[randomChoice];
        return computerSelection;
    }

    // This function plays a round based on the selection of the player and the computer
    function playRound(playerSelection, computerSelection) {
        // With these if else block the function decides the winner (from the player POV) based on the input
        if (playerSelection === computerSelection) {
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
              
    if (result === "win") {
        playerScore++;
        return playerScore;
    }
    else if (result === "loose") {
        computerScore++;
        return computerScore;
    }

    // Displays the result for the player
    
    if (playerScore == 5) {
        //alert("You have won the game!Congrats! :)")
    } else if(computerScore == 5) {
        //alert("Unfortunately you have lost the game! :(")
    }   
    

}

function checkStandings (point) {

}

// Maybe I should make an other function that check the return value of game and include that in the eventlistener

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        startGame(e);
        }); 
});

 