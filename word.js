//require Letter constructor
var Letter = require("./letter");

//Word constructor accepts word in order to construct
var Word = function() {
  //constructs empty array to hold letters
  this.letterArr = [];
  //
  this.createWord = function(word){
    this.w = word.split("");
    for (var i = 0; i < this.w.length; i++) {

                this.letter = new Letter(this.w[i]);
                this.letterArr.push(this.letter);
            }

            // console.log(this.letterArr);
        }
  this.wordShow = function() {
        var word = "";
        for (var i = 0; i < this.letterArr.length; i++) {
            word += this.letterArr[i].toString() + " ";
        }
        return word;
    }
}

module.exports = Word;

/* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`) */
