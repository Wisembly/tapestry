var utils = require('uo-node-utils');
var opts = require('../../opts');

module.exports = function (cb) {
  var files = ['./bower.json', './package.json'];
  var lastRelease = '"version": "' + opts.lastRelease.name;
  var nextRelease = '"version": "' + opts.nextRelease.name;

  files.forEach(function (path, i) {
    utils.replaceInFile(path, lastRelease, nextRelease)
  });

  return cb(null);
};
