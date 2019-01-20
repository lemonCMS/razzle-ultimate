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

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _prismLight = require('react-syntax-highlighter/dist/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/dist/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _prism = require('react-syntax-highlighter/dist/styles/prism/prism');

var _prism2 = _interopRequireDefault(_prism);

var _src = require('../../../../slumdogjs-redial/src');

var _actions = require('../../../../slumdogjs-redux/src/store/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);

/* eslint-disable */
var Data = (_dec = (0, _src.provideHooks)({
  fetch: function fetch(_ref) {
    var _ref$store = _ref.store,
        dispatch = _ref$store.dispatch,
        getState = _ref$store.getState,
        params = _ref.params,
        match = _ref.match,
        history = _ref.history;

    var state = getState();
    var promise = [];
    if (!(0, _actions.isLoaded)('users', state, {})) {
      promise.push(dispatch((0, _actions.load)('users', '/users', {})));
    }

    return _promise2.default.all(promise);
  }
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Data, _Component);

  function Data() {
    (0, _classCallCheck3.default)(this, Data);
    return (0, _possibleConstructorReturn3.default)(this, (Data.__proto__ || (0, _getPrototypeOf2.default)(Data)).apply(this, arguments));
  }

  (0, _createClass3.default)(Data, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Container2.default,
        { fluid: true },
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            null,
            _react2.default.createElement(
              'h1',
              null,
              'Data fetching'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Fetching data made easy. When changing routes it is possible to fetch data. You can fetch data already on the serverside or choose to only fetch on the client side.'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              '@provideHooks({\n' + '  fetch: ({store: {dispatch, getState}, params, match, history}) => {\n' + '    // Load serverside\n' + '    const state = getState();\n' + '    const promise = [];\n' + '    if (!isLoaded(\'users\', state, {})) {\n' + '      promise.push(dispatch(load(\'users\', \'/users\', {})));\n' + '    }\n' + '    return Promise.all(promise);\n' + '  },\n' + '  defer: ({store: {dispatch, getState}, params, match, history}) => {\n' + '    // Load only clientside\n' + '  },\n' + '  authorize: ({store: {dispatch, getState}, params, match, history}) => {\n' + '    // Is the user autorized to visit this route\n' + '  }\n' + '})\n'
            )
          )
        ),
        _react2.default.createElement(
          'h2',
          { className: 'mt-5' },
          'provideHooks'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'code',
            null,
            'fetch'
          ),
          ' and ',
          _react2.default.createElement(
            'code',
            null,
            'defer'
          ),
          ' expect to return a promise.',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'code',
            null,
            'authorize'
          ),
          ' must return a boolean. ',
          _react2.default.createElement(
            'code',
            null,
            'true'
          ),
          ' for authorized, ',
          _react2.default.createElement(
            'code',
            null,
            'false'
          ),
          ' if the user had no access.'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mt-5' },
          'fetch',
          _react2.default.createElement(
            'small',
            null,
            '(',
            '{store, history, location, match, params, cookies, client}',
            ')'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'server'
          ),
          ': will wait for all ',
          _react2.default.createElement(
            'code',
            null,
            'fetch'
          ),
          ' to finish before rendering. The state will passed onto the client.',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'strong',
            null,
            'client'
          ),
          ': side will not fetch the data again from the server on initial render.'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mt-5' },
          'defer',
          _react2.default.createElement(
            'small',
            null,
            '(',
            '{store, history, location, match, params, cookies, client}',
            ')'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'server'
          ),
          ': no data will be fetched.',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'strong',
            null,
            'client'
          ),
          ': data will be fetch on initial render.'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mt-5' },
          'authorize',
          _react2.default.createElement(
            'small',
            null,
            '(',
            '{store, history, location, match, params, cookies, client}',
            ')'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Check your current state if the user has access. If not a error is thrown. Authorize is called before fetching any data.'
        )
      );
    }
  }]);
  return Data;
}(_react.Component)) || _class);

Data.defaultProps = {};

exports.default = Data;