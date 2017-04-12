var mongoose = require('mongoose');

var hangmanSchema = mongoose.Schema({
    hiddenWord: String,
    guesses: String,
    incorrectGuesses: String,
    incorrectGuessCount: Number,
    gameOver: Boolean,
    secretWord: String
});

var HangmanGameState = mongoose.model('HangmanGameState', hangmanSchema);


exports.findAll = function () {
    return HangmanGameState.find().exec();
}

exports.HangmanGameState = HangmanGameState;

// returns the promise
// .then(function (hangman) {console.log(hangman)});
exports.findById = function (req) {
  return HangmanGameState.findById(req.params.id).exec();
};