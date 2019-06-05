// VARIABLES
// I wanna have the computer to guess a random number and shows it on screen before the user starts 
// Computer is generating random number 19-120.
var randomCompNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(randomCompNum);   

// I wanna have 4 different crystals generating random number 1-12.
var randomCryNum = Math.floor(Math.random() * (12)) + 1;
console.log(randomCryNum);

// Keep track of how  many wins and losses
var wins = 0;
var losses = 0;

// clicking the crystals.
// Win and Losses counter
// I need to show the total score
// I need to show each time when a crystal is clicked it is showing the its score. 
// After first click, 2nd click gets added to the first score. 
// If I get the total score right with the computer guess then win goes up by 1 then reset the game.
// If I don't get it right then loss goes up by 1 and reset the game. 

// MAIN PROCESS
// =====================================================================================================
// Calling a function so computer generates a random number.
document.onkeyup = function () {
    
}