const path = require("path");

// entry point -> output bundle file
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
};

//loader for babel
// 1. install babel-core@6.25.0 babel-loader@7.1.1
// 2. install
