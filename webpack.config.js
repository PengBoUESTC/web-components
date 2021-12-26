const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/main',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    hot: true,
    https: false,
    port: 80,
    host: 'test.jd.com',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.p?$/,
        use: 'html-loader',
        exclude: [/node_modules/, /public/],
      },
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/public/index.html')
    }),
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@components": path.join(__dirname, './src/components'),
      "@template": path.join(__dirname, './src/template'),
    }
  },
};