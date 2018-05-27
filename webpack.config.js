const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'client/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    //new CleanWebpackPlugin(['client/js'])
  ]
}