'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _reduxPersistCookieStorage = require('redux-persist-cookie-storage');

var _cookies = require('cookies');

var _cookies2 = _interopRequireDefault(_cookies);

var _server = require('../../slumdogjs-core/src/server');

var _server2 = _interopRequireDefault(_server);

var _PersistServer = require('../../slumdogjs-persist-component/src/PersistServer');

var _PersistServer2 = _interopRequireDefault(_PersistServer);

var _store = require('./redux/store');

var _store2 = _interopRequireDefault(_store);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactLoadable = require('../build/react-loadable.json');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _counter = require('./redux/store/counter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server2.default.use(_cookies2.default.express());

var devProxy = {
  '/api': {
    target: process.env.RAZZLE_PROXY_HOST,
    // pathRewrite: {'^/api': '/'},
    changeOrigin: true,
    onProxyReq: function onProxyReq(proxyReq, req) {
      if (req.cookies && req.cookies.get('token')) {
        proxyReq.setHeader('authorization', 'Bearer ' + req.cookies.get('token'));
      }
    }
  }
};
if (devProxy) {
  /* eslint-disable-next-line */
  var proxyMiddleware = require('http-proxy-middleware');
  (0, _keys2.default)(devProxy).forEach(function (context) {
    _server2.default.use(proxyMiddleware(context, devProxy[context]));
  });
}

_server2.default.use(function (req, res, next) {
  next();
}).get('/*', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var cookies, cookieJar, cookiesStorage, providers, wrapper, awaitRender;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cookies = new _cookies2.default(req, res);
            cookieJar = new _reduxPersistCookieStorage.NodeCookiesWrapper(cookies);
            cookiesStorage = new _reduxPersistCookieStorage.CookieStorage(cookieJar, {
              setCookieOptions: {
                path: '/'
              }
            });
            providers = {
              cookies: cookiesStorage
            };

            wrapper = function wrapper(node) {
              return node;
            };

            awaitRender = function awaitRender(_ref2) {
              var store = _ref2.store;

              var promise = [];
              promise.push((0, _PersistServer2.default)({
                store: store,
                storage: cookiesStorage,
                modules: ['auth', { counters: (0, _counter.saveAndRestoreCookie)() }]
              }));

              return _promise2.default.all(promise);
            };

            (0, _server.render)({ req: req, res: res }, _reactLoadable2.default, _routes2.default, { initializeStore: _store2.default, providers: providers }, wrapper, awaitRender);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

exports.default = _server2.default;