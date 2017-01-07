var express = require('express');
var stormpath = require('express-stormpath');

var path = require('path')


/**
 * Create the Express application.
 */
var app = express();

// app.get("*", function(req, res){
//     res.sendFile(path.join(__dirname, "/index.html"))
// })

app.use(express.static("./"));


app.get('*', function(req, res){
  res.sendFile(__dirname+'/index.html');
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server listening on http://localhost:' + port);
});

