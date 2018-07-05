const webpack = require("webpack");
const path = require("path");
const PACKAGE = require("./package.json");
const PACKAGE_NAME = PACKAGE.name;
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const config = {
  entry: "./public/js/index.js",
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    path: path.resolve(__dirname, "public/js/build"),
    filename: PACKAGE_NAME + ".js",
    publicPath: "/", //Where the js gets loaded from
    library: "teachwebrtc",
    libraryTarget: "umd"
  },
  stats: {
    colors: true,
    performance: true
  },
  mode: "production",
  optimization: {
    minimize: true
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      }
    })
  ]
};

module.exports = config;
