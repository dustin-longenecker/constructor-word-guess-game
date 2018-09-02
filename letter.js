var colors = require("colors");

//Letter constructor accepts a char to instantiate
var Letter = function (char){
  this.letter = char;
  //status of letter
  this.correctGuess = false;
  //checks status and returns either the letter or _
  this.toString = function() {
	if (this.correctGuess) {
		return this.letter;
	 } else {
		return "_";
	 }
  }
  //checks user guess and sets this.correctGuess to true if it matches
  this.checkGuess = function(guess) {
    // console.log(`letter checked: ${this.letter.toLowerCase()}`);
    // console.log(`letter guessed: ${guess.toLowerCase()}`);
    if (this.letter.toLowerCase() === guess.toLowerCase()) {
    // console.log("in 'if'!!!")
    this.correctGuess = true;
    }
  }
}
// L.checkLetter("l");
//export file to be used in Word constructor
module.exports = Letter;
