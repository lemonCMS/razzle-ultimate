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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styles from './Cookiebar.scss';

var Level = function (_Component) {
  (0, _inherits3.default)(Level, _Component);

  function Level() {
    (0, _classCallCheck3.default)(this, Level);
    return (0, _possibleConstructorReturn3.default)(this, (Level.__proto__ || (0, _getPrototypeOf2.default)(Level)).apply(this, arguments));
  }

  (0, _createClass3.default)(Level, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)({
            'level': true,
            'active': this.props.active
          }),
          onClick: this.props.onClick,
          onKeyDown: this.props.onClick,
          role: 'button',
          tabIndex: 0
        },
        _react2.default.createElement('div', { className: 'levelTxt', dangerouslySetInnerHTML: { __html: this.props.children } }),
        this.props.icon && _react2.default.createElement(
          'div',
          { className: 'icon' },
          _react2.default.createElement(_reactFontawesome2.default, { icon: this.props.icon, fixedWidth: true, size: '6x' })
        )
      );
    }
  }]);
  return Level;
}(_react.Component);

Level.defaultProps = {
  icon: null,
  active: false
};

exports.default = Level;