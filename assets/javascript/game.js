$(document).ready(function() {

var randomNum; // holds random number for user to guess
var wins = 0; // score counter
var losses = 0; // lose counter
var score; //score counter

var charVal = [$("#goku"), $("#vegeta"), $("#broly"), $("#jiren")];

// New game function. Generate new random number between 19 to 120
// and reinitializes are variables
function resetGame() {
  score = 0;
  $("#total-score").empty().append("Your total: " + score);

  // Generate random number between 19 and 120
  randomNum = [Math.floor(Math.random() * (120 - 19 + 1) + 19)];
  $("#random-number").empty().append("Random number: " + randomNum);

  // Loop through and generate random number for each dragon ball character
  for (var i = 0; i < charVal.length; i++) {
    charValRandom = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    charVal[i].attr("charVal", charValRandom);
    console.log("random crystal value " + charValRandom);
    console.log(charVal.length);
  }
}

resetGame();

$("#win-text").append("Wins: " + wins);
$("#lose-text").append("Losses: " + losses);

$(".dbz-image").on("click", function(){
  //console.log("clicked"); 
  var charValue = $(this).attr("charVal");
  //console.log("crystal value: " + charValue);
  
  //convert from string to integer
  charValue = parseInt(charValue); 
  //console.log("integer value: " + charValue);
  
  //increment score counter
  score = score + charValue;
  $("#total-score").empty().append("Your total: " + score);
  //console.log(score);

  if(score == randomNum) {
    wins++;
   // console.log("you win! " + wins);
    $("#win-text").empty().append("Wins: " + wins);
    resetGame();
  }
  else if (score > randomNum) {
    losses++;
    //console.log("you lose! " + losses);
    $("#lose-text").empty().append("Losses: " + losses);
    resetGame();
  }
});

});