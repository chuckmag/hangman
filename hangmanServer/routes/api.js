var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost/hangmanGame');
var db = mongoose.connection;

var resources = [
  'hangmanGameState'
];

var repositories = {};

for (var i = 0; i < resources.length; i++) {
  var resource = resources[i];
  repositories[resource] = require('../db/' + resource);
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('Successfully connected to MongoDB.');

  router.get('/:resource', function (req, res, next) {
    res.type('application/json');
    repositories[req.params.resource].findAll().then(function (resources){
      console.log(resources);
      res.json(resources);
    });
  });

  router.get('/:resource/:id', function (req, res, next) {
    res.type('application/json');
    repositories[req.params.resource].findById(req).then(function (resource) {
        console.log(resource);
        res.json(hangman);
    });
  });

  router.put('/:resource/:id', function (req, res, next) {
    res.type('application/json');
    repositories[req.params.resource].updateById(req).then(function (hangman) {
        console.log(hangman);
        res.json(hangman);
    });
  });

  // this is only for testing purposes
  router.post('/:resource/', function (req, res, next) {
    res.type('application/json');

    req.body.HangmanGameState;
    repositories[req.params.resource].create(req).then(function (hangman) {
        console.log(hangman);
        res.json(hangman);
    });
  });

  router.get('/:resource/getNewGameState/', function (req, res, next) {
      repositories[req.params.resource].getNewGameState().then(function (hangmang) {
          console.log(hangman);
          res.json(hangman);
      });
  });
});

module.exports = router;
