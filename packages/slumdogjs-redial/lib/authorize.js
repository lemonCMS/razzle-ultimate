'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _propNameAuth = require('./propNameAuth');

var _propNameAuth2 = _interopRequireDefault(_propNameAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name, components, locals) {
  var promises = (Array.isArray(components) ? components : [components]).

  // Filter out falsy components
  filter(function (component) {
    return component;
  })

  // Get component lifecycle hooks
  .map(function (component) {
    return {
      component: component,
      hooks: component.default ? component.default[_propNameAuth2.default] : component[_propNameAuth2.default]
    };
  })

  // Filter out components that haven't been decorated
  .filter(function (_ref) {
    var hooks = _ref.hooks;
    return hooks;
  })

  // Calculate locals if required, execute hooks and store promises
  .map(function (_ref2) {
    var component = _ref2.component,
        hooks = _ref2.hooks;

    var hook = hooks[name];

    if (typeof hook !== 'function') {
      return null;
    }

    try {
      var authorized = typeof locals === 'function' ? hook(locals(component)) : hook(locals);

      return authorized ? _promise2.default.resolve() : _promise2.default.reject(new Error('not authorized'));
    } catch (err) {
      return _promise2.default.reject(err);
    }
  });

  return _promise2.default.all(promises);
};