
// Create Rock Paper Scissors variables in an array and selects button
const choices = ["Rock", "Paper", "Scissors"];
const buttonElements = document.querySelectorAll("#Rock, #Paper, #Scissors");
// Creates an array from the HTML Elements that got returned
const playButtons = Array.from(buttonElements);
console.log(playButtons);


const refreshButton = document.getElementById("refresh");
console.log(refreshButton);

function startGame() {

    let playerScore = 0;
    let computerScore = 0;

    // Creates the div which showcases the current points and final winner
    /*
    const container = document.querySelector(".container");
    const scores = document.createElement("div");
    const winner = document.createElement("h3");
    scores.classList.add("scores");
    container.appendChild(scores);
    // Creates the div which showcases the current round's result
    const roundResult = document.createElement("div");
    roundResult.classList.add("roundResult");
    container.appendChild(roundResult);
    */
    const playerScoreDisplay = document.getElementById("playerScoreDisplay")
    const computerScoreDisplay = document.getElementById("computerScoreDisplay")
    console.log(computerScoreDisplay, playerScoreDisplay)
    const roundResultDisplay = document.getElementById("roundResult")

    // Appends click eventlistener for every button
    playButtons.forEach((button) => {
        // With the help of the class names decides the winner of the round
        button.addEventListener("click", (e) => {
            let roundResult = playRound(e.target.id, getComputerChoice(choices));
            if (roundResult === "win") {
                playerScore++;
            } else if (roundResult === "lose") {
                computerScore++;
            }
            
            // Disables buttons if any of the players reach 5 points
            if (playerScore === 5) {

                playButtons.forEach((button) => {
                    button.disabled = true;
                });

                // Adds class to tho the winner element and appends it
                // winner.classList.add("winner");
                roundResultDisplay.textContent = "Congrats you have won the game! :)";
                // container.appendChild(winner);
                
            } else if (computerScore === 5) {

                playButtons.forEach((button) => {
                    button.disabled = true;
                });

                roundResultDisplay.textContent = "Unfortunately you have lost the game! :(";
            }

            // Adds current point to appropriate div
            playerScoreDisplay.textContent =  playerScore;
            computerScoreDisplay.textContent = computerScore;

            
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

    // Reloads the page upon click on "Play again" button
    refreshButton.addEventListener("click", () => {
        window.location.reload();
    });

    // This function plays a round based on the selection of the player and the computer
    function playRound(playerSelection, computerSelection) {
        // With these if else blocks the function decides the winner (from the player's POV) based on the input
        if (playerSelection === computerSelection) {
            roundResultDisplay.textContent = "It's a tie!";
            return "tie";
        } else if  (playerSelection === "Rock" && computerSelection === "Paper" ||
                    playerSelection === "Paper" && computerSelection === "Scissors" ||
                    playerSelection === "Scissors" && computerSelection === "Rock") {
            roundResultDisplay.textContent = "You lose! " + "Computer choose " + " " + computerSelection +
             " " + "and "+ computerSelection + " " + "beats" + " " + playerSelection;
            return "lose";
        } else if  (playerSelection === "Rock" && computerSelection === "Scissors" || 
                    playerSelection === "Paper" && computerSelection === "Rock" ||
                    playerSelection === "Scissors" && computerSelection === "Paper") {
                        
            roundResultDisplay.textContent = "You win! " + "Computer choose " + computerSelection + " and " +
             playerSelection + " " + "beats" + " " + computerSelection;
            return "win";
        }
    }   
}

startGame();

