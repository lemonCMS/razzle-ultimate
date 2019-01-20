'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trigger = exports.rehydrate = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = client;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _apiClient = require('../apiClient');

var _apiClient2 = _interopRequireDefault(_apiClient);

var _ReduxAsyncConnect = require('../ReduxAsyncConnect');

var _ReduxAsyncConnect2 = _interopRequireDefault(_ReduxAsyncConnect);

var _Ultimate = require('../Ultimate');

var _Ultimate2 = _interopRequireDefault(_Ultimate);

var _Providers = require('../context/Providers');

var _Providers2 = _interopRequireDefault(_Providers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _store = {};
var _providers = {};
var _wrapper = function _wrapper(component) {
  return component;
};

var rehydrate = exports.rehydrate = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_routes, _ref, wrapper, ErrorPage) {
    var store = _ref.store,
        providers = _ref.providers;
    var ultimate;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ultimate = _react2.default.createElement(_Ultimate2.default, { routes: _routes });

            (0, _reactDom.hydrate)(_react2.default.createElement(
              _Providers2.default.Provider,
              { value: { providers: providers } },
              _react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(
                  _reactRouterDom.BrowserRouter,
                  null,
                  _react2.default.createElement(
                    _ReduxAsyncConnect2.default,
                    { routes: _routes, store: store, helpers: providers, errorPage: ErrorPage },
                    wrapper(ultimate, { store: store, providers: providers })
                  )
                )
              )
            ), document.getElementById('root'));

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function rehydrate(_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var trigger = exports.trigger = function trigger(_routes) {
  return rehydrate(_routes, { store: _store, providers: _providers }, _wrapper);
};

function client(routes, _ref3, wrapper, awaitRender) {
  var initializeStore = _ref3.initializeStore,
      state = _ref3.state,
      providers = _ref3.providers;

  var _this = this;

  var _ErrorPage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            providers.client = (0, _apiClient2.default)();
            providers.history = (0, _createBrowserHistory2.default)();
            _store = initializeStore(state, providers);
            _providers = providers;
            _wrapper = wrapper;

            _context2.next = 7;
            return _reactLoadable2.default.preloadReady();

          case 7:

            if (typeof awaitRender === 'function') {
              awaitRender({ store: _store, provider: _providers }).then(function () {
                rehydrate(routes, { store: _store, providers: _providers }, _wrapper, _ErrorPage);
              });
            } else {
              rehydrate(routes, { store: _store, providers: _providers }, _wrapper, _ErrorPage);
            }

          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }))();
}