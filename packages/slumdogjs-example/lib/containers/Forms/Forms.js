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

var _reactRouterDom = require('react-router-dom');

var _reactRouterConfig = require('react-router-config');

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Forms = function (_Component) {
  (0, _inherits3.default)(Forms, _Component);

  function Forms() {
    (0, _classCallCheck3.default)(this, Forms);
    return (0, _possibleConstructorReturn3.default)(this, (Forms.__proto__ || (0, _getPrototypeOf2.default)(Forms)).apply(this, arguments));
  }

  (0, _createClass3.default)(Forms, [{
    key: 'render',
    value: function render() {
      var routes = this.props.route.routes;

      return _react2.default.createElement(
        _Container2.default,
        { fluid: true },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-9' },
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              (0, _reactRouterConfig.renderRoutes)(routes)
            )
          )
        )
      );
    }
  }]);
  return Forms;
}(_react.Component);

Forms.defaultProps = {};

exports.default = Forms;