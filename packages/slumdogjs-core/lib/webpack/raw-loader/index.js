'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');

module.exports = function (baseConfig, _ref) {
  var dev = _ref.dev,
      target = _ref.target;

  var appConfig = (0, _assign2.default)({}, baseConfig);
  var fileLoaderFinder = makeLoaderFinder('file-loader');

  var jsRule = appConfig.module.rules.find(fileLoaderFinder);
  jsRule.exclude.push(/\.txt$/);

  appConfig.module.rules.push({
    test: /\.txt$/,
    use: [require.resolve('raw-loader')],
    include: [/src/]
  });

  return appConfig;
};