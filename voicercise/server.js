var express = require('express');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');

var webpack = require('webpack');
var config = require('./webpack.config');
//---------------------------------------------------
var app = express();
var compiler = webpack(config);
var path = require('path');
//---------------------------------------------------
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
//---------------------------------------------------
 
 app.get('/css/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/css/style.css'));
});

 app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/html/index.html'));
});
  app.use('/css', express.static(__dirname + './src/css'));

//---------------------------------------------------
app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));
//---------------------------------------------------
app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res){
  function writeError(message){
	res.status(400);
	res.json({ message: message, status: 400 });
	res.end();
}
  function saveAccount() {
  	req.user.givenName = req.body.givenName;
  	req.user.surname = req.body.surname;
  	req.user.email = req.body.email;

  	req.user.save(function (err){
  		if(err) {
  			return writeError(err.user.Message || err.message);
  		}
  		res.end();
  	});
  }

  if (req.body.password) {
  	var application = req.app.get('stormpathApplication');

  	application.authenticateAccount({
  		username: req.user.username,
  		password: req.body.existingPassword
  	}, function (err) {
  		if (err) {
  			return writeError('The existing password that you entered was incorrect.');
  		}
  		req.user.password = req.body.password;

  		saveAccount();
  	})
  } 
  else{
  	saveAccount();
  }
});
//---------------------------------------------------
app.on('stormpath.ready', function () {
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
});


