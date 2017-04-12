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
    repositories[req.params.resource].findAll().then(function (hangmans){
      console.log(hangmans);
    });
  });

  router.get('/:resource/:id', function (req, res, next) {
    res.type('application/json');
    //repositories[req.params.resource].findOne(req, res);
  });

});

module.exports = router;
