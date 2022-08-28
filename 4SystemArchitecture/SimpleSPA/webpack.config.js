//The path module provides utilities for working with file and directory paths
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
module.exports = {
  entry: [
    path.resolve(__dirname, './src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,  //files to exclude
        use: ['babel-loader']
      },
      // CSS and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.scss']  // files to load
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Simple SPA',
      template: path.resolve(__dirname, './src/index.html'),
    })
  ],
  devtool: 'source-map',  // dev tools for debugging
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};

