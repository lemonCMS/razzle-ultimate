const UltimateReactLoadable = require('./src/packages/ultimate/plugins/ultimate-react-loadable');
const sassLoader = require('./src/packages/ultimate/plugins/ultimate-sass');

module.exports = {
  modify: (baseConfig, {dev, target}) => {
    let appConfig = Object.assign({}, baseConfig);
    appConfig = UltimateReactLoadable(sassLoader(appConfig, {dev, target}), {dev, target});

    return appConfig;
  }
};
