'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STORAGE_PURGE = exports.STORAGE_SAVE = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.save = save;
exports.purge = purge;
exports.default = reducer;

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORAGE_SAVE = exports.STORAGE_SAVE = 'STORAGE_SAVE';
var STORAGE_PURGE = exports.STORAGE_PURGE = 'STORAGE_PURGE';

function save(key, values) {
  return {
    type: STORAGE_SAVE,
    key: key,
    values: values
  };
}

function purge(key) {
  return {
    type: STORAGE_PURGE,
    key: key
  };
}

function reducer(orgState) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var state = (0, _assign2.default)({}, orgState);
  switch (action.type) {
    case STORAGE_PURGE:
      {
        return (0, _assign2.default)({}, (0, _omit3.default)(state, action.key));
      }
    case STORAGE_SAVE:
      {
        return (0, _assign2.default)({}, (0, _set3.default)(state, action.key, action.values));
      }
    default:
      return (0, _assign2.default)({}, state);
  }
}