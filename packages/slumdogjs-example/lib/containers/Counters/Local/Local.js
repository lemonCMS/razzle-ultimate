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

var Local = function (_React$Component) {
  (0, _inherits3.default)(Local, _React$Component);

  function Local() {
    (0, _classCallCheck3.default)(this, Local);
    return (0, _possibleConstructorReturn3.default)(this, (Local.__proto__ || (0, _getPrototypeOf2.default)(Local)).apply(this, arguments));
  }

  (0, _createClass3.default)(Local, [{
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
              'Counters stored in Localstorage'
            ),
            _react2.default.createElement(
              'p',
              null,
              'These counters are refilled on the ',
              _react2.default.createElement(
                'strong',
                null,
                'client side'
              ),
              '.',
              _react2.default.createElement('br', null),
              'They are filled through a dispacher, so this will not raise any warning about mismatch content.',
              _react2.default.createElement('br', null)
            )
          ),
          _react2.default.createElement(_CounterItem2.default, { index: 1, as: 'counterLocalStorage' }),
          _react2.default.createElement(_CounterItem2.default, { index: 2, as: 'counterLocalStorage' }),
          _react2.default.createElement(_CounterItem2.default, { index: 3, as: 'counterLocalStorage' })
        )
      );
    }
  }]);
  return Local;
}(_react2.default.Component);

Local.defaultProps = {};

exports.default = Local;