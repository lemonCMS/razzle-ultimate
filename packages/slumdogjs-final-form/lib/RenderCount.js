'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-style: normal;\n  text-align: center;\n  height: ', 'px;\n  width: ', 'px;\n  line-height: ', 'px;\n  border-radius: ', 'px;\n  border: 1px solid #ddd;\n  background: #eee;\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-style: normal;\n  text-align: center;\n  height: ', 'px;\n  width: ', 'px;\n  line-height: ', 'px;\n  border-radius: ', 'px;\n  border: 1px solid #ddd;\n  background: #eee;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderCount = function (_React$Component) {
  (0, _inherits3.default)(RenderCount, _React$Component);

  function RenderCount() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RenderCount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderCount.__proto__ || (0, _getPrototypeOf2.default)(RenderCount)).call.apply(_ref, [this].concat(args))), _this), _this.renders = 0, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RenderCount, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Circle,
        null,
        ++this.renders
      );
    }
  }]);
  return RenderCount;
}(_react2.default.Component);

exports.default = RenderCount;


var size = 30;
var Circle = _styledComponents2.default.i(_templateObject, size, size, size, size / 2);