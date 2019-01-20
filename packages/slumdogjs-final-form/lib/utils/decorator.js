'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

exports.default = connnectToConfirm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connnectToConfirm(conf) {
  return function (WrappedComponent) {
    var TmpComponent = function (_Component) {
      (0, _inherits3.default)(TmpComponent, _Component);

      function TmpComponent() {
        (0, _classCallCheck3.default)(this, TmpComponent);
        return (0, _possibleConstructorReturn3.default)(this, (TmpComponent.__proto__ || (0, _getPrototypeOf2.default)(TmpComponent)).apply(this, arguments));
      }

      (0, _createClass3.default)(TmpComponent, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, conf));
        }
      }]);
      return TmpComponent;
    }(_react.Component);

    return TmpComponent;
  };
}