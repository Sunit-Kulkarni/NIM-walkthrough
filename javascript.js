//NIM - THE GAME

//DEFINE THE STATE VARIABLES
// - Number of Dots
// - Who's turn it is
// - How many players
// - How many dots to pick up


//ACTIONS (these are functions that mess with the state)
// - Print a bunch of dots
// - remove dots
// - change who's turn it is
// - print the board
// - check for a winner


//KICKING EVERYTHING OFF
// X Show the board right away
// X Prompt the user for how manuy dots the want to remove
// X Actually remove the dots
// X Print the new result
// X Switch players
// X Check to see if they won
// - Keep looping ^^^ until someone wins

printBoard();
var dotsToRemove = promptUserForDots();
removeDots(dotsToRemove);
printBoard();
switchPlayers();
checkForWinner();

while( !checkForWinner() ) {
      
}