'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterConfig = require('react-router-config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ultimate = function (_Component) {
  (0, _inherits3.default)(Ultimate, _Component);

  function Ultimate() {
    (0, _classCallCheck3.default)(this, Ultimate);
    return (0, _possibleConstructorReturn3.default)(this, (Ultimate.__proto__ || (0, _getPrototypeOf2.default)(Ultimate)).apply(this, arguments));
  }

  (0, _createClass3.default)(Ultimate, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        (0, _reactRouterConfig.renderRoutes)(this.props.routes)
      );
    }
  }]);
  return Ultimate;
}(_react.Component);

Ultimate.defaultProps = {};

exports.default = Ultimate;