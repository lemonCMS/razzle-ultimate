'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

var _propNameAuth = require('./propNameAuth');

var _propNameAuth2 = _interopRequireDefault(_propNameAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (hooks) {
  return function (ComposedComponent) {
    if (hooks.authorized !== 'undefined') {
      var authHooks = {};
      authHooks.authorized = hooks.authorized;
      ComposedComponent[_propNameAuth2.default] = authHooks;
      delete hooks.authorized;
    }
    if ((0, _keys2.default)(hooks).length > 0) {
      ComposedComponent[_propName2.default] = hooks;
    }
    return ComposedComponent;
  };
};