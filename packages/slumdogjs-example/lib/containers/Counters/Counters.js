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

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _reactRouterDom = require('react-router-dom');

var _prismLight = require('react-syntax-highlighter/dist/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/dist/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _prism = require('react-syntax-highlighter/dist/styles/prism/prism');

var _prism2 = _interopRequireDefault(_prism);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);

var localStorage = require('./LocalStorage.txt');
var cookieStorageServer = require('./CookieSrorageServer.txt');
var cookieStorageClient = require('./CookieStorageClient.txt');

var Counters = function (_React$Component) {
  (0, _inherits3.default)(Counters, _React$Component);

  function Counters() {
    (0, _classCallCheck3.default)(this, Counters);
    return (0, _possibleConstructorReturn3.default)(this, (Counters.__proto__ || (0, _getPrototypeOf2.default)(Counters)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counters, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Container2.default,
        { fluid: true },
        _react2.default.createElement(
          'div',
          { className: 'row mt-5' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'h1',
              null,
              'Persistent storage'
            ),
            _react2.default.createElement(
              'p',
              null,
              'If you don\'t know what redux is, go over ',
              _react2.default.createElement(
                'a',
                { href: 'https://redux.js.org/' },
                'there'
              ),
              ' and get familiar.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'There are times you would like to remember the state of your application.',
              _react2.default.createElement('br', null),
              'This can easily done with the ',
              _react2.default.createElement(
                'code',
                null,
                'PersistComponent'
              ),
              ' package.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'code',
                null,
                'PersistComponent'
              ),
              ' works on universal apps. because it uses the ',
              _react2.default.createElement(
                'code',
                null,
                'redux dispatcher'
              ),
              ' with an unique ',
              _react2.default.createElement(
                'code',
                null,
                'action'
              ),
              _react2.default.createElement('br', null),
              'you are in control what will be stored and restored.'
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'How it works'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Storing'
              ),
              ': Persist component will subscibe onto redux store and listen for changes on the given keys. If any change is detected it will store the state in the given storage engine.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'restoring data'
              ),
              ': Persist component will dispach the action ',
              _react2.default.createElement(
                'code',
                null,
                '@@redux-persist-component/key'
              ),
              ' where ',
              _react2.default.createElement(
                'code',
                null,
                'key'
              ),
              ' ',
              'is the given name on the persist component.'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              "<PersistComponent\n" + "  storage={localForage}\n" + "  modules={['counters']}\n" + ">\n" + "  <App />\n" + "</PersistComponent>"
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'API'
            ),
            _react2.default.createElement(
              _Table2.default,
              { striped: true },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Attribute'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'value'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'description'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'storage'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Object containing ',
                    _react2.default.createElement(
                      'code',
                      null,
                      'setItem'
                    ),
                    ' and ',
                    _react2.default.createElement(
                      'code',
                      null,
                      'getItem'
                    ),
                    ' that returns a promise.',
                    _react2.default.createElement('br', null),
                    'packages: ',
                    _react2.default.createElement(
                      'a',
                      { href: 'https://www.npmjs.com/package/localforage' },
                      'localforage'
                    ),
                    ',',
                    _react2.default.createElement(
                      'a',
                      { href: 'https://www.npmjs.com/package/redux-persist-cookie-storage' },
                      'redux-persist-cookie-storage'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Storage engine, where the state whould be saved.'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'modules'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'Array'
                    ),
                    '([',
                    _react2.default.createElement(
                      'code',
                      null,
                      'string'
                    ),
                    '|',
                    _react2.default.createElement(
                      'code',
                      null,
                      'object'
                    ),
                    ']) containing the redux reducer keys that should be stored and restored.'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Storage engine, where the state whould be saved.'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'h5',
              null,
              'modules'
            ),
            'Can contain a  string ',
            _react2.default.createElement(
              'code',
              null,
              "<ReduxStoreComponent modules={['auth']} />"
            ),
            ' or can contain an object containing two functions.',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              "" + "{\n" + "  save: (state) => (state),\n" + "  restore: ({ dispatch, result, currentState }) => {\n" + "    if (result !=== currentState) {\n" + "       dispatch(restoreState(result))\n;" + "    }" + "}\n" + "}\n" + ""
            ),
            _react2.default.createElement(
              'code',
              null,
              'save'
            ),
            ': resturn an object that can be parsed with ',
            _react2.default.createElement(
              'code',
              null,
              'JSON.stringify'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'code',
              null,
              'restore'
            ),
            ': within restore dispatch your own action that restores the state.',
            _react2.default.createElement('br', null),
            '--',
            _react2.default.createElement(
              'code',
              null,
              'dispatch'
            ),
            '(): redux dispatcher function',
            _react2.default.createElement('br', null),
            '--',
            _react2.default.createElement(
              'code',
              null,
              'result'
            ),
            ':',
            '{}',
            ' data retrieved from your storage engine',
            _react2.default.createElement('br', null),
            '--',
            _react2.default.createElement(
              'code',
              null,
              'currentState'
            ),
            ':',
            '{}',
            ' currentState to check against when you are using an universal app and cookieStorage.',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'Storage engines'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Use multiple storage engines simultaneously in your app.'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'mt-5' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/counters/local' },
                'Local storage'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Use localstorage for state that is not required for loading data on the initial render.',
              _react2.default.createElement('br', null),
              'Localstorage implementation is relative easy, just wrap after ',
              _react2.default.createElement(
                'code',
                null,
                'Store'
              ),
              ' your application with the ',
              _react2.default.createElement(
                'code',
                null,
                'PersistCompenent'
              ),
              '. Add the restore action in your reducer and you are done.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'code',
                null,
                'client.js'
              )
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              localStorage
            ),
            _react2.default.createElement(
              'h3',
              { className: 'mt-5' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/counters/cookie' },
                'Cookie storage'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Save data like a auth token in cookie storage so the server is aware of the token and pass it along too you api server.',
              _react2.default.createElement('br', null),
              'Implementing cookie storage is a bit more difficult. Because it requires changes in bot ',
              _react2.default.createElement(
                'code',
                null,
                'client.js'
              ),
              ' and ',
              _react2.default.createElement(
                'code',
                null,
                'server.js'
              ),
              '. And because there are np react lifecycles hooks that will wait for async action to resolve we need to add some code our self.'
            ),
            _react2.default.createElement(
              'code',
              null,
              'server.js'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Here we import ',
              _react2.default.createElement(
                'code',
                null,
                'persist-component/PersistServer'
              ),
              ' this function returns a promise we wait for this promise to resolve before first render.'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', style: _prism2.default },
              cookieStorageServer
            ),
            _react2.default.createElement(
              'code',
              null,
              'client.js'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Here we import ',
              _react2.default.createElement(
                'code',
                null,
                'persist-component/PersistServer'
              ),
              ' AND ',
              _react2.default.createElement(
                'code',
                null,
                'persist-component/PersistComponent'
              ),
              ' ',
              'Also on the client we need to "wait" for the cookie storage to be restored before continuing with rendering the page.'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', style: _prism2.default },
              cookieStorageClient
            )
          )
        )
      );
    }
  }]);
  return Counters;
}(_react2.default.Component);

Counters.defaultProps = {};

exports.default = Counters;