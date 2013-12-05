/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var app = express();

// all environments
app.set('port', config.get('port') || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//routes
require('routes')(app);

http.createServer(app).listen(config.get('port'), function(){
  console.log('Express server listening on port ' + config.get('port'));
});
