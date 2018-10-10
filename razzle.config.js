const UltimateReactLoadable = require('./src/packages/ultimate/plugins/ultimate-react-loadable');
const sassLoader = require('./src/packages/ultimate/plugins/ultimate-sass');
const DLLLoader = require('./src/packages/ultimate/plugins/ultimate-webpack-dll');

module.exports = {
  modify: (baseConfig, {dev, target}) => {
    let appConfig = Object.assign({}, baseConfig);
    appConfig = UltimateReactLoadable(sassLoader(appConfig, {dev, target}), {dev, target});
    appConfig = DLLLoader(appConfig, {dev, target},
      [
        'axios',
        'core-js',
        'lodash',
        'react',
        'redux',
        'nprogress',
        'react-router',
        'react-router-config',
        'final-form',
        'final-form-arrays',
        'react-dom'
      ]
    );

    return appConfig;
  }
};
