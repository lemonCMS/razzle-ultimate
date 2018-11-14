const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = (baseConfig, { dev }, settings = {}) => {
  const appConfig = Object.assign({}, baseConfig);


  if (!dev) {
    const fileLoaderFinder = makeLoaderFinder('babel-loader');
    const jsRule = appConfig.module.rules.find(fileLoaderFinder);
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
