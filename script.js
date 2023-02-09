
// Create rock paper scissors variables in an array
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');

let playerScoreSum;
let computerScoreSum = 0;


function startGame() {

    let playerScore = 0;
    let computerScore = 0;

    // const playerSelection = e.target.className;
    // const computerSelection = getComputerChoice(choices);
    // Gets the result and based on that assigns a point
    // result = playRound(playerSelection, computerSelection);
    // console.log(playerSelection);
    
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let roundResult = playRound(e.target.className, getComputerChoice(choices));
            if (roundResult === "win") {
                playerScore++;
            } else if (roundResult === "lose") {
                computerScore++;
            }
            
            if (playerScore === 5 || computerScore === 5) {
                buttons.forEach((button) => {
                    button.disabled = true;
                });
                console.log("foo");
            }

            const container = document.querySelector("#container");

            const scores = document.createElement("div");
            
            scores.classList.add("scores");

            scores.textContent = computerScore + " " + playerScore;

            container.appendChild(scores);
            
        }); 
    });
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
            return "lose";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            alert("You win! Rock beats Scissors");
            return "win";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            alert("You win! Paper beats Rock");
            return "win";
        } else if (playerSelection === "paper" && computerSelection === "scissors")  {
            alert("You lose! Scissors beats Paper")
            return "lose";
        } else if(playerSelection === "scissors" && computerSelection === "rock") {
            alert("You lose! Rock beats Scissors")
            return "lose";
        } else if(playerSelection === "scissors" && computerSelection === "paper") {
            alert("You win! Scissors beats Paper")
            return "win";
        }
    }
}

startGame();









 