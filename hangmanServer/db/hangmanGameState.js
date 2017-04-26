var mongoose = require('mongoose');
const randomWords = require('./random-words');

const INCORRECT_GUESS_LIMIT = 10;

let hangmanSchema = mongoose.Schema({
    hiddenWord: String,
    guesses: String,
    incorrectGuesses: String,
    incorrectGuessCount: Number,
    gameOver: Boolean,
    secretWord: String
});

hangmanSchema.methods.maskSecretWord = function () {
    this.secretWord = '';
    return  this;
}

hangmanSchema.methods.addGuess = function (guess) {
    this.guesses += guess;
    this.incorrectGuesses += this.secretWord.indexOf(guess) === -1 ? guess : '';
    this.incorrectGuessCount += this.secretWord.indexOf(guess) === -1 ? 1 : 0;

    let hiddenWord = '';
    for (let i = 0; i < this.secretWord.length; i++) {
        if (this.guesses.indexOf(this.secretWord[i]) === -1) {
            hiddenWord += '_';
        } else {
            hiddenWord += this.secretWord[i];
        }
    }

    this.hiddenWord = hiddenWord;
    
    this.gameOver = this.incorrectGuessCount 
        >= INCORRECT_GUESS_LIMIT || hiddenWord.indexOf('_') === -1;
}

let HangmanGameState = mongoose.model('HangmanGameState', hangmanSchema);

exports.HangmanGameState = HangmanGameState;

exports.findAll = function () {
    return HangmanGameState.find().exec();
}

// returns the promise
// .then(function (hangman) {console.log(hangman)});
exports.findById = function (req) {
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

    if (!req.body.guess) {
        return Promise.reject('The guess must be a valid character.');
    }

    return HangmanGameState.findById(req.params.id).exec().then(function (hangman) {
        hangman.addGuess(guess);
        return hangman.save();
    }).then(function (hangman) {
        return Promise.resolve(hangman.maskSecretWord());
    });
};

const getInitialGameState = function() {
    let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
    let initialGameState = {hiddenWord: randomWord.replace(/([a-z])/g, '_'),
        guesses: '',
        incorrectGuesses: '',
        incorrectGuessCount: 0,
        gameOver: false,
        secretWord: randomWord
    }

    return initialGameState;
}

exports.getInitialGameState = getInitialGameState;

exports.getNewGameState = function() {
    return HangmanGameState.create(getInitialGameState()).then(function (hangman) {
        return Promise.resolve(hangman.maskSecretWord());
    });
}