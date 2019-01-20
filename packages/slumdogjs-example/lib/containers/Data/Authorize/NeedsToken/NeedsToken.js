'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _reactRedux = require('react-redux');

var _src = require('../../../../../../slumdogjs-redial/src');

var _auth = require('../../../../redux/store/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NeedsToken = (_dec = (0, _src.provideHooks)({
  authorized: function authorized(_ref) {
    var getState = _ref.store.getState;

    var state = getState();
    return state.auth.token !== null;
  },
  fetch: function fetch(_ref2) {
    var _ref2$store = _ref2.store,
        dispatch = _ref2$store.dispatch,
        getState = _ref2$store.getState;

    var promise = [];
    var state = getState();

    if (!(0, _auth.isLoaded)(state)) {
      promise.push(dispatch((0, _auth.getUser)(state.auth.token)));
    }
    return _promise2.default.all(promise);
  }
}), _dec2 = (0, _reactRedux.connect)(function (state) {
  return {
    user: state.auth.user || {}
  };
}), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(NeedsToken, _Component);

  function NeedsToken() {
    (0, _classCallCheck3.default)(this, NeedsToken);
    return (0, _possibleConstructorReturn3.default)(this, (NeedsToken.__proto__ || (0, _getPrototypeOf2.default)(NeedsToken)).apply(this, arguments));
  }

  (0, _createClass3.default)(NeedsToken, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rows = function rows() {
        var user = _this2.props.user;

        if (user) {
          return (0, _keys2.default)(user).map(function (key) {
            return _react2.default.createElement(
              'tr',
              { key: key },
              _react2.default.createElement(
                'td',
                null,
                key
              ),
              _react2.default.createElement(
                'td',
                null,
                (0, _stringify2.default)(user[key])
              )
            );
          });
        }
        return null;
      };

      return _react2.default.createElement(
        _Container2.default,
        { fluid: true },
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { md: 12 },
            _react2.default.createElement(
              'h1',
              null,
              'Page after authorization'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This page is only accessible after login. When you refresh this page with CTRL+F5 you will have returned here and the user object is already filled.'
            ),
            _react2.default.createElement(
              _Table2.default,
              null,
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Key'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Value'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                rows()
              )
            )
          )
        )
      );
    }
  }]);
  return NeedsToken;
}(_react.Component)) || _class) || _class);

NeedsToken.defaultProps = {
  user: {}
};

exports.default = NeedsToken;