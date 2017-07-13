const path = require("path");
const webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  cache: true,

  entry: {
    "processhub-plugin": [
      "babel-polyfill",
      "./src/pluginhandler/router.tsx"]
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[chunkhash].[name].bundle.js",
    path: path.resolve(__dirname + "/public/dist"),
    publicPath: "/dist"
  },
  watch: false,

  devtool: "source-map",

  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader?" + JSON.stringify({ transpileOnly: true }),
        query: {
          presets: ['es2015']
        }
      },
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "react",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  node: {
    dns: "mock",
    net: "mock"
  },
};