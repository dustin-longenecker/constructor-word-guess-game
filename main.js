var Word = require("./word");
var inquire = require("inquirer");
var isLetter = require("is-letter");

//instantiate variables
var words = ["rabbit"];
var word = new Word();
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedCorrect = 0;
var lettersGuessed = [];

//game clear
reset();
//start game
run();

//main function run
function run(){
  console.log(word.wordShow());
  //ask user for letter guess
  inquire.prompt([
    {
      type: "input",
      name: "guess",
      message: "Guess a letter: ",
      //validate letter using is-letter npm
      validate: function(guess) {
          if(isLetter(guess)){
            return true;
          }
          else {
            return false;
          }
        }
    }
  ]).then(function(user){
    //check if letter has already been guessed this round
    if(lettersGuessed.indexOf(user.guess) > -1){
      console.log("You have already guessed " + user.guess + ".");
      run();
      return;
    }

    checkGuess(user.guess);
    run();
  })
}

//check user guess
function checkGuess(guess){

  //check if user guess was correct
  for(var i = 0; i < word.letterArr.length; i++){
    //calls constructor function checkGuess and changes
    //correctGuess state to true if correct
    word.letterArr[i].checkGuess(guess);

  }
  // if(word.letterArr.indexOf(guess) > - 1){
  //   console.log("correct");
  // }
  //lets user know if letter was found in the word.w array
  if(word.w.indexOf(guess) > -1){
    console.log("correct");
    lettersGuessed.push(guess);
    guessedCorrect++;
    checkWin();
  }else {
    console.log("incorrect");
    lettersGuessed.push(guess);
    guessesLeft--;
    checkWin();
  }
}
//checks to see if user has guesses left or if the number of correct guesses
function checkWin(){
  if(guessesLeft < 1){
    console.log("you lose");
    reset();
  }
  else if (guessesLeft > 1 && word.w.length === guessedCorrect){
    // for(var i = 0; i < word.w.length; i++){
    //
    // }
    console.log("you win");
    reset();
  }
  else{
    console.log("You have " + guessesLeft + " guesses remaining.");
  }
}
//resets game
function reset(){
  word = new Word();
  var randomIndex = Math.floor((Math.random() * words.length));
  word.createWord(words[randomIndex]);

  wins = 0;
  losses = 0;
  guessesLeft = 10;
  guessedCorrect = 0;
  lettersGuessed = [];
}
