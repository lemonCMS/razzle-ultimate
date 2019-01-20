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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuWrap = function (_Component) {
  (0, _inherits3.default)(MenuWrap, _Component);

  function MenuWrap() {
    (0, _classCallCheck3.default)(this, MenuWrap);
    return (0, _possibleConstructorReturn3.default)(this, (MenuWrap.__proto__ || (0, _getPrototypeOf2.default)(MenuWrap)).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuWrap, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          menu = _props.menu,
          className = _props.className,
          id = _props.id,
          role = _props.role,
          location = _props.location,
          match = _props.match;

      return _react2.default.createElement(
        'ul',
        { className: className, id: id, role: role },
        _lodash2.default.map(menu, function (item, i) {
          return _react2.default.createElement(_MenuItem2.default, { key: i, item: item, location: location, match: match });
        })
      );
    }
  }]);
  return MenuWrap;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(MenuWrap);