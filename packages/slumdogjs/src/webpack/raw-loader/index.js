const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');

module.exports = (baseConfig, {dev, target}) => {
  const appConfig = Object.assign({}, baseConfig);
  const fileLoaderFinder = makeLoaderFinder('file-loader');

  const jsRule = appConfig.module.rules.find(fileLoaderFinder);
  jsRule.exclude.push(/\.txt$/);

  appConfig.module.rules.push({
    test: /\.txt$/,
    use: ['raw-loader'],
  });


  return appConfig;

};
