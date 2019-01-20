'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pending = function (_Component) {
  (0, _inherits3.default)(Pending, _Component);

  function Pending() {
    (0, _classCallCheck3.default)(this, Pending);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Pending.__proto__ || (0, _getPrototypeOf2.default)(Pending)).call(this));

    _this.pending = _this.pending.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Pending, [{
    key: 'pending',
    value: function pending() {
      if (this.props.state.pending === true) {
        return [_react2.default.createElement('div', { key: '1', className: 'pendingOverlayBackground' }), _react2.default.createElement(
          'div',
          { key: '2', className: 'pendingOverlayContent' },
          _react2.default.createElement(
            'div',
            { className: 'block' },
            _react2.default.createElement(
              'div',
              { className: 'centered' },
              _react2.default.createElement('i', { className: 'fa fa-spinner fa-pulse fa-3x' })
            )
          )
        )];
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.state.failed === true) {
        return _react2.default.createElement(
          'div',
          { className: 'error-page text-center' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'h2',
              { className: 'error-title' },
              '404'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'error-subtitle' },
              'Some bits denied your request.'
            ),
            _react2.default.createElement(
              'p',
              { className: 'error-text center-block' },
              'De pagina die u probeerde te bezoeken bestaat niet.'
            )
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'pendingWrapper' },
        this.pending(),
        this.props.children
      );
    }
  }]);
  return Pending;
}(_react.Component);

exports.default = Pending;