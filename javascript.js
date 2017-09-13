//NIM - THE GAME
/*jslint devel: true */

//DEFINE THE STATE VARIABLES
// - Number of Dots
// - Who's turn it is
// - How many players
// - How many dots to pick up
var numberOfDots = 16;
var isPlayerOneTurn = false;

//ACTIONS (these are functions that mess with the state)
// - Print a bunch of dots
// - remove dots
// - change who's turn it is
// - print the board
// - check for a winner
function printBoard() {
    "use strict";
    //Should print numberOfDot's *'s to the screen
    var star = "*", numDotsToPrint = Math.max(numberOfDots, 0);
    console.log(star.repeat(numberOfDots));
}

function gameIsInProgress() {
    "use strict";
    //If numberOfDots is more than 0, then the game is still in progress
    var inProgress = true;
    if (numberOfDots > 0) {
        inProgress = true;
    } else {
        inProgress = false;
    }
    
    return inProgress;
    
// Or do it in one line
//    return numberOfDots > 0;
}

function promptUserForDots() {
    "use strict";
    //we get input from a user by doing var input = prompt()
    //we can turn strings into integers by using the parseInt() function
    //we need to make sure the user enters a number; specifically 1, 2, or 3
    //Keep asking for input until they finally enter a number
    var userInput = parseInt(prompt("Enter a number between 1 and 3"), 10);
    
//    if (userInput <= 3 && userInput > 0) {
//        return userInput;
//    } else {
//        var userInput = parseInt(prompt("Enter a number between 1 and 3"));
//    }
    
    while (userInput !== 1 && userInput !== 2 && userInput !== 3 && userInput > numberOfDots) {
        userInput = parseInt(prompt("PLEASE Enter a number between 1 and 3"), 10);
    }
    
    return userInput;
}

function removeDots(dotsToRemove) {
    //Need to remove dotsToRemove from numberOfDots
    "use strict";
    numberOfDots -= dotsToRemove;
}

function switchPlayers() {
    "use strict";
    isPlayerOneTurn = !isPlayerOneTurn;
}

//KICKING EVERYTHING OFF
// X Show the board right away
// X Prompt the user for how manuy dots the want to remove
// X Actually remove the dots
// X Print the new result
// X Switch players
// X Check to see if they won
// - Keep looping ^^^ until someone wins


printBoard();


while (gameIsInProgress()) {
    //checkForWinner needs to return true if the game is still in progress, false
    //if someone has won
    
    switchPlayers();
    var dotsToRemove = promptUserForDots();
    removeDots(dotsToRemove);
    printBoard();
    
}

//Need to alert either "player 1 wins" or "player 2 wins"]

if (isPlayerOneTurn) {
    alert('Game over! Player 1 wins');
} else {
    alert('Game over! Player 2 wins');
}
