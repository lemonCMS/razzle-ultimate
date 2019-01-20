'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = createReducers;

var _multireducer = require('multireducer');

var _multireducer2 = _interopRequireDefault(_multireducer);

var _reducer = require('../../../../slumdogjs-redux/src/store/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('../../../../slumdogjs-redux/src/routeState/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _storage = require('./storage');

var _storage2 = _interopRequireDefault(_storage);

var _counter = require('./counter');

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createReducers(asyncReducers) {
  return (0, _assign2.default)({
    store: _reducer2.default,
    routesState: _reducer4.default,
    auth: _auth2.default,
    storage: _storage2.default,
    counters: (0, _multireducer2.default)({
      counterCookie: _counter2.default,
      counterLocalStorage: _counter2.default
    })
  }, asyncReducers);
}