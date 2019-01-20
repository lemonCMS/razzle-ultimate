'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormLabel = require('react-bootstrap/lib/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputGroup = require('react-bootstrap/lib/InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _FormText = require('react-bootstrap/lib/FormText');

var _FormText2 = _interopRequireDefault(_FormText);

var _DropdownItem = require('react-bootstrap/lib/DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _Dropdown = require('react-bootstrap/lib/Dropdown');

var _DropdownButton = require('react-bootstrap/lib/DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _reactFinalForm = require('react-final-form');

var _AppContext = require('../../context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
var Wrap = function (_React$Component) {
  (0, _inherits3.default)(Wrap, _React$Component);

  function Wrap() {
    (0, _classCallCheck3.default)(this, Wrap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Wrap.__proto__ || (0, _getPrototypeOf2.default)(Wrap)).call(this));

    _this.input = {};
    _this.custom = {};
    _this.dropdownButton = _this.dropdownButton.bind(_this);
    _this.dropDown = _this.dropDown.bind(_this);
    _this.renderField = _this.renderField.bind(_this);
    _this.options = _this.options.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Wrap, [{
    key: 'options',
    value: function options(props) {
      if (props.type === 'select') {
        return this.props.children;
      }
      return null;
    }
  }, {
    key: 'dropDown',
    value: function dropDown(props) {
      var _this2 = this;

      var menuItem = [];
      var dropDownTitle = (0, _get3.default)(props.field, 'title', null);
      (0, _map3.default)(props.field.children, function (item, key) {
        var select = function select() {
          _this2.input.onBlur();
          _this2.input.onChange(item.props.value);
        };
        if (item.props.selected && !props.input.value) {
          dropDownTitle = item.props.children;
          menuItem.push(_react2.default.createElement(
            _DropdownItem2.default,
            { key: key, onSelect: select },
            item.props.children
          ));
        } else {
          if (String(_this2.input.value) === String(item.props.value)) {
            dropDownTitle = item.props.children;
          }
          menuItem.push(_react2.default.createElement(
            _DropdownItem2.default,
            { key: key, onSelect: select },
            item.props.children
          ));
        }

        if (item.props.selected) {
          menuItem.push(_react2.default.createElement(_Dropdown.Divider, { key: 'divider-' + key }));
        }
      });
      return { dropDownTitle: dropDownTitle, menuItem: menuItem };
    }
  }, {
    key: 'dropdownButton',
    value: function dropdownButton(props, isStatic) {
      var _dropDown = this.dropDown(props),
          dropDownTitle = _dropDown.dropDownTitle,
          menuItem = _dropDown.menuItem;

      var size = (0, _get3.default)(props.field, 'size', this.props.size);
      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { size: size };
        }
        return null;
      };

      var disabled = false;
      if (props.field && props.field.disabled && (0, _isFunction3.default)(props.field.disabled)) {
        disabled = this.props.context.checkCondition(props.field.disabled());
      }

      if (isStatic === true || disabled === true) {
        return _react2.default.createElement(_FormControl2.default, { plaintext: true, readOnly: true, defaultValue: dropDownTitle || (0, _get3.default)(props.field, 'placeholder') });
      }

      return _react2.default.createElement(
        _DropdownButton2.default,
        (0, _extends3.default)({ key: this.input.name,
          onClick: function onClick(event) {
            event.preventDefault();
          }
        }, thisSize(), {
          title: dropDownTitle || (0, _get3.default)(props.field, 'placeholder'),
          id: 'input-dropdown-addon-' + this.input.name }),
        menuItem
      );
    }
  }, {
    key: 'renderField',
    value: function renderField(props) {
      var _this3 = this;

      var input = props.input,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          submitError = _props$meta.submitError,
          submitFailed = _props$meta.submitFailed,
          valid = _props$meta.valid,
          custom = (0, _objectWithoutProperties3.default)(props, ['input', 'meta']);

      this.input = input;
      var size = (0, _get3.default)(props.field, 'size', this.props.size);
      if (props.field && props.field.hidden && (0, _isFunction3.default)(props.field.hidden)) {
        if (this.props.context.checkCondition(props.field.hidden, (0, _get3.default)(props, 'parent')) === true) {
          return null;
        }
      } else if (props.field && props.field.show && (0, _isFunction3.default)(props.field.show)) {
        if (this.props.context.checkCondition(props.field.show, (0, _get3.default)(props, 'parent')) !== true) {
          return null;
        }
      }

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { size: size };
        }
        return null;
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(props.field, 'labelSize')) {
          return props.field.labelSize;
        }
        return null;
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(props.field, 'fieldSize')) {
          return props.field.fieldSize;
        }
        return null;
      };

      var validationState = function validationState() {
        if (touched && error || submitFailed && submitError) {
          return true;
        }

        if (touched && valid) {
          return false;
        }
        return null;
      };

      var add = (0, _pick3.default)(custom, ['type', 'placeholder', 'rows', 'cols', 'bsClass']);
      if (add.type === 'select') {
        add.as = 'select';
      }
      if (custom.field.disabled && (0, _isFunction3.default)(custom.field.disabled)) {
        add.disabled = this.props.context.checkCondition(custom.field.disabled, (0, _get3.default)(props, 'parent'));
      }

      if (props.field.placeholder) {
        add.placeholder = props.field.placeholder;
      }
      if (props.field.autoComplete) {
        add.autoComplete = props.field.autoComplete;
      }
      if (props.field.cols) {
        add.cols = props.field.cols;
      }
      if (props.field.rows) {
        add.rows = props.field.rows;
      }
      if (props.field.bsClass) {
        add.bsClass = props.field.bsClass;
      }

      add.isInvalid = touched && validationState();
      add.isValid = touched && !validationState();

      var component = function component() {
        // Render custom component
        if (_this3.props.component) {
          var Comp = _this3.props.component;
          return _react2.default.createElement(Comp, props);
        }

        if (_this3.props.context.isStatic === true || (0, _get3.default)(props.field, 'static', false) === true) {
          var value = function value() {
            if (props.field.type === 'select') {
              return (0, _map3.default)((0, _filter3.default)(props.field.options, ['value', _this3.input.value]), function (item, key) {
                return _react2.default.createElement(
                  'span',
                  { key: key },
                  item.desc
                );
              });
            }
            return _this3.input.value;
          };

          switch (props.type) {
            case 'dropdown':
              return _this3.dropdownButton(props, true);
            default:
              {
                return _react2.default.createElement(_FormControl2.default, { plaintext: true, readOnly: true, value: value() });
              }
          }
        }

        switch (props.field.type) {
          case 'dropdown':
            return _this3.dropdownButton(props, false);
          case 'textarea':
            return _react2.default.createElement(_FormControl2.default, (0, _extends3.default)({
              as: 'textarea'
            }, input, add));
          case 'select':
            return _react2.default.createElement(
              _FormControl2.default,
              (0, _extends3.default)({
                as: 'select'
              }, input, add),
              _this3.options(props)
            );
          default:
            return _react2.default.createElement(_FormControl2.default, (0, _extends3.default)({}, input, add));
        }
      };

      var buttonBefore = function buttonBefore() {
        if ((0, _has3.default)(props.field, 'buttonBefore')) {
          return _react2.default.createElement(
            _InputGroup2.default.Prepand,
            null,
            props.field.buttonBefore()
          );
        }
        return null;
      };

      var buttonAfter = function buttonAfter() {
        if ((0, _has3.default)(props.field, 'buttonAfter')) {
          return _react2.default.createElement(
            _InputGroup2.default.Append,
            null,
            props.field.buttonAfter()
          );
        }
        return null;
      };

      var addonBefore = function addonBefore() {
        if ((0, _has3.default)(props.field, 'addonBefore')) {
          return _react2.default.createElement(
            _InputGroup2.default.Prepend,
            null,
            (0, _get3.default)(props.field, 'addonBefore')
          );
        }
        return null;
      };

      var addonAfter = function addonAfter() {
        if ((0, _has3.default)(props.field, 'addonAfter')) {
          return _react2.default.createElement(
            _InputGroup2.default.Append,
            null,
            (0, _get3.default)(props.field, 'addonAfter')
          );
        }
        return null;
      };

      var getField = function getField() {
        if ((0, _has3.default)(props.field, 'addonBefore') || (0, _has3.default)(props.field, 'addonAfter') || (0, _has3.default)(props.field, 'buttonBefore') || (0, _has3.default)(props.field, 'buttonAfter')) {

          return _react2.default.createElement(
            _InputGroup2.default,
            { isInvalid: validationState() },
            buttonBefore(),
            addonBefore(),
            component(),
            addonAfter(),
            buttonAfter()
          );
        }

        return component();
      };

      if (props.type === 'dropdown' && !(0, _has3.default)(props.field, 'label')) {
        return getField();
      }

      var getLabel = function getLabel() {
        if (props.field.label) {
          return _react2.default.createElement(
            _FormLabel2.default,
            (0, _extends3.default)({ column: true }, labelSize()),
            props.field.label
          );
        }
        return null;
      };
      var rendered = _react2.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({
          as: _Row2.default
        }, thisSize()),
        getLabel(),
        _react2.default.createElement(
          _Col2.default,
          fieldSize(),
          getField(),
          props.field.help && (!touched || !submitError && !error) && _react2.default.createElement(
            _FormText2.default,
            null,
            props.field.help
          ),
          (touched && error || submitFailed && submitError) && _react2.default.createElement(
            _FormControl2.default.Feedback,
            { type: 'invalid' },
            submitError || error
          )
        )
      );

      if (this.props.context.debug) {
        return _react2.default.createElement(
          'div',
          { style: { position: 'relative' } },
          rendered
        );
      }

      return rendered;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          rest = (0, _objectWithoutProperties3.default)(_props, ['name']);

      return _react2.default.createElement(_reactFinalForm.Field, {
        component: this.renderField,
        type: this.props.type,
        name: name,
        field: rest
      });
    }
  }]);
  return Wrap;
}(_react2.default.Component);
// import FormText from 'react-bootstrap/lib/FormText';
// import FormCheck from 'react-bootstrap/lib/FormCheck';
// import FormControl from 'react-bootstrap/lib/FormControl';


Wrap.defaultProps = {};

var Binder = function Binder(props) {
  return _react2.default.createElement(
    _AppContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(Wrap, (0, _extends3.default)({ context: context }, props));
    }
  );
};

exports.default = Binder;