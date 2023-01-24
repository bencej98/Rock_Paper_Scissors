
 // Create rock paper scissors variables in an array
    const choices = ["Rock", "Paper", "Scissors"];

// Returns random choice from the array for the computer
    function getComputerChoice (choices) {
        randomChoice = Math.floor(Math.random() * choices.length);
        computerSelection = choices[randomChoice];
        return computerSelection;
    }
    


 // Create score variables
 // Store them in an array
 // Computer should choose one from the array
 // Player should choose one as by typing it(?)


 // After this compare the two values
 // Give one point to the winner of the round (increment their score variable)
 // Play rounds until one of them reaches 5 points
