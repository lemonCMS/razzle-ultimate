'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = initializeStore;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _middleware = require('../../../slumdogjs-redux/src/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _reducer = require('./store/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNoopReducers(reducers, data) {
  if (!data) return {};
  return (0, _keys2.default)(data).reduce(function (prev, next) {
    return reducers[next] ? prev : (0, _assign2.default)({}, prev, (0, _defineProperty3.default)({}, next, function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return state;
    }));
  }, {});
}

function initializeStore(initialState, helpers) {
  // return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...[clientMiddleware(), thunkMiddleware])))
  var middleware = [(0, _middleware2.default)(helpers), _reduxThunk2.default];
  var enhancers = [process.env.NODE_ENV === 'production' ? _redux.applyMiddleware.apply(undefined, middleware) : (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, middleware))];
  var finalCreateStore = _redux.compose.apply(undefined, enhancers)(_redux.createStore);
  var reducers = (0, _reducer2.default)();
  var noopReducers = getNoopReducers(reducers, initialState);
  var store = finalCreateStore((0, _redux.combineReducers)((0, _assign2.default)({}, noopReducers, reducers)), initialState);

  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('./store/reducer', function () {
      /* eslint-disable-next-line */
      var reducer = require('./store/reducer');
      reducer = (0, _redux.combineReducers)((reducer.__esModule ? reducer.default : reducer)(store.asyncReducers));
      store.replaceReducer(reducer);
    });
  }

  return store;
}