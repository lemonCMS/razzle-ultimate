'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxPersistCookieStorage = require('redux-persist-cookie-storage');

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _cookiesJs = require('cookies-js');

var _cookiesJs2 = _interopRequireDefault(_cookiesJs);

var _auth = require('./redux/store/auth');

var _PersistServer = require('../../slumdogjs-persist-component/src/PersistServer');

var _PersistServer2 = _interopRequireDefault(_PersistServer);

var _PersistComponent = require('../../slumdogjs-persist-component/src/PersistComponent');

var _PersistComponent2 = _interopRequireDefault(_PersistComponent);

var _counter = require('./redux/store/counter');

var _store = require('./redux/store');

var _store2 = _interopRequireDefault(_store);

var _client = require('../../slumdogjs-core/src/client');

var _client2 = _interopRequireDefault(_client);

var _routes2 = require('./routes');

var _routes3 = _interopRequireDefault(_routes2);

var _Error = require('./containers/Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookiesStorage = new _reduxPersistCookieStorage.CookieStorage(_cookiesJs2.default, {
  setCookieOptions: {
    path: '/'
  }
});

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var providers, state, reduxWrapper, awaitRender;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          providers = { cookies: cookiesStorage };
          state = window.__PRELOADED_STATE__ || {};

          reduxWrapper = function reduxWrapper(ultimate) {
            return _react2.default.createElement(
              _PersistComponent2.default,
              {
                storage: cookiesStorage,
                modules: [{ counters: (0, _counter.saveAndRestoreCookie)() }, { auth: (0, _auth.authRestore)() }]
              },
              _react2.default.createElement(
                _PersistComponent2.default,
                {
                  storage: _localforage2.default,
                  modules: [{ counters: (0, _counter.saveAndRestoreLocal)() }]
                },
                ultimate
              )
            );
          };

          awaitRender = function awaitRender(_ref2) {
            var store = _ref2.store;

            var promise = [];
            var restoreState = (0, _PersistServer2.default)({
              store: store,
              storage: cookiesStorage,
              modules: [{ auth: (0, _auth.authRestore)() }]
            });
            promise.push(restoreState);
            return _promise2.default.all(promise);
          };

          (0, _client2.default)(_routes3.default, { initializeStore: _store2.default, state: state, providers: providers }, reduxWrapper, awaitRender, _Error2.default);

          if (module.hot) {
            module.hot.accept('./routes', function () {
              /* eslint-disable-next-line */
              var _routes = require('./routes').default;
              (0, _client.trigger)(_routes);
            });
          }

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}))();