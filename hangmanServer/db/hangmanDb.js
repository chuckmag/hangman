var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MongoDb.');

  var hangmanSchema = mongoose.Schema({
    hiddenWord: String,
    guesses: String,
    incorrectGuesses: String,
    incorrectGuessCount: Number,
    gameOver: Boolean,
    secretWord: String
  });

  var HangmanGameState = mongoose.model('HangmanGameState', hangmanSchema);

  var testHangmanGameState = new HangmanGameState({hiddenWord: "____",
                guesses: '',
                incorrectGuesses: '',
                incorrectGuessCount: 0,
                gameOver: false,
                secretWord: 'thing'
              });

  console.log(testHangmanGameState);

  testHangmanGameState.save();
  HangmanGameState.findById('58ed72f0cc723446e848ae56').exec(function(err, animals) {
    console.log(animals);
  });

  var query = HangmanGameState.find({ 'secretWord':'thing'});

  HangmanGameState.find(function(err, hangmanGameStates) {
    console.log(hangmanGameStates);
  });
  
});

module.exports = db;
