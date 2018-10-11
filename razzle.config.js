const UltimateReactLoadable = require('@wicked_query/ultimatejs/lib/ultimate-react-loadable');
const sassLoader = require('@wicked_query/ultimatejs/lib/ultimate-sass');
const DLLLoader = require('@wicked_query/ultimatejs/lib/ultimate-webpack-dll');

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
        'react-bootstrap',
        'react-datetime',
        'react-final-form',
        'react-final-form-arrays',
        'react-helmet',
        'react-redux',
        'react-router-dom',
        'react-router-redux',
        'redux-devtools-extension',
        'redux-persist-cookie-storage',
        'redux-thunk'
      ]
    );

    return appConfig;
  }
};
