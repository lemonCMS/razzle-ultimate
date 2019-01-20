'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _reactRouter = require('react-router');

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Card = require('react-bootstrap/lib/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _reactRedux = require('react-redux');

var _prismLight = require('react-syntax-highlighter/dist/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/dist/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _prism = require('react-syntax-highlighter/dist/styles/prism/prism');

var _prism2 = _interopRequireDefault(_prism);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _Form = require('../../../../../slumdogjs-final-form/src/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Button = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Message = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Message');

var _Message2 = _interopRequireDefault(_Message);

var _auth = require('../../../redux/store/auth');

var _actions = require('../../../../../slumdogjs-redux/src/store/actions');

var _src = require('../../../../../slumdogjs-redial/src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);

var Authorize = (_dec = (0, _src.provideHooks)({
  defer: function defer(_ref) {
    var dispatch = _ref.store.dispatch;

    var promises = [];
    promises.push(dispatch((0, _actions.simpleLoad)('randomUser', '/users/random')));
    return _promise2.default.all(promises);
  }
}), _dec2 = (0, _reactRedux.connect)(function (state) {
  return {
    auth: state.auth,
    randomUser: state.store.randomUser || {}
  };
}, { authenticate: _auth.authenticate, simpleLoad: _actions.simpleLoad }), _dec(_class = (0, _reactRouter.withRouter)(_class = _dec2(_class = function (_React$Component) {
  (0, _inherits3.default)(Authorize, _React$Component);

  function Authorize() {
    (0, _classCallCheck3.default)(this, Authorize);
    return (0, _possibleConstructorReturn3.default)(this, (Authorize.__proto__ || (0, _getPrototypeOf2.default)(Authorize)).apply(this, arguments));
  }

  (0, _createClass3.default)(Authorize, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var size = {
        labelSize: { xs: 3 },
        fieldSize: { xs: 9 }
      };

      var validate = function validate(values) {
        var errors = {};
        if (!values.username || values.username === '') errors.username = 'The username is mandatory';
        if (!values.password || values.password === '') errors.password = 'The password is Secret1!';
        return errors;
      };

      var onSubmit = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload) {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt('return', _this2.props.authenticate(payload).then(function (ret) {
                    if (ret && Object.prototype.hasOwnProperty.call(ret, 'error')) {
                      return ret.error;
                    }
                    _this2.props.history.push('/data/authorize/needstoken');
                    return {};
                  }).catch(function (err) {
                    return err;
                  }));

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function onSubmit(_x) {
          return _ref2.apply(this, arguments);
        };
      }();

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
              'Authorize'
            ),
            _react2.default.createElement(
              'p',
              null,
              'The child route is protected. When you try to access this you will see an error page. SSR will also check if you are authorized. Or else it will also show the error page.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'The works'
            ),
            _react2.default.createElement(
              'ol',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Check if you are ',
                _react2.default.createElement(
                  'code',
                  null,
                  'authorized'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                'Then get on with the api call in ',
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
                ' hooks.'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Else replace the component with the error page.'
              )
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              '@provideHooks({\n' + '  authorized: ({store: {getState}}) => {\n' + '    const state = getState();\n' + '    return state.auth.token !== null;\n' + '  },\n' + '  fetch: ({store: {dispatch, getState}}) => {\n' + '    const promise = [];\n' + '    const state = getState();\n' + '\n' + '    if (!isLoaded(state)) {\n' + '      promise.push(dispatch(getUser(state.auth.token)));\n' + '    }\n' + '    return Promise.all(promise);\n' + '  }\n' + '})'
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'API'
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
                    'hook'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'return'
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
                      'authorized(',
                      '{store, history, location, match, params, cookies, client}',
                      ')'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'boolean'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'The expected result is a ',
                    _react2.default.createElement(
                      'code',
                      null,
                      'boolean'
                    ),
                    '. ',
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
                    ' if not. Check for a certain value exists in the redux state, or a cookie. Check for the validity of the value in the fetch hook.'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Demo'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Try to login with the user below. If it does not work refresh the user.'
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
                    'td',
                    null,
                    'username:'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    this.props.randomUser.email || 'pending',
                    ' ',
                    _react2.default.createElement(
                      'button',
                      {
                        className: 'btn btn-link',
                        type: 'button',
                        onClick: function onClick() {
                          _this2.props.simpleLoad('randomUser', '/users/random', { nocache: true });
                        }
                      },
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['fas', 'sync'] })
                    )
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    'password:'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Secret1!'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _Card2.default,
              { className: 'mt-5' },
              _react2.default.createElement(
                _Card2.default.Header,
                null,
                'Login'
              ),
              _react2.default.createElement(
                _Card2.default.Body,
                null,
                _react2.default.createElement(
                  _Form2.default,
                  {
                    debug: true,
                    validate: validate,
                    onSubmit: onSubmit

                  },
                  _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Username', placeholder: 'email', name: 'username', type: 'text' }, size)),
                  _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Password', placeholder: 'password', name: 'password', type: 'password' }, size)),
                  _react2.default.createElement(
                    _Message2.default,
                    { type: 'error' },
                    'Oopsie, we could not verify your account.'
                  ),
                  _react2.default.createElement(
                    _Message2.default,
                    { type: 'success' },
                    'Welcome, we will redirect you shortly.'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { type: 'submit' },
                    'Send'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Authorize;
}(_react2.default.Component)) || _class) || _class) || _class);

Authorize.defaultProps = {
  auth: {},
  randomUser: {}
};

exports.default = Authorize;