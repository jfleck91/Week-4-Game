$(document).ready(function() {


// -buttons
var brickValue, starValue, mushroomValue, questionValue;

var wins = 0;
var losses = 0;

// - random # 19-120
var randomValue;

//user score
var userScore;

function initializeVariables() {
// have computer pick a number between 19-120
randomValue = 19 + Math.floor(Math.random() * 102);

// pick random gem values between 1-12
brickValue = 1 + Math.floor(Math.random() * 12);
starValue = 1 + Math.floor(Math.random() * 12);
mushroomValue = 1 + Math.floor(Math.random() * 12);
questionValue = 1 + Math.floor(Math.random() * 12);

userScore = 0;

// update the html for the game board
$("#winsTally").html("Wins: " + wins);
$("#lossesTally").html("Losses: " + losses);
$("#randomNumber").html(randomValue);
$("#userScore").html(userScore);
consoleLogVariables();
}

// function to check if user has won or lost
// and then re-initialize variables for new round
function hasUserWonOrLost() {
	// check if user has lost
	if (userScore > randomValue) {
		losses++;
		console.log("user lost");
		initializeVariables();
	}

// check if user has won
	if (userScore == randomValue) {
		wins++;
		console.log("user won");
		initializeVariables();
	}
}

// debugging functionality function
	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("brickValue: ", brickValue + " starValue: " + starValue + " mushroomValue: " + mushroomValue + " questionValue: " + questionValue);
		console.log("randomValue: " + randomValue + " userScore: " + userScore);
		console.log("----------------------------------");

	}

    initializeVariables();

// listen for clicks on any of the gems by targeting the gem class
$(".icon").on("click", function() {
    // each gem has a value attribute
    // use this attribute to identify which gem the user actually clicked
    var pressed = $(this).attr("value");
    console.log(pressed);
    // add the value of the gem to the user's ongoing score tally
    if (pressed == "brick") {
        userScore += brickValue;
    } else if (pressed == "star") {
        userScore += starValue;
    } else if (pressed == "mushroom") {
        userScore += mushroomValue;
    } else if (pressed == "question") {
        userScore += questionValue;
    } else {
        console.log("error");
    }
    // then update the html for the user score
    $("#userScore").html(userScore);
    consoleLogVariables();
    // call the function to see if user has won or lost
    hasUserWonOrLost();
});

});
