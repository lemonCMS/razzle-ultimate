const UltimateReactLoadable = require('./src/packages/ultimate-react-loadable');
const sassLoader = require('./src/packages/ultimate-sass');
const DLLLoader = require('./src/packages/ultimate-webpack-dll');

module.exports = {
  modify: (baseConfig, {dev, target}) => {

    baseConfig.devtool = dev ? 'source-map' : '';
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
        'react-dom',
        // 'react-bootstrap',
        'react-datetime',
        'react-final-form',
        'react-final-form-arrays',
        'react-helmet',
        'react-redux',
        'react-router-dom',
        'redux-devtools-extension',
        'redux-persist-cookie-storage',
        'redux-thunk'
      ]
    );

    return appConfig;
  }
};
