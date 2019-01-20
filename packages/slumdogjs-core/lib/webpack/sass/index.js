'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var autoprefixer = require('autoprefixer');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var PostCssFlexBugFixes = require('postcss-flexbugs-fixes');
var paths = require('razzle/config/paths');

var defaultOptions = {
  postcss: {
    dev: {
      sourceMap: true,
      ident: 'postcss'
    },
    prod: {
      sourceMap: false,
      ident: 'postcss'
    },
    plugins: [PostCssFlexBugFixes, autoprefixer({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009'
    })]
  },
  sass: {
    dev: {
      sourceMap: true,
      includePaths: [paths.appNodeModules]
    },
    prod: {
      sourceMap: false,
      includePaths: [paths.appNodeModules]
    }
  },
  css: {
    dev: {
      sourceMap: true,
      importLoaders: 1,
      modules: false
    },
    prod: {
      sourceMap: false,
      importLoaders: 1,
      modules: false,
      minimize: true
    }
  },
  style: {},
  resolveUrl: {
    dev: {},
    prod: {}
  }
};

module.exports = function (defaultConfig, _ref, webpack) {
  var target = _ref.target,
      dev = _ref.dev;
  var userOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var isServer = target !== 'web';
  var constantEnv = dev ? 'dev' : 'prod';

  var config = (0, _assign2.default)({}, defaultConfig);

  var options = (0, _assign2.default)({}, defaultOptions, userOptions);

  var styleLoader = {
    loader: require.resolve('style-loader'),
    options: options.style
  };

  var cssLoader = {
    loader: require.resolve('css-loader'),
    options: options.css[constantEnv]
  };

  var resolveUrlLoader = {
    loader: require.resolve('resolve-url-loader'),
    options: options.resolveUrl[constantEnv]
  };

  var postCssLoader = {
    loader: require.resolve('postcss-loader'),
    options: (0, _assign2.default)({}, options.postcss[constantEnv], {
      plugins: function plugins() {
        return options.postcss.plugins;
      }
    })
  };

  var sassLoader = {
    loader: require.resolve('sass-loader'),
    options: options.sass[constantEnv]
  };

  config.module.rules = [].concat((0, _toConsumableArray3.default)(config.module.rules), [{
    test: /\.(sa|sc)ss$/,
    use: isServer ? [{
      loader: require.resolve('css-loader/locals'),
      options: options.css[constantEnv]
    }] : [dev ? styleLoader : MiniCssExtractPlugin.loader, cssLoader, resolveUrlLoader, postCssLoader, sassLoader]
  }]);

  return config;
};