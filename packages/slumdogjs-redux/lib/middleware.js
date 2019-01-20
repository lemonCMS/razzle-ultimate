'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = clientMiddleware;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clientMiddleware(helpers) {
  return function (_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action((0, _assign2.default)({ dispatch: dispatch }, helpers));
        }

        var promise = action.promise,
            types = action.types,
            rest = (0, _objectWithoutProperties3.default)(action, ['promise', 'types']);

        if (!promise) {
          return next(action);
        }

        var _types = (0, _slicedToArray3.default)(types, 3),
            REQUEST = _types[0],
            SUCCESS = _types[1],
            FAILURE = _types[2];

        next((0, _assign2.default)({}, rest, { type: REQUEST }));

        var actionPromise = promise(helpers, dispatch);
        actionPromise.then(function (result) {
          return next((0, _assign2.default)({}, rest, { result: result, type: SUCCESS }));
        }, function (error) {
          return next((0, _assign2.default)({}, rest, { error: error, type: FAILURE }));
        }).catch(function (error) {
          // eslint-disable-next-line
          console.error('MIDDLEWARE ERROR:', error);
          next((0, _assign2.default)({}, rest, { error: error, type: FAILURE }));
        });

        return actionPromise;
      };
    };
  };
}