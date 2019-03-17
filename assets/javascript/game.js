$(document).ready(function () {

  var randomNum; // holds random number for user to guess
  var wins = 0; // score counter
  var losses = 0; // lose counter
  var score; //score counter

  //array to hold or dragon bal id's
  var charVal = [$("#goku"), $("#vegeta"), $("#broly"), $("#jiren")];

  // new game function. Generate new random number between 19 to 120
  // and reinitializes are variables
  function resetGame() {
    score = 0;
    $("#total-score").empty().append("Your total: " + score);

    // generate random number between 19 and 120
    randomNum = [Math.floor(Math.random() * (120 - 19 + 1) + 19)];
    $("#random-number").empty().append("Random number: " + randomNum);

    // loop through and generate random number for each dragon ball character
    for (var i = 0; i < charVal.length; i++) {

      charValRandom = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
      // add charVal attribute to our dragon ball character and attach a random value
      charVal[i].attr("charVal", charValRandom);
    }
  }

  resetGame();

  // initially display our wins and losses to the DOM
  $("#win-text").append("Wins: " + wins);
  $("#lose-text").append("Losses: " + losses);

  // click event handler any class with dbz image clicked we...
  $(".dbz-image").on("click", function () {
    // get the value of the dragon ball character
    var charValue = $(this).attr("charVal");

    // convert from string to integer
    charValue = parseInt(charValue);

    // increment score counter
    score = score + charValue;

    // output to the total-score id element in our html page
    $("#total-score").empty().append("Your total: " + score);

    // determine win condition, increment our win counter and append to our win-text id. Then reset game
    if (score == randomNum) {
      wins++;
      $("#win-text").empty().append("Wins: " + wins);
      resetGame();
    }
    // lose condition, increment our losses counter and append to our lose-text id. Then reset game
    else if (score > randomNum) {
      losses++;
      $("#lose-text").empty().append("Losses: " + losses);
      resetGame();
    }
  });

});