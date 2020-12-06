const path = require('path');

module.exports = {
  mode: 'production',
  entry: './source/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },
};
