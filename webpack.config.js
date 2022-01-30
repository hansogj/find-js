// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/find.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'find.js',
    libraryTarget: 'umd',
    library: 'find'
  },
  devtool: "source-map",
  plugins: [ ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

    ],
  },
};

module.exports = () => {
if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
} 
  return config;
};
