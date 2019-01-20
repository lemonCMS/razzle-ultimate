'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constLoadable = (0, _reactLoadable2.default)({
  loader: function loader() {
    return import('./Defer');
  },
  modules: ['./Defer'],
  webpack: function webpack() {
    return [require.resolveWeak('./Defer')];
  },
  loading: function loading() {
    return _react2.default.createElement(
      'div',
      null,
      'Loading'
    );
  }
});

exports.default = constLoadable;