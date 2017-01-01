var path = require('path');
var webpack = require('webpack');
 
// module.exports = {
//   entry: [
//     './src/js/app.js'
//   ],
//   devtool: 'eval-source-map',
//   output: {
//     path: __dirname +'/build',
//     filename: '/bundle.js',
    
//   },
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loaders: ['babel'],
//       presets: ["stage-0", "es2015", "react"]
//       // include: path.join(__dirname, 'src/js')
//     }]
//   }
// };

module.exports = {
  
  // This code will be compiled 
  entry: "./src/js/app.js",

  // Then output into this file
  output: {
    path:"./build/",
    filename: "bundle.js"
  },


  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // These are the specific transformations we'll be using. 
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}
