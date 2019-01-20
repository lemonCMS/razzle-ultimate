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

var _fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');

var _faCheck = require('@fortawesome/free-solid-svg-icons/faCheck');

var _faMinus = require('@fortawesome/free-solid-svg-icons/faMinus');

var _faTimes = require('@fortawesome/free-solid-svg-icons/faTimes');

var _faSync = require('@fortawesome/free-solid-svg-icons/faSync');

var _faPlusSquare = require('@fortawesome/free-regular-svg-icons/faPlusSquare');

var _faMinusSquare = require('@fortawesome/free-regular-svg-icons/faMinusSquare');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fontawesomeSvgCore.library.add(_faPlusSquare.faPlusSquare, _faMinusSquare.faMinusSquare, _faCheck.faCheck, _faMinus.faMinus, _faTimes.faTimes, _faSync.faSync);

var FontAwesome = function (_React$Component) {
  (0, _inherits3.default)(FontAwesome, _React$Component);

  function FontAwesome() {
    (0, _classCallCheck3.default)(this, FontAwesome);
    return (0, _possibleConstructorReturn3.default)(this, (FontAwesome.__proto__ || (0, _getPrototypeOf2.default)(FontAwesome)).apply(this, arguments));
  }

  (0, _createClass3.default)(FontAwesome, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        children
      );
    }
  }]);
  return FontAwesome;
}(_react2.default.Component);

FontAwesome.defaultProps = {};

exports.default = FontAwesome;