'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COUNTER_RESET_ALL = exports.COUNTER_RESET = exports.COUNTER_DECREASE = exports.COUNTER_INCREASE = exports.COUNTER_RESTORE = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.saveAndRestoreCookie = saveAndRestoreCookie;
exports.saveAndRestoreLocal = saveAndRestoreLocal;
exports.increase = increase;
exports.decrease = decrease;
exports.reset = reset;
exports.resetAll = resetAll;
exports.default = reducer;

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _multireducer = require('multireducer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COUNTER_RESTORE = exports.COUNTER_RESTORE = '@@redux-persist-component/counters';
var COUNTER_INCREASE = exports.COUNTER_INCREASE = 'counter_increase';
var COUNTER_DECREASE = exports.COUNTER_DECREASE = 'counter_decrease';
var COUNTER_RESET = exports.COUNTER_RESET = 'counter_reset';
var COUNTER_RESET_ALL = exports.COUNTER_RESET_ALL = 'counter_reset_all';

function restoreLocal(_ref) {
  var dispatch = _ref.dispatch,
      result = _ref.result,
      currentState = _ref.currentState;

  (0, _keys2.default)(result).map(function (objKey) {
    return objKey === 'counterLocalStorage' && (0, _stringify2.default)(result.counterCookie) !== (0, _stringify2.default)(currentState.counterCookie) ? dispatch((0, _multireducer.wrapAction)({
      type: '@@redux-persist-component/counters',
      result: result[objKey]
    }, objKey)) : null;
  });
}

function restoreCookie(_ref2) {
  var dispatch = _ref2.dispatch,
      result = _ref2.result,
      currentState = _ref2.currentState;

  (0, _keys2.default)(result).map(function (objKey) {
    return objKey === 'counterCookie' && (0, _stringify2.default)(result.counterCookie) !== (0, _stringify2.default)(currentState.counterCookie) ? dispatch((0, _multireducer.wrapAction)({
      type: '@@redux-persist-component/counters',
      result: result[objKey]
    }, objKey)) : null;
  });
}

function saveAndRestoreCookie() {
  return {
    save: function save(state) {
      return { counterCookie: state.counterCookie };
    },
    restore: restoreCookie
  };
}

function saveAndRestoreLocal() {
  return {
    save: function save(state) {
      return { counterLocalStorage: state.counterLocalStorage };
    },
    restore: restoreLocal
  };
}

function increase(index) {
  return {
    type: COUNTER_INCREASE,
    index: index
  };
}

function decrease(index) {
  return {
    type: COUNTER_DECREASE,
    index: index
  };
}

function reset(index) {
  return {
    type: COUNTER_RESET,
    index: index
  };
}

function resetAll() {
  return {
    type: COUNTER_RESET_ALL
  };
}

var initialState = {};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var newState = (0, _assign2.default)({}, state);
  switch (action.type) {
    case COUNTER_RESTORE:
      return (0, _assign2.default)({}, newState, action.result);
    case COUNTER_INCREASE:
      return (0, _set3.default)(newState, action.index, (0, _get3.default)(state, action.index, 0) + 1);
    case COUNTER_DECREASE:
      return (0, _set3.default)(newState, action.index, (0, _get3.default)(state, action.index, 0) - 1);
    case COUNTER_RESET:
      return (0, _set3.default)(newState, action.index, 0);
    case COUNTER_RESET_ALL:
      return initialState;
    default:
      return state;
  }
}