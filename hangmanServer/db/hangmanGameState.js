var mongoose = require('mongoose');
var randomWords = require('./random-words');

var hangmanSchema = mongoose.Schema({
    hiddenWord: String,
    guesses: String,
    incorrectGuesses: String,
    incorrectGuessCount: Number,
    gameOver: Boolean,
    secretWord: String
});

hangmanSchema.methods.maskSecretWord = function () {
    return  new HangmanGameState({hiddenWord: this.hiddenWord,
        guesses: this.guesses,
        incorrectGuesses: this.incorrectGuesses,
        incorrectGuessCount: this.incorrectGuessCount,
        gameOver: this.gameOver,
        secretWord: ''
        });
}

hangmanSchema.methods.addGuess = function (guess) {
    this.guesses += guess;

    let hiddenWord = '';
    for (let i = 0; i < this.secretWord.length; i++) {
        if (this.guesses.indexOf(this.secretWord[i]) === -1) {
            hiddenWord += '_';
        } else {
            hiddenWord += this.secretWord[i];
        }
    }

    this.hiddenWord = hiddenWord;
}

var HangmanGameState = mongoose.model('HangmanGameState', hangmanSchema);

exports.HangmanGameState = HangmanGameState;

exports.findAll = function () {
    return HangmanGameState.find().exec();
}

// returns the promise
// .then(function (hangman) {console.log(hangman)});
exports.findById = function (req) {
    console.log("Finding the hangmanGameState with id: " + req.params.id);
    return HangmanGameState.findById(req.params.id).exec().then(function (hangman) {
        return Promise.resolve(hangman.maskSecretWord());
    });
};


// returns the promise
// .then(function (hangman) {console.log(hangman)});
exports.updateById = function (req) {
    var hangman = req.body;

    return HangmanGameState.findById(req.params.id).exec().then(function (hangman) {
        return Promise.resolve(hangman.maskSecretWord());
    });
};


// returns the promise
// .then(function (hangman) {console.log(hangman)});
exports.addGuess = function (req) {
    var guess = req.body.guess;
    
    HangmanGameState.findById(req.params.id).exec().then(function (hangman) {
        hangman.addGuess(guess);
        return hangman.save();
    }).then(function (hangman) {
        return Promise.resolve(hangman.maskSecretWord());
    })
};

exports.getNewGameState = function() {    
    let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];

    return HangmanGameState.create({hiddenWord: randomWord.replace(/([a-z])/g, '_'),
        guesses: '',
        incorrectGuesses: '',
        incorrectGuessCount: 0,
        gameOver: false,
        secretWord: randomWord
    }).then(function (hangman) {
        return Promise.resolve(hangman.maskSecretWord());
    });
}