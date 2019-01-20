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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockResource = function (_React$Component) {
  (0, _inherits3.default)(BlockResource, _React$Component);

  function BlockResource() {
    (0, _classCallCheck3.default)(this, BlockResource);
    return (0, _possibleConstructorReturn3.default)(this, (BlockResource.__proto__ || (0, _getPrototypeOf2.default)(BlockResource)).apply(this, arguments));
  }

  (0, _createClass3.default)(BlockResource, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'changeSettings',
          onClick: function onClick(event) {
            window.scrollTo(0, 0);
            event.stopPropagation();
            event.preventDefault();
            return false;
          },
          role: 'button',
          tabIndex: 0
        },
        _react2.default.createElement(
          'div',
          null,
          ' ',
          'Om deze resource te kunnen zien moet u de',
          ' ',
          _react2.default.createElement(
            'a',
            { href: (typeof navigator !== 'undefined' ? window.location.href.split('#')[0] : '') + '#gdprSettings' },
            'cookie instellingen'
          ),
          ' ',
          'op ',
          _react2.default.createElement(
            'strong',
            null,
            'optimaal'
          ),
          ' zetten.'
        )
      );
    }
  }]);
  return BlockResource;
}(_react2.default.Component);

BlockResource.defaultProps = {};

exports.default = BlockResource;