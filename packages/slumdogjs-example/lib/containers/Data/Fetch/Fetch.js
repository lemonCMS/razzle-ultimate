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

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _reactRedux = require('react-redux');

var _src = require('../../../../../slumdogjs-redial/src');

var _actions = require('../../../../../slumdogjs-redux/src/store/actions');

var _DataTable = require('../../../../../slumdogjs-laravel/src/components/DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fetch = (_dec = (0, _src.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.store.dispatch;

    var promise = [];
    promise.push(dispatch((0, _actions.load)('fetchUsers', 'users', { sleep: 5 })));
    return _promise2.default.all(promise);
  }
}), _dec2 = (0, _reactRedux.connect)(function (state) {
  return {
    fetchUsers: state.store.fetchUsers ? state.store.fetchUsers : {}
  };
}), _dec(_class = _dec2(_class = function (_React$Component) {
  (0, _inherits3.default)(Fetch, _React$Component);

  function Fetch() {
    (0, _classCallCheck3.default)(this, Fetch);
    return (0, _possibleConstructorReturn3.default)(this, (Fetch.__proto__ || (0, _getPrototypeOf2.default)(Fetch)).apply(this, arguments));
  }

  (0, _createClass3.default)(Fetch, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatch((0, _actions.clearList)('fetchUsers'));
    }
  }, {
    key: 'render',
    value: function render() {
      var fetchUsers = this.props.fetchUsers;

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
              'Fetching data before route change.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'It will take about 5 seconds before the data is fetched. It will take 5 seconds before the route change will take place. This is because first all data serverside has to be fetched before a rendering'
            ),
            _react2.default.createElement(
              _Table2.default,
              null,
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'pending'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    fetchUsers.pending ? 'true' : 'false'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'success'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    fetchUsers.success ? 'true' : 'false'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'failed'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    fetchUsers.failed ? 'true' : 'false'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'total fetched'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    fetchUsers.list && fetchUsers.list.total ? fetchUsers.list.total : '-'
                  )
                )
              )
            ),
            _react2.default.createElement(_DataTable2.default, {
              records: fetchUsers.list && fetchUsers.list.data ? fetchUsers.list.data : [],
              rows: [{
                cols: [{ name: 'ID', show: 'id' }, { name: 'Name', show: 'name' }]
              }]
            })
          )
        )
      );
    }
  }]);
  return Fetch;
}(_react2.default.Component)) || _class) || _class);

Fetch.defaultProps = {};

exports.default = Fetch;