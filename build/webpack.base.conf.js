var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, '../dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
};
