
// Create rock paper scissors variables in an array and selects button
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');

function startGame() {

    let playerScore = 0;
    let computerScore = 0;

    // Creates the div which showcases the current points and final winner
    const container = document.querySelector("#container");
    const scores = document.createElement("div");
    const winner = document.createElement("h3");
    scores.classList.add("scores");
    container.appendChild(scores);

    // Appends click eventlistener for every button
    buttons.forEach((button) => {
        // With the help of the class names decides the winner of the round
        button.addEventListener("click", (e) => {
            let roundResult = playRound(e.target.className, getComputerChoice(choices));
            if (roundResult === "win") {
                playerScore++;
            } else if (roundResult === "lose") {
                computerScore++;
            }
            
            // Disables buttons if any of the players reach 5 points
            if (playerScore === 5) {

                buttons.forEach((button) => {
                    button.disabled = true;
                });

                // Adds class to tho the winner element and appends it
                winner.classList.add("playerWinner");
                winner.textContent = "Congrats you have won the game! :)"
                container.appendChild(winner);
                
            } else if (computerScore === 5) {

                buttons.forEach((button) => {
                    button.disabled = true;
                });

                winner.classList.add("computerWinner");
                winner.textContent = "Unfortunately you have lost the game! :("
                container.appendChild(winner);
            }

            // Concatenates current points and adds them
            scores.textContent = computerScore + " " + playerScore;
            
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
        // With these if else block the function decides the winner (from the player's POV) based on the input
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









 