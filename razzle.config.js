const UltimateReactLoadable = require('./src/packages/ultimate/webpack/react-loadable');
const sassLoader = require('./src/packages/ultimate/webpack/sass');
const DLLLoader = require('./src/packages/ultimate/webpack/webpack-dll');
const RawLoader = require('./src/packages/ultimate/webpack/raw-loader');

module.exports = {
  modify: (baseConfig, {dev, target}) => {

    baseConfig.devtool = dev ? 'source-map' : '';
    let appConfig = Object.assign({}, baseConfig);
    appConfig = UltimateReactLoadable(sassLoader(appConfig, {dev, target}), {dev, target});
    appConfig = RawLoader(appConfig, {dev, target});


    console.log(appConfig.module.rules);
    appConfig = DLLLoader(appConfig, {dev, target},
      [

        'babel-runtime/core-js/array/from',
        'babel-runtime/core-js/get-iterator',
        'babel-runtime/core-js/is-iterable',
        'babel-runtime/core-js/json/stringify',
        'babel-runtime/core-js/number/is-integer',
        'babel-runtime/core-js/number/is-safe-integer',
        'babel-runtime/core-js/object/assign',
        'babel-runtime/core-js/object/create',
        'babel-runtime/core-js/object/define-property',
        'babel-runtime/core-js/object/get-own-property-descriptor',
        'babel-runtime/core-js/object/get-own-property-names',
        'babel-runtime/core-js/object/get-prototype-of',
        'babel-runtime/core-js/object/keys',
        'babel-runtime/core-js/object/set-prototype-of',
        'babel-runtime/core-js/promise',
        'babel-runtime/core-js/symbol',
        'babel-runtime/core-js/symbol/iterator',
        'babel-runtime/helpers/class-call-check',
        'babel-runtime/helpers/classCallCheck',
        'babel-runtime/helpers/create-class',
        'babel-runtime/helpers/createClass',
        'babel-runtime/helpers/defineProperty',
        'babel-runtime/helpers/extends',
        'babel-runtime/helpers/get',
        'babel-runtime/helpers/inherits',
        'babel-runtime/helpers/interop-require-default',
        'babel-runtime/helpers/interopRequireDefault',
        'babel-runtime/helpers/object-without-properties',
        'babel-runtime/helpers/objectWithoutProperties',
        'babel-runtime/helpers/possibleConstructorReturn',
        'babel-runtime/helpers/slicedToArray',
        'babel-runtime/helpers/to-consumable-array',
        'babel-runtime/helpers/toConsumableArray',
        'babel-runtime/helpers/typeof',

        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/react-fontawesome',
        'axios',
        'core-js',
        'lodash',
        'react',
        'redux',
        'classnames',
        'cookies-js',
        'prop-types',
        'nprogress',
        'moment',
        'localforage',
        'history',
        'multireducer',
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
