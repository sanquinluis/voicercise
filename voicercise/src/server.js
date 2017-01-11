var express = require('express');
var stormpath = require('express-stormpath');
var path = require('path');
var bodyParser = require('body-parser')
var cors = require('cors');
var mongoose = require('mongoose');

var request = require('request');



// ----------------------------------------------------
// mongoose.connect("mongodb://localhost/Voicercise")

// var db = mongoose.connection;

// // show any mongoose errors
// db.on('error', function(err) {
//   console.log('Mongoose Error: ', err);
// });

// // once logged in to the db through mongoose, log a success message
// db.once('open', function() {
//   console.log('Mongoose connection successful.');
// });

// var User = require("./models/User.js");
// ----------------------------------------------------

/**
 * Create the Express application.
 */
var app = express();

app.use(cors());

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.use(express.static(process.cwd() + '/static'));



app.use(stormpath.init(app, {
  website:true
}));

app.get('/secret', function(req, res){
	
	console.log("I'm in secret");

    var queryUrl = "https://api.stormpath.com/v1/applications/3heghs88y7nfiiQUj4dE0i/accounts";
	request({url:queryUrl,   auth: {
    user: '3VWJ6HYRJIKF365K199X08LA0',
    pass: '3Wu+Jp3SD2KxT9mfrqAQZHAFDRL2T5FzDAtArICMmCk'
  }}, function(err, response, body){

		if(!err && response.statusCode == 200){
			movieInfo = JSON.parse(body);
			res.send(movieInfo);
		}
		else{
			res.send(err)
		}
	})
})


app.get('/*', function(req, res){
  res.sendFile(__dirname+'/static/index.html');
})

var port = process.env.PORT || 3000;

app.on('stormpath.ready', function() {
  app.listen(port, function () {
    console.log('Server listening on http://localhost:' + port);
  });
})

