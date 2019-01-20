'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncMap = require('./asyncMap');

var _asyncMap2 = _interopRequireDefault(_asyncMap);

var _authorize = require('./authorize');

var _authorize2 = _interopRequireDefault(_authorize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name, components, locals) {
  return (0, _asyncMap2.default)(components, function (component) {
    return (0, _authorize2.default)(name, component, locals);
  });
};