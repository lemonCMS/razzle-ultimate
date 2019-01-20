'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _reactFinalForm = require('react-final-form');

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _AppContext = require('./context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContextWrapper = function (_React$Component) {
  (0, _inherits3.default)(ContextWrapper, _React$Component);

  function ContextWrapper(props, context) {
    (0, _classCallCheck3.default)(this, ContextWrapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContextWrapper.__proto__ || (0, _getPrototypeOf2.default)(ContextWrapper)).call(this, props, context));

    _this.checkCondition = _this.checkCondition.bind(_this);
    _this.getStatus = _this.getStatus.bind(_this);
    _this.values = {};
    return _this;
  }

  (0, _createClass3.default)(ContextWrapper, [{
    key: 'getStatus',
    value: function getStatus() {
      var _props = this.props,
          dirty = _props.dirty,
          dirtySinceLastSubmit = _props.dirtySinceLastSubmit,
          error = _props.error,
          errors = _props.errors,
          invalid = _props.invalid,
          pristine = _props.pristine,
          submitError = _props.submitError,
          submitErrors = _props.submitErrors,
          submitFailed = _props.submitFailed,
          submitSucceeded = _props.submitSucceeded,
          submitting = _props.submitting,
          valid = _props.valid,
          validating = _props.validating;

      return {
        dirty: dirty,
        dirtySinceLastSubmit: dirtySinceLastSubmit,
        error: error,
        errors: errors,
        invalid: invalid,
        pristine: pristine,
        submitError: submitError,
        submitErrors: submitErrors,
        submitFailed: submitFailed,
        submitSucceeded: submitSucceeded,
        submitting: submitting,
        valid: valid,
        validating: validating
      };
    }
  }, {
    key: 'checkCondition',
    value: function checkCondition(args) {
      return args(this.props.values);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.debug) {
        return _react2.default.createElement(
          _AppContext2.default.Provider,
          { value: {
              checkCondition: this.checkCondition,
              isStatic: this.props.static,
              debug: this.props.debug,
              status: this.getStatus()
            } },
          this.props.children,
          _react2.default.createElement(
            _reactFinalForm.FormSpy,
            { subscription: { values: true } },
            function (_ref) {
              var values = _ref.values;

              if (_this2.props.listen && (0, _isFunction3.default)(_this2.props.listen)) {
                _this2.props.listen(values);
              }

              return _react2.default.createElement(
                'pre',
                null,
                (0, _stringify2.default)(values, 0, 2)
              );
            }
          )
        );
      }

      return _react2.default.createElement(
        _AppContext2.default.Provider,
        { value: {
            checkCondition: this.checkCondition,
            isStatic: this.props.static,
            debug: this.props.debug,
            status: this.getStatus()
          } },
        this.props.children,
        this.props.listen && (0, _isFunction3.default)(this.props.listen) && _react2.default.createElement(_reactFinalForm.FormSpy, {
          subscription: { values: true },
          onChange: function onChange(props) {
            _this2.props.listen(props.values);
          } })
      );
    }
  }]);
  return ContextWrapper;
}(_react2.default.Component);

ContextWrapper.defaultProps = {
  'static': false,
  debug: false
};

exports.default = ContextWrapper;