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

var _omitBy2 = require('lodash/omitBy');

var _omitBy3 = _interopRequireDefault(_omitBy2);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _AppContext = require('../../context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContextBinder = function (_React$Component) {
  (0, _inherits3.default)(ContextBinder, _React$Component);

  function ContextBinder() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContextBinder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContextBinder.__proto__ || (0, _getPrototypeOf2.default)(ContextBinder)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContextBinder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.input.value && this.props.input.value !== '' && this.props.field.conf && this.props.field.conf.unix) {
        this.setState({ value: _moment2.default.unix(this.props.input.value) }, function () {
          _this2.props.input.onChange(_this2.state.value);
        });
      } else {
        this.setState({
          value: (0, _moment2.default)(this.props.input.value)
        }, function () {
          _this2.props.input.onChange(_this2.state.value);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.props.context.isStatic || this.props.field.static) {
        return _react2.default.createElement('div', {
          className: 'rte-readonly',
          dangerouslySetInnerHTML: { __html: this.state.value ? this.state.value.format() : '' } });
      }

      var inputProps = {
        disabled: false
      };
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        inputProps.disabled = this.props.context.checkCondition(this.props.field.disabled);
      }

      var newProps = (0, _omitBy3.default)(this.props.input, ['value', 'onChange', 'onBlur', 'onFocus']);
      newProps.onChange = function (value) {
        _this3.setState({ value: value }, function () {
          _this3.props.input.onChange(value);
        });
      };
      newProps.value = this.state.value;

      return _react2.default.createElement(_reactDatetime2.default, (0, _extends3.default)({}, newProps, { inputProps: inputProps }, this.props.field.conf));
    }
  }]);
  return ContextBinder;
}(_react2.default.Component);

ContextBinder.contextTypes = {
  checkCondition: _propTypes2.default.func,
  isStatic: _propTypes2.default.bool
};

var Binded = function Binded(_ref2) {
  var input = _ref2.input,
      field = _ref2.field;
  return _react2.default.createElement(
    _AppContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(ContextBinder, { input: input,
        field: field,
        context: context
      });
    }
  );
};

exports.default = Binded;