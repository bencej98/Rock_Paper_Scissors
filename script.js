
     let playerSelection = prompt("Please enter rock paper or scissors: ").toLowerCase();

     console.log(playerSelection);

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

    function winnerDecider(playerSelection, computerSelection) {
        let playerScore;
        let computerScore;
        if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
            alert("It's a tie!");
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            alert("You lose! Paper beats Rock");
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            alert("You win! Rock beats Scissors");
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            alert("You win! Paper beats Rock");
        } else if (playerSelection === "paper" && computerSelection === "scissors")  {
            computerScore++;
            alert("You lose! Scissors beats Paper")
        } else if(playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            alert("You lose! Rock beats Scissors")
        } else if(playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            alert("You win! Scissors beats Paper")
        }
    }

    winnerDecider(playerSelection, computerSelection);
 // Give one point to the winner of the round (increment their score variable)
 // Play rounds until one of them reaches 5 points
