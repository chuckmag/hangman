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

exports.HangmanGameState = HangmanGameState;

exports.findAll = function () {
    return HangmanGameState.find().exec();
}

// returns the promise
// .then(function (hangman) {console.log(hangman)});
exports.findById = function (req) {
  return HangmanGameState.findById(req.params.id).exec();
};


// returns the promise
// .then(function (hangman) {console.log(hangman)});
exports.findById = function (req) {
  return HangmanGameState.findById(req.params.id).exec();
};


// returns the promise
// .then(function (hangman) {console.log(hangman)});
exports.updateById = function (req) {

    var hangman = req.body;



    return HangmanGameState.findById(req.params.id).exec();
};

exports.getNewGameState = function() {

    var secretWord = 'thing';

    var hangmanGameState = new HangmanGameState({hiddenWord: "____",
        guesses: '',
        incorrectGuesses: '',
        incorrectGuessCount: 0,
        gameOver: false,
        secretWord: 'thing'
    });

    hangmanGameState.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(hangmanGameState);
        }
    });

    return new Promise(hangmanGameState);
}