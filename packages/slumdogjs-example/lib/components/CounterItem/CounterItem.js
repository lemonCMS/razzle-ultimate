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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _multireducer = require('multireducer');

var _counter = require('../../redux/store/counter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CounterItem = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CounterItem, _Component);

  function CounterItem() {
    (0, _classCallCheck3.default)(this, CounterItem);
    return (0, _possibleConstructorReturn3.default)(this, (CounterItem.__proto__ || (0, _getPrototypeOf2.default)(CounterItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(CounterItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          counter = _props.counter,
          index = _props.index;

      return _react2.default.createElement(
        'div',
        { className: 'col-sm' },
        _react2.default.createElement(
          'div',
          { className: 'card' },
          _react2.default.createElement(
            'div',
            { className: 'card-body' },
            _react2.default.createElement(
              'h5',
              { className: 'card-title' },
              'Counter: ',
              counter
            ),
            _react2.default.createElement(
              'p',
              { className: 'card-text' },
              'Some quick example text to build on the card title and make up the bulk of the cards content.'
            ),
            _react2.default.createElement(
              'button',
              { type: 'button',
                className: 'btn',
                onClick: function onClick() {
                  return _this2.props.increase(index);
                } },
              '+'
            ),
            _react2.default.createElement(
              'button',
              { type: 'button',
                className: 'btn',
                onClick: function onClick() {
                  return _this2.props.decrease(index);
                } },
              '-'
            )
          )
        )
      );
    }
  }]);
  return CounterItem;
}(_react.Component), _class.defaultProps = {
  counter: 0
}, _temp);


var TmpComponent = (0, _reactRedux.connect)(function (state, _ref) {
  var as = _ref.as,
      index = _ref.index;
  return { counter: state.counters[as][index] };
}, function (dispatch, _ref2) {
  var as = _ref2.as;
  return (0, _multireducer.bindActionCreators)({ increase: _counter.increase, decrease: _counter.decrease }, dispatch, as);
})(CounterItem);

exports.default = TmpComponent;