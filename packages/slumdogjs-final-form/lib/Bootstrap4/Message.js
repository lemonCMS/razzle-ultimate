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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _AppContext = require('../context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function (_Component) {
  (0, _inherits3.default)(Message, _Component);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message, [{
    key: 'render',
    value: function render() {
      var _props$context$status = this.props.context.status,
          submitting = _props$context$status.submitting,
          valid = _props$context$status.valid,
          submitFailed = _props$context$status.submitFailed,
          submitSucceeded = _props$context$status.submitSucceeded,
          pristine = _props$context$status.pristine;


      if (this.props.hidden && (0, _isFunction3.default)(this.props.hidden)) {
        if (this.props.context.checkCondition(this.props.hidden) === true) {
          return null;
        }
      } else if (this.props.show && (0, _isFunction3.default)(this.props.show)) {
        if (this.props.context.checkCondition(this.props.show) !== true) {
          return null;
        }
      }

      if (this.props.type === 'success' && !submitting && pristine) {
        if (valid === true && submitSucceeded === true && submitting === false) {
          return _react2.default.createElement(
            _Alert2.default,
            { variant: 'success' },
            this.props.children
          );
        }
      }

      if (this.props.type === 'error' && !submitting) {
        if (valid === false && submitFailed === true) {
          return _react2.default.createElement(
            _Alert2.default,
            { variant: 'danger' },
            this.props.children
          );
        }
      }

      return _react2.default.createElement('span', null);
    }
  }]);
  return Message;
}(_react.Component);

var Binder = function Binder(props) {
  return _react2.default.createElement(
    _AppContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(Message, (0, _extends3.default)({ context: context }, props));
    }
  );
};

exports.default = Binder;