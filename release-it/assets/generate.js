var async = require('async');
var exec = require('../tools/exec');
var log = require('../tools/log');
var opts = require('../opts');
var pug = require('pug');
var utils = require('uo-node-utils');

module.exports = function (cb) {
  async.waterfall([
    function (_cb) {
      exec('rm -rf dist/**/*.html temp', function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      exec('gulp icons', function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      exec('gulp sass', function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      exec('gulp stats --' + opts.nextRelease.name, function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      exec('gulp scripts', function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      var stats = require('../../dist/stats/' + opts.nextRelease.name + '.json');
      stats.version = opts.nextRelease.name

      utils.create.file('temp/statsOptions.json', JSON.stringify({ stats: [stats] }))

      exec('pug website/views/statistics.pug -O temp/statsOptions.json --out dist', function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      var components = require('../../website/components/components.json').components;

      components.forEach(function (component) {
        var filename = component.name.toLowerCase();
        utils.create.file('temp/' + filename + '.json', JSON.stringify({
          components: components,
          component: component,
          version: opts.nextRelease.name,
        }));

        var html = pug.renderFile('website/views/components.pug', {
          components: components,
          component: component,
          version: opts.nextRelease.name,
        })

        utils.create.file('dist/components/' + filename + '.html', html);
      })

      return _cb(null)
    },

    function (_cb) {
      exec('pug website/views/{index,404,sass-utils,getting-started}.pug --out dist', function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      cb(null)
    },
  ]);
};
