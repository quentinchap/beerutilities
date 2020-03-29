var path = require('path');

var BUILD_DIR = path.resolve(__dirname);

var config = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    beerType: path.resolve(__dirname, 'src/beerType.js'),
    fermentables: path.resolve(__dirname, 'src/fermentables.js'),
    hops: path.resolve(__dirname, 'src/hops.js'),
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    library: '[name].js',
    libraryTarget: 'umd',
    globalObject: "(typeof window !== 'undefined' ? window : this)",
  },
  externals: {},
  mode: 'production',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
