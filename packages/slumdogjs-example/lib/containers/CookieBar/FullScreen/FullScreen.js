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

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _prismLight = require('react-syntax-highlighter/dist/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/dist/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _prism = require('react-syntax-highlighter/dist/styles/prism/prism');

var _prism2 = _interopRequireDefault(_prism);

var _CookieConsent = require('../../../../../slumdogjs-cookiebar/src/CookieConsent');

var _CookieConsent2 = _interopRequireDefault(_CookieConsent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);
// import PropTypes from 'prop-types';

var FullScreen = function (_Component) {
  (0, _inherits3.default)(FullScreen, _Component);

  function FullScreen() {
    (0, _classCallCheck3.default)(this, FullScreen);
    return (0, _possibleConstructorReturn3.default)(this, (FullScreen.__proto__ || (0, _getPrototypeOf2.default)(FullScreen)).apply(this, arguments));
  }

  (0, _createClass3.default)(FullScreen, [{
    key: 'getDomainName',
    value: function getDomainName() {
      var i = 0;
      var domain = document.domain;
      var p = domain.split('.');
      var s = '_gd' + new Date().getTime();

      while (i < p.length - 1 && document.cookie.indexOf(s + '=' + s) === -1) {
        domain = p.slice(-1 - (i += 1)).join('.');
        document.cookie = s + '=' + s + ';domain=' + domain + ';';
      }
      document.cookie = s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + domain + ';';
      return domain;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
              'FullScreen'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'btn btn-primary',
                  onClick: function onClick() {
                    var dName = _this2.getDomainName();
                    var cookies = new _universalCookie2.default();
                    cookies.remove('cookieConsent', { path: '/', domain: dName });
                    cookies.remove('cookieAccepted', { path: '/', domain: dName });
                    window.location.reload();
                  }
                },
                'clear cookies to try again'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'To have the cookie consent open full screen set ',
              _react2.default.createElement(
                'code',
                null,
                'compact'
              ),
              ' to ',
              _react2.default.createElement(
                'code',
                null,
                'false'
              ),
              '.'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              '<CookieBar settings={{\n' + '  compact: false\n' + '}}/>'
            ),
            _react2.default.createElement(
              _Row2.default,
              null,
              _react2.default.createElement(
                _Col2.default,
                { xs: 4 },
                _react2.default.createElement(
                  'h5',
                  null,
                  'Level 1'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'embed-responsive embed-responsive-4by3' },
                  _react2.default.createElement('img', {
                    'data-gdpr-src': 'https://images.pexels.com/photos/1166868/pexels-photo-1166868.jpeg?cs=srgb&dl=active-activity-blur-1166868.jpg&fm=jpg',
                    'data-gdpr-lvl': 1,
                    className: 'embed-responsive-item',
                    alt: 'woman-wearing-pair-of-black-nike-running-shoes'
                  })
                ),
                _react2.default.createElement(
                  'h5',
                  null,
                  'Level 2'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'embed-responsive embed-responsive-4by3' },
                  _react2.default.createElement('img', {
                    'data-gdpr-src': 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?cs=srgb&dl=beach-freedom-friendship-1387037.jpg&fm=jpg',
                    'data-gdpr-lvl': 2,
                    className: 'embed-responsive-item',
                    alt: 'woman-wearing-pair-of-black-nike-running-shoes'
                  })
                ),
                _react2.default.createElement(
                  'h5',
                  null,
                  'Level 3'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'embed-responsive embed-responsive-16by9' },
                  _react2.default.createElement('iframe', {
                    title: 'linus tech',
                    width: '560',
                    height: '315',
                    'data-gdpr-lvl': '3',
                    'data-gdpr-src': 'https://www.youtube.com/embed/TfBrKaJKRIo',
                    frameBorder: '0',
                    className: 'embed-responsive-item',
                    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                    allowFullScreen: true })
                )
              )
            )
          )
        ),
        _react2.default.createElement(_CookieConsent2.default, { settings: {
            compact: false
          } })
      );
    }
  }]);
  return FullScreen;
}(_react.Component);

FullScreen.defaultProps = {};

exports.default = FullScreen;