var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var api = require('./routes/api');
var index = require('./routes/index');

//var db = require('./db/hangmanDb');

var app = express();


// caching stuff.
// var cache = require('memory-cache');

// // now just use the cache 
 
// cache.put('foo', 'bar');
// console.log(cache.get('foo'));
 
// // that wasn't too interesting, here's the good part 
 
// cache.put('houdini', 'disappear', 100, function(key, value) {
//     console.log(key + ' did ' + value);
// }); // Time in ms 
 
// console.log('Houdini will now ' + cache.get('houdini'));
 
// setTimeout(function() {
//     console.log('Houdini is ' + cache.get('houdini'));
// }, 200);



// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', api)
app.use('/', express.static('bin/angular'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
