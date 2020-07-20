const join = require('path').join

module.exports = {
  entry: "./src/index.js",
  output: {
    path: join(__dirname, "umd"),
    libraryTarget: "umd",
    library: "PrettyJSONViewPlugin",
    libraryExport: 'default'
  },
  devtool: "source-map",
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
};
