// This code was realized by the Soft. Engr. Felipe Gonzalez
// Contact:, felipe.dev.engr.js@gmail.com 


const path = require('path');

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.resolve(__dirname, '/build'),
        filename: 'bundle.js'
    },

/* 

module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: './build',
    filename: bundle.js
  },
*/
  module: {
    loaders: [
      // loaders is part of the code in the ES6 JS code in Udemy.com 
      //  regular expression in the test 
      {
        loader: 'babel-loader', 
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }

}

// updated to the recent version 