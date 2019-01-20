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

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

var _CounterItem = require('../../../components/CounterItem/CounterItem');

var _CounterItem2 = _interopRequireDefault(_CounterItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cookie = function (_React$Component) {
  (0, _inherits3.default)(Cookie, _React$Component);

  function Cookie() {
    (0, _classCallCheck3.default)(this, Cookie);
    return (0, _possibleConstructorReturn3.default)(this, (Cookie.__proto__ || (0, _getPrototypeOf2.default)(Cookie)).apply(this, arguments));
  }

  (0, _createClass3.default)(Cookie, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Container2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'row mt-5' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Counters stored in cookies'
            ),
            _react2.default.createElement(
              'p',
              null,
              'These counter are refilled on the ',
              _react2.default.createElement(
                'strong',
                null,
                'server side'
              ),
              ' with the data stored in the cookies.',
              _react2.default.createElement('br', null),
              'When you disable javascript in your browser you will see these counters are filled.'
            )
          ),
          _react2.default.createElement(_CounterItem2.default, { index: 1, as: 'counterCookie' }),
          _react2.default.createElement(_CounterItem2.default, { index: 2, as: 'counterCookie' }),
          _react2.default.createElement(_CounterItem2.default, { index: 3, as: 'counterCookie' })
        )
      );
    }
  }]);
  return Cookie;
}(_react2.default.Component);

Cookie.defaultProps = {};

exports.default = Cookie;