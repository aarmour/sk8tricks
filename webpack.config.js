var config = require('hjs-webpack');

module.exports = config({
  // Entry point
  in: 'src/js/App.js',

  // Output directory
  out: '_site',

  // Destroy and re-create the output directory
  clearBeforeBuild: true,

  // Don't generate index.html
  html: false
});
