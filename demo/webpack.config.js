const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    library: 'reanimate-demo',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
};
