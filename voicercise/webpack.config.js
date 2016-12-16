var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: [
    './src/js/app.js'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname +'/build',
    filename: 'bundle.js',
    
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      presets: ["stage-0", "es2015", "react"]
      // include: path.join(__dirname, 'src/js')
    }]
  }
};
