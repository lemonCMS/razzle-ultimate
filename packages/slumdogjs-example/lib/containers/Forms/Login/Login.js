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

var _Form = require('../../../../../slumdogjs-final-form/src/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Button = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Message = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes from 'prop-types';

var Login = function (_Component) {
  (0, _inherits3.default)(Login, _Component);

  function Login() {
    (0, _classCallCheck3.default)(this, Login);
    return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).apply(this, arguments));
  }

  (0, _createClass3.default)(Login, [{
    key: 'render',
    value: function render() {

      var size = {
        labelSize: { xs: 3 },
        fieldSize: { xs: 9 }
      };

      var validate = function validate(values) {
        var errors = {};
        if (!values.username || values.username === '') errors.username = 'The username is mandatory';
        if (!values.password || values.password === '') errors.password = 'The password is mandatory';
        return errors;
      };

      var handleSubmit = function handleSubmit() {
        return { username: 'Oopsie, serverside error' };
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Login Form'
        ),
        _react2.default.createElement(
          _Form2.default,
          {
            debug: true,
            validate: validate,
            onSubmit: handleSubmit

          },
          _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Username', placeholder: 'email', name: 'username', type: 'text' }, size)),
          _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Password', placeholder: 'password', name: 'password', type: 'password' }, size)),
          _react2.default.createElement(
            _Message2.default,
            { type: 'error' },
            'Oopsie, we could not verify your account.'
          ),
          _react2.default.createElement(
            _Message2.default,
            { type: 'success' },
            'Welcome, we will redirect you shortly.'
          ),
          _react2.default.createElement(
            _Button2.default,
            { type: 'submit' },
            'Send'
          )
        )
      );
    }
  }]);
  return Login;
}(_react.Component);

Login.defaultProps = {};

exports.default = Login;