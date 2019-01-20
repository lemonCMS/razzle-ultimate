'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _prepare = require('./prepare');

var _prepare2 = _interopRequireDefault(_prepare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-return-assign: "error" */
var asyncMap = function asyncMap(arr, mapper) {
  var q = _promise2.default.resolve();
  /* eslint-disable-next-line */
  return _promise2.default.all(arr.map(function (v) {
    return q = q.then(function () {
      return mapper(v);
    });
  }));
};

exports.default = function (_ref) {
  var store = _ref.store,
      storage = _ref.storage,
      modules = _ref.modules;

  var preparedModules = (0, _prepare2.default)(modules);
  var promises = [];

  (0, _map3.default)(preparedModules, function (module, key) {
    promises.push(storage.getItem(key).then(function (item) {
      if (item !== null && item !== 'undefined') {
        try {
          var result = typeof item === 'string' ? JSON.parse(item) : item;
          module.restore({
            dispatch: store.dispatch,
            result: result,
            key: key,
            currentState: {}
          });
        } catch (e) {
          console.log('Json parse failed', e);
        }
      }
    }));
  });

  return asyncMap(promises, function (promise) {
    return promise;
  });
};