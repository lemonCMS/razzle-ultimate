'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = function (baseConfig, _ref) {
  var dev = _ref.dev;
  var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var appConfig = (0, _assign2.default)({}, baseConfig);

  if (!dev) {
    var fileLoaderFinder = makeLoaderFinder('babel-loader');
    var jsRule = appConfig.module.rules.find(fileLoaderFinder);
    if (jsRule.use[0]) {
      if (!jsRule.use[0].options) {
        jsRule.use[0].options = {};
      }

      if (!jsRule.use[0].options.plugins) {
        jsRule.use[0].options.plugins = [];
      }

      if (jsRule.use[0].options.plugins) {
        jsRule.use[0].options.plugins.push('lodash');
      }
    }
  }

  appConfig.plugins.push(new LodashModuleReplacementPlugin(settings));

  return appConfig;
};