'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _finalFormArrays = require('final-form-arrays');

var _finalFormArrays2 = _interopRequireDefault(_finalFormArrays);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFinalForm = require('react-final-form');

var _reactFastCompare = require('react-fast-compare');

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');

var _faTrash = require('@fortawesome/free-solid-svg-icons/faTrash');

var _faChevronDown = require('@fortawesome/free-solid-svg-icons/faChevronDown');

var _faChevronUp = require('@fortawesome/free-solid-svg-icons/faChevronUp');

var _ContextWrapper = require('./ContextWrapper');

var _ContextWrapper2 = _interopRequireDefault(_ContextWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fontawesomeSvgCore.library.add(_faTrash.faTrash);
_fontawesomeSvgCore.library.add(_faChevronDown.faChevronDown);
_fontawesomeSvgCore.library.add(_faChevronUp.faChevronUp);

var onSubmit = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(values) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.warn('Implement onSubmit handler');
            console.warn(values);

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function onSubmit(_x) {
    return _ref.apply(this, arguments);
  };
}();

var FormObj = function (_React$Component) {
  (0, _inherits3.default)(FormObj, _React$Component);

  function FormObj() {
    (0, _classCallCheck3.default)(this, FormObj);
    return (0, _possibleConstructorReturn3.default)(this, (FormObj.__proto__ || (0, _getPrototypeOf2.default)(FormObj)).apply(this, arguments));
  }

  (0, _createClass3.default)(FormObj, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {

      if (!(0, _reactFastCompare2.default)(nextProps.initialValues, this.props.initialValues)) {
        return true;
      }

      switch ((0, _typeof3.default)(this.props.shouldComponentUpdate)) {
        case 'undefined':
          return false;
        case 'function':
          return this.props.shouldComponentUpdate();
        default:
          return this.props.shouldComponentUpdate !== nextProps.shouldComponentUpdate;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactFinalForm.Form, {
        keepDirtyOnReinitialize: this.props.keepDirtyOnReinitialize,
        onSubmit: this.props.onSubmit || onSubmit,
        subscription: this.props.subscription,
        validate: this.props.validate || function () {
          return {};
        },
        initialValues: this.props.initialValues || {},
        mutators: (0, _assign2.default)({}, _finalFormArrays2.default),
        render: function render(_ref2) {
          var handleSubmit = _ref2.handleSubmit,
              rest = (0, _objectWithoutProperties3.default)(_ref2, ['handleSubmit']);
          return _react2.default.createElement(
            _ContextWrapper2.default,
            (0, _extends3.default)({}, (0, _omit3.default)(_this2.props, ['onSubmit', 'validate', 'initialValues', 'subscription', 'shouldComponentUpdate']), rest),
            _react2.default.createElement(
              'form',
              {
                onSubmit: handleSubmit,
                className: _this2.props.className },
              _this2.props.children
            )
          );
        } });
    }
  }]);
  return FormObj;
}(_react2.default.Component);

FormObj.defaultProps = {
  debug: false,
  keepDirtyOnReinitialize: false
};

exports.default = FormObj;