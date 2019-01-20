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

exports.default = function (props) {
  return _react2.default.createElement(
    _AppContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(Complex, (0, _extends3.default)({ context: context }, props));
    }
  );
};

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get3 = require('lodash/get');

var _get4 = _interopRequireDefault(_get3);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFinalFormArrays = require('react-final-form-arrays');

var _Panel = require('react-bootstrap/lib/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _AppContext = require('../context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Complex = function (_React$Component) {
  (0, _inherits3.default)(Complex, _React$Component);

  function Complex() {
    (0, _classCallCheck3.default)(this, Complex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Complex.__proto__ || (0, _getPrototypeOf2.default)(Complex)).call(this));

    _this.renderComplex = _this.renderComplex.bind(_this);
    _this.push = null;
    _this.length = 0;
    _this.renderChildren = _this.renderChildren.bind(_this);
    _this.state = {
      collapsed: null
    };
    return _this;
  }

  (0, _createClass3.default)(Complex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.mandatory === true && (this.length === undefined || this.length === 0)) {
        this.push({});
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(name, count, remove, move, complexIndex, staticField, disabled) {
      var _this2 = this;

      var buttons = function buttons() {
        var returnButtons = [];
        if (staticField !== true) {
          if (complexIndex > 0 && count > 1) {
            returnButtons.push(_react2.default.createElement(
              _Button2.default,
              {
                key: 2,
                onClick: function onClick() {
                  return move(complexIndex, complexIndex - 1);
                },
                bsStyle: (0, _get4.default)(_this2.props.moveBtn, 'bsStyle', 'default'),
                bsSize: (0, _get4.default)(_this2.props.moveBtn, 'bsSize', undefined),
                disabled: disabled,
                type: 'button'
              },
              _react2.default.createElement('i', { className: 'fa fa-chevron-up' })
            ));
          }
          if (count > 1 && complexIndex < count - 1) {
            returnButtons.push(_react2.default.createElement(
              _Button2.default,
              {
                key: 3,
                onClick: function onClick() {
                  return move(complexIndex, complexIndex + 1);
                },
                bsStyle: (0, _get4.default)(_this2.props.moveBtn, 'bsStyle', 'default'),
                bsSize: (0, _get4.default)(_this2.props.moveBtn, 'bsSize', undefined),
                disabled: disabled,
                type: 'button'
              },
              _react2.default.createElement('i', { className: 'fa fa-chevron-down' })
            ));
          }

          if (_this2.props.mandatory && count > 1 || !_this2.props.mandatory && count > 0) {
            returnButtons.push(_react2.default.createElement(
              _Button2.default,
              {
                key: 1,
                onClick: function onClick() {
                  return remove(complexIndex);
                },
                bsStyle: (0, _get4.default)(_this2.props.removeBtn, 'bsStyle', 'danger'),
                bsSize: (0, _get4.default)(_this2.props.removeBtn, 'bsSize', undefined),
                className: (0, _get4.default)(_this2.props.removeBtn, 'className', ''),
                title: (0, _get4.default)(_this2.props.removeBtn, 'title', ''),
                disabled: disabled,
                type: 'button'
              },
              _react2.default.createElement('i', { className: 'fa fa-trash' })
            ));
          }
        }
        return returnButtons;
      };

      var _get2 = (0, _get4.default)(this.props, 'panel', {}),
          header = _get2.header,
          footer = _get2.footer;

      var headerDiv = _react2.default.createElement(
        'div',
        { className: 'clearfix' },
        _react2.default.createElement(
          _ButtonToolbar2.default,
          null,
          buttons()
        ),
        header
      );

      var component = function component() {
        if (_this2.props.render) {
          return _this2.props.render(name);
        }

        return _react2.default.Children.map(_this2.props.children, function (child) {
          return _react2.default.cloneElement(child, { name: name + '.' + child.props.name, parent: name });
        });
      };

      if (this.props.row) {
        return _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            this.props.left,
            component()
          ),
          _react2.default.createElement(
            _Col2.default,
            this.props.right,
            headerDiv
          )
        );
      }

      return _react2.default.createElement(
        _Panel2.default,
        { className: 'rfg-cmplx-btn-flds' },
        _react2.default.createElement(
          _Panel2.default.Heading,
          null,
          headerDiv
        ),
        _react2.default.createElement(
          _Panel2.default.Body,
          null,
          component()
        ),
        footer && _react2.default.createElement(
          _Panel2.default.Footer,
          null,
          footer
        )
      );
    }
  }, {
    key: 'renderComplex',
    value: function renderComplex(props) {
      var _this3 = this;

      var fields = props.fields,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error;

      var staticField = props.static;

      this.push = props.fields.push;
      this.length = props.fields.length;

      var thisSize = function thisSize() {
        if (_this3.props.size !== 'medium') {
          return { bsSize: _this3.props.size };
        }
        return null;
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(_this3.props, 'labelSize')) {
          return _this3.props.labelSize;
        }
        return null;
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this3.props, 'fieldSize')) {
          return _this3.props.fieldSize;
        }
        return null;
      };

      var toggle = function toggle() {
        var state = false;
        if (_this3.state.collapsed === null) {
          state = !(_this3.props.collapsed && _this3.props.collapsed === true);
        } else if (_this3.state.collapsed === false) {
          state = true;
        }
        _this3.setState({ 'collapsed': state }, function () {
          // this.props.formChange('itemsx', state);
        });
      };
      if (this.props.label) {
        if (this.state.collapsed === true || this.state.collapsed === null && this.props.collapsed && this.props.collapsed === true) {
          return _react2.default.createElement(
            _Row2.default,
            { className: 'rfg-cmplx rfg-cmplx-collapsed' },
            _react2.default.createElement(
              _Col2.default,
              (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
              _react2.default.createElement(
                _Button2.default,
                (0, _extends3.default)({ type: 'button', onClick: toggle, bsStyle: 'link' }, thisSize()),
                '+ ',
                this.props.label
              )
            )
          );
        }
      }

      var disabled = false;
      if (this.props && this.props.disabled && (0, _isFunction3.default)(this.props.disabled)) {
        disabled = this.props.context.checkCondition(this.props.disabled());
      }
      var renderAddButton = function renderAddButton() {
        if ((0, _get4.default)(_this3.props, 'multiple', true) === true || fields.length === 0) {
          var bsStyle = function bsStyle() {
            if ((0, _get4.default)(_this3.props.addBtn, 'bsStyle') && (0, _get4.default)(_this3.props.addBtn, 'bsStyle') !== 'default') {
              return { bsStyle: (0, _get4.default)(_this3.props.addBtn, 'bsStyle') };
            }
            return null;
          };
          return _react2.default.createElement(
            'div',
            { className: 'rfg-cmplx-btn-add' },
            staticField !== true && _react2.default.createElement(
              _Button2.default,
              (0, _extends3.default)({
                type: 'button',
                onClick: function onClick() {
                  return fields.push({});
                },
                disabled: disabled
              }, thisSize(), bsStyle(), {
                className: (0, _get4.default)(_this3.props.addBtn, 'className')
              }),
              (0, _get4.default)(_this3.props.addBtn, 'label', 'toevoegen')
            ),
            touched && error && _react2.default.createElement(
              'span',
              null,
              error
            )
          );
        }
        return null;
      };

      return _react2.default.createElement(
        _Row2.default,
        { className: 'rfg-cmplx rfg-cmplx-collapsed' },
        this.props.label && _react2.default.createElement(
          _Col2.default,
          (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
          _react2.default.createElement(
            _Button2.default,
            (0, _extends3.default)({ type: 'button', onClick: toggle, bsStyle: 'link' }, thisSize()),
            '- ',
            this.props.label
          )
        ),
        _react2.default.createElement(
          _Col2.default,
          fieldSize(),
          fields.map(function (field, key) {
            return _react2.default.createElement(
              'div',
              { key: key, className: 'rfg-cmplx-fields' },
              _this3.renderChildren(field, fields.length, fields.remove, fields.move, key, staticField, disabled, _this3.props.mandatory)
            );
          }),
          renderAddButton()
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props && this.props.hidden && (0, _isFunction3.default)(this.props.hidden)) {
        if (this.props.context.checkCondition(this.props.hidden) === true) {
          return null;
        }
      } else if (this.props && this.props.show && (0, _isFunction3.default)(this.props.show)) {
        if (this.props.context.checkCondition(this.props.show) !== true) {
          return null;
        }
      }

      return _react2.default.createElement(_reactFinalFormArrays.FieldArray, {
        component: this.renderComplex,
        name: this.props.name,
        collapsed: this.state.collapsed,
        subscription: this.props.subscription || { values: true, valid: true, invalid: true, length: true }
      });
    }
  }]);
  return Complex;
}(_react2.default.Component);

Complex.defaultProps = {
  row: false,
  mandatory: false,
  multiple: true,
  context: {}
};

;