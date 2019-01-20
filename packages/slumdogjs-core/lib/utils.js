'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = exports.isObject = exports.isFunction = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isAsyncComponent = isAsyncComponent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @private is the given object a Function? */
var isFunction = exports.isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

/** @private is the given object an Object? */
var isObject = exports.isObject = function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
};

/** @private is the given object/value a promise? */
var isPromise = exports.isPromise = function isPromise(value) {
  return isObject(value) && isFunction(value.then);
};

/** @private Guard cluase to narrow the AsyncRouteableComponent union type */
function isAsyncComponent(Component) {
  return Component.load !== undefined;
}