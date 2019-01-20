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

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _FormCheck = require('react-bootstrap/lib/FormCheck');

var _FormCheck2 = _interopRequireDefault(_FormCheck);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _chunk2 = require('lodash/chunk');

var _chunk3 = _interopRequireDefault(_chunk2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _AppContext = require('../../context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioBinder = function (_React$Component) {
  (0, _inherits3.default)(RadioBinder, _React$Component);

  function RadioBinder() {
    (0, _classCallCheck3.default)(this, RadioBinder);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadioBinder.__proto__ || (0, _getPrototypeOf2.default)(RadioBinder)).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.searchBox = _this.searchBox.bind(_this);
    _this.radioButtons = _this.radioButtons.bind(_this);
    _this.radioButtonList = _this.radioButtonList.bind(_this);
    _this.filtered = _this.filtered.bind(_this);
    _this.state = {
      value: ''
    };
    return _this;
  }

  (0, _createClass3.default)(RadioBinder, [{
    key: 'handleChange',
    value: function handleChange(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'handlePrevent',
    value: function handlePrevent(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: 'filtered',
    value: function filtered() {
      var list = (0, _isArray3.default)(this.props.field.children) ? this.props.field.children : [this.props.field.children];

      if ((0, _get3.default)(this.props.field, 'static', false) === true) {
        return (0, _filter3.default)(list, { value: this.props.input.value });
      }

      var value = this.state.value;

      var strValue = String(value).toLowerCase();
      if (value !== '') {
        return (0, _filter3.default)(list, function (option) {
          return (0, _includes3.default)(String(option.children).toLowerCase(), strValue);
        });
      }
      return list;
    }
  }, {
    key: 'radioButtonList',
    value: function radioButtonList(list) {
      var _this2 = this;

      var staticField = this.props.context.isStatic || (0, _get3.default)(this.props.field, 'static', false);
      var multiple = (0, _isArray3.default)(this.props.field.children);

      var clone = [];
      if ((0, _isArray3.default)(this.props.input.value)) {
        clone = (0, _map3.default)(this.props.input.value, function (item) {
          return String(item);
        });
      }

      return (0, _map3.default)(list, function (option, key) {
        if (staticField === true) {
          return _react2.default.createElement(_FormControl2.default, { plaintext: true, readOnly: true, defaultValue: option.children });
        }

        var disabled = false;
        if (_this2.props.field && _this2.props.field.disabled && (0, _isFunction3.default)(_this2.props.field.disabled)) {
          disabled = _this2.props.context.checkCondition(_this2.props.field.disabled(), (0, _get3.default)(_this2.props.field, 'parent'));
        }
        var name = multiple ? _this2.props.input.name + '[' + key + ']' : _this2.props.input.name;
        var checked = multiple && clone.indexOf(option.props.value) !== -1 || !multiple && (_this2.props.input.value === true || parseInt(_this2.props.input.value, 10) === 1);
        return _react2.default.createElement(_FormCheck2.default, {
          key: key,
          id: _this2.props.input.name + '-' + key,
          type: 'checkbox',
          disabled: disabled,
          name: name,
          value: option.props.value,
          checked: checked,
          onChange: function onChange(event) {
            if (multiple) {
              var newValue = (_this2.props.input.value instanceof Array ? _this2.props.input.value : [_this2.props.input.value]).filter(Boolean);
              if (event.target.checked) {
                newValue.push(option.props.value);
              } else {
                newValue.splice(newValue.indexOf(option.props.value), 1);
              }
              return _this2.props.input.onChange(newValue);
            }
            return _this2.props.input.onChange(event.target.checked ? option.props.value : false);
          },
          label: option.props.children
        });
      });
    }
  }, {
    key: 'radioButtons',
    value: function radioButtons() {
      var _this3 = this;

      var filtered = this.filtered();
      var field = (0, _get3.default)(this.props, 'field');
      if (filtered.length === 0) {
        return _react2.default.createElement(
          _Alert2.default,
          null,
          (0, _get3.default)(this.props.field, 'filter_norecords', 'No results')
        );
      }

      if (field.chunks) {
        var split = Math.ceil(filtered.length / field.chunks);
        var chunks = function chunks() {
          var chunkData = (0, _chunk3.default)(filtered, split);
          return (0, _map3.default)(chunkData, function (chunk, key) {
            return _react2.default.createElement(
              _Col2.default,
              { key: key, md: Math.round(12 / field.chunks) },
              _this3.radioButtonList(chunk)
            );
          });
        };
        return _react2.default.createElement(
          _Row2.default,
          null,
          chunks()
        );
      }

      return this.radioButtonList(filtered);
    }
  }, {
    key: 'searchBox',
    value: function searchBox() {
      var disabled = false;
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.context.checkCondition(this.props.field.disabled());
      }

      if ((this.props.field.searchable || this.props.field.filter) && !this.props.field.static && !this.props.context.isStatic) {
        return _react2.default.createElement('input', {
          type: 'text',
          disabled: disabled,
          placeholder: (0, _get3.default)(this.props.field, 'filter_placeholder', (0, _get3.default)(this.props.field.locale, 'filter.placeholder', 'Filter')),
          defaultValue: this.state.value,
          onKeyDown: this.handlePrevent,
          onKeyUp: this.handleChange,
          className: 'form-control'
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.searchBox(),
        this.radioButtons()
      );
    }
  }]);
  return RadioBinder;
}(_react2.default.Component);

var Binder = function Binder(props) {
  return _react2.default.createElement(
    _AppContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(RadioBinder, (0, _extends3.default)({ context: context }, props));
    }
  );
};

exports.default = Binder;