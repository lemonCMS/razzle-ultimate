'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = reducer;

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeStateReducer = function storeStateReducer(object, id, value) {
  var clone = (0, _assign2.default)({}, object);
  clone[id] = value;
  return clone;
};

var initialState = {
  routes: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _constants.ROUTER_STORE_STATE:
      return (0, _assign2.default)({}, state, {
        routes: storeStateReducer(state.routes, action.route, action.state)
      });
    default:
      return (0, _assign2.default)({}, state);
  }
}