const path = require("path");
const webpack = require("webpack");

module.exports = {
 mode: "development",
 output: {
   path: path.resolve(__dirname, "dist"),
   filename: "bundle.js"
 },
 module: {
   rules: [{
     test: /\.(js|jsx)$/,
     exclude: /node_modules/,
     loader: 'babel-loader'}]}
};
