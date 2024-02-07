// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // Your webpack configuration goes here
  plugins: [
    // Add any plugins you need
    // For example, if you want to use the IgnorePlugin as mentioned before
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/node$/,
      contextRegExp: /browserslist$/,
    }),
  ],
};
