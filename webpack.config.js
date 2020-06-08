const join = require('path').join

module.exports = {
  entry: "./src/index.js",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "PrettyJSONView"
  },
  devtool: "source-map",
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
};