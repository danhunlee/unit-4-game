// VARIABLES
var randomCompNum;
var crystalNum1;
var crystalNum2;
var crystalNum3;
var crystalNum4;


// Keep track of how  many wins and losses
var guessTotal = 0;
var wins = 0;
var losses = 0;

// clicking the crystals.
// I need to show the total score
// I need to show each time when a crystal is clicked it is showing the its score. 
// After first click, 2nd click gets added to the first score. 
// If I get the total score right with the computer guess then win goes up by 1 then reset the game.
// If I don't get it right then loss goes up by 1 and reset the game. 
// Win and Losses counter

// MAIN PROCESS
// =====================================================================================================
// Calling a function so computer generates a random number.
// I wanna have the computer to guess a random number and shows it on screen before the user starts 
// Computer is generating random number 19-120.

$(document).ready(function() {
    
    randomCompNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#computer-score").text(randomCompNum);
    console.log(randomCompNum);   

    // I wanna have 4 different crystals generating random number 1-12.
    crystalNum1 = Math.floor(Math.random() * (12)) + 1;
    console.log(crystalNum1);
    crystalNum2 = Math.floor(Math.random() * (12)) + 1;
    console.log(crystalNum2);
    var crystalNum3 = Math.floor(Math.random() * (12)) + 1;
    console.log(crystalNum3);
    var crystalNum4 = Math.floor(Math.random() * (12)) + 1;
    console.log(crystalNum4);

    $(".crystal1").on("click", function() {
        guessTotal += crystalNum1;
        $("#userGuess-Total").text(guessTotal);
        if(guessTotal === randomCompNum) {
            alert("You win!")
            wins++;
            $("#wins").text(wins);
        }
        else if(guessTotal > randomCompNum) {
            alert("You lost!")
            losses++;
            $("#losses").text(losses);
        }
    });

    $(".crystal2").on("click", function() {
        guessTotal += crystalNum2;
        $("#userGuess-Total").text(guessTotal);
        if(guessTotal === randomCompNum) {
            alert("You win!")
            wins++;
            $("#wins").text(wins);
        }
        else if(guessTotal > randomCompNum) {
            alert("You lost!")
            losses++;
            $("#losses").text(losses);
        }
    }); 
    
    $(".crystal3").on("click", function() {
        guessTotal += crystalNum3;
        $("#userGuess-Total").text(guessTotal);
        if(guessTotal === randomCompNum) {
            alert("You win!")
            wins++;
            $("#wins").text(wins);
        }
        else if(guessTotal > randomCompNum) {
            alert("You lost!")
            losses++;
            $("#losses").text(losses);
        }
    }); 
    
    $(".crystal4").on("click", function() {
        guessTotal += crystalNum4;
        $("#userGuess-Total").text(guessTotal);
        if(guessTotal === randomCompNum) {
            alert("You win!")
            wins++;
            $("#wins").text(wins);
        }
        else if(guessTotal > randomCompNum) {
            alert("You lost!")
            losses++;
            $("#losses").text(losses);
        }
    });

  
    

});