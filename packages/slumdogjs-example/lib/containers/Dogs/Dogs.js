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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _src = require('../../../../slumdogjs-redial/src');

var _actions = require('../../../../slumdogjs-redux/src/store/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dogs = (_dec = (0, _src.provideHooks)({
  defer: function defer(_ref) {
    var dispatch = _ref.store.dispatch;

    var promises = [];
    promises.push(dispatch((0, _actions.simpleLoad)('dog', '/breeds/image/random')));
    return _promise2.default.all(promises);
  }
}), _dec2 = (0, _reactRedux.connect)(function (state) {
  return {
    dog: state.store.dog
  };
}, { simpleLoad: _actions.simpleLoad }), _dec(_class = _dec2(_class = function (_React$Component) {
  (0, _inherits3.default)(Dogs, _React$Component);

  function Dogs() {
    (0, _classCallCheck3.default)(this, Dogs);
    return (0, _possibleConstructorReturn3.default)(this, (Dogs.__proto__ || (0, _getPrototypeOf2.default)(Dogs)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dogs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dog = this.props.dog;

      return _react2.default.createElement(
        'div',
        null,
        'Dogs',
        _react2.default.createElement(
          'button',
          { type: 'button',
            onClick: function onClick() {
              return _this2.props.simpleLoad('dog', '/breeds/image/random');
            }
          },
          'refresh the dog'
        ),
        _react2.default.createElement(
          'p',
          null,
          dog && dog.message && _react2.default.createElement('img', { src: dog.message, alt: dog.path })
        )
      );
    }
  }]);
  return Dogs;
}(_react2.default.Component)) || _class) || _class);

Dogs.defaultProps = {
  dog: {}
};

exports.default = Dogs;