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

var _Card = require('react-bootstrap/lib/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Container2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'jumbotron' },
          _react2.default.createElement(
            'h1',
            { className: 'display-4' },
            'Welcome to @Wicked_query/SlumDogJs'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lead' },
            'This is your starterboilerplate. We have implemented some helpful features that will get you ready into makeng your own React application.'
          ),
          _react2.default.createElement('hr', { className: 'my-4' }),
          _react2.default.createElement(
            'p',
            null,
            'You can create your front- and backend with this boilerplate. You backend does not have to be oldSkool anymore.'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lead' },
            _react2.default.createElement(
              'a',
              { className: 'btn btn-primary btn-lg', href: 'http://tweakers.net', role: 'button' },
              'Learn more'
            )
          )
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { md: 4 },
            _react2.default.createElement(
              _Card2.default,
              { bg: 'light', className: 'mb-2' },
              _react2.default.createElement(
                _Card2.default.Header,
                null,
                'Works great with laravel'
              ),
              _react2.default.createElement(
                _Card2.default.Body,
                null,
                _react2.default.createElement(
                  _Card2.default.Title,
                  null,
                  'Laravel'
                ),
                _react2.default.createElement(
                  _Card2.default.Text,
                  null,
                  'We have already implemented an redux store and laravel helper components, like pagination, authorization and administrative list / item handling.'
                )
              )
            )
          ),
          _react2.default.createElement(
            _Col2.default,
            { md: 4 },
            _react2.default.createElement(
              _Card2.default,
              { bg: 'secondary', text: 'white', className: 'mb-2' },
              _react2.default.createElement(
                _Card2.default.Header,
                null,
                'Universal webapp out of the box'
              ),
              _react2.default.createElement(
                _Card2.default.Body,
                null,
                _react2.default.createElement(
                  _Card2.default.Title,
                  null,
                  'Universal'
                ),
                _react2.default.createElement(
                  _Card2.default.Text,
                  null,
                  'We have already implemented an redux store and laravel helper components, like pagination, authorization and administrative list / item handling.'
                )
              )
            )
          ),
          _react2.default.createElement(
            _Col2.default,
            { md: 4 },
            _react2.default.createElement(
              _Card2.default,
              { bg: 'light', className: 'mb-2' },
              _react2.default.createElement(
                _Card2.default.Header,
                null,
                'Webpack hot reloading'
              ),
              _react2.default.createElement(
                _Card2.default.Body,
                null,
                _react2.default.createElement(
                  _Card2.default.Title,
                  null,
                  'Hot reloading, LESS and SASS'
                ),
                _react2.default.createElement(
                  _Card2.default.Text,
                  null,
                  'Development made easy with hot reloading, less and sass support out of the box. Faster development build times with the webpackDLL plugin enabled.'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Home;
}(_react2.default.Component);

exports.default = Home;