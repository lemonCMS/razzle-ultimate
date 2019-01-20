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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _AppContext = require('../context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Show = function (_React$Component) {
  (0, _inherits3.default)(Show, _React$Component);

  function Show() {
    (0, _classCallCheck3.default)(this, Show);
    return (0, _possibleConstructorReturn3.default)(this, (Show.__proto__ || (0, _getPrototypeOf2.default)(Show)).apply(this, arguments));
  }

  (0, _createClass3.default)(Show, [{
    key: 'render',
    value: function render() {
      if (this.props.hidden && (0, _isFunction3.default)(this.props.hidden)) {
        if (this.props.context.checkCondition(this.props.hidden, (0, _get3.default)(this.props, 'parent')) === true) {
          return null;
        }
      } else if (this.props.show && (0, _isFunction3.default)(this.props.show)) {
        if (this.props.context.checkCondition(this.props.show, (0, _get3.default)(this.props, 'parent')) !== true) {
          return null;
        }
      }
      return this.props.children;
    }
  }]);
  return Show;
}(_react2.default.Component);

Show.defaultProps = {};

var Binder = function Binder(props) {
  return _react2.default.createElement(
    _AppContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(Show, (0, _extends3.default)({ context: context }, props));
    }
  );
};

exports.default = Binder;