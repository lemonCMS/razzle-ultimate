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

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _prismLight = require('react-syntax-highlighter/dist/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/dist/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _prism = require('react-syntax-highlighter/dist/styles/prism/prism');

var _prism2 = _interopRequireDefault(_prism);

var _CookieConsent = require('../../../../slumdogjs-cookiebar/src/CookieConsent');

var _CookieConsent2 = _interopRequireDefault(_CookieConsent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);

var CookieBarPage = function (_Component) {
  (0, _inherits3.default)(CookieBarPage, _Component);

  function CookieBarPage() {
    (0, _classCallCheck3.default)(this, CookieBarPage);
    return (0, _possibleConstructorReturn3.default)(this, (CookieBarPage.__proto__ || (0, _getPrototypeOf2.default)(CookieBarPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(CookieBarPage, [{
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
              'Cookie Consent'
            ),
            _react2.default.createElement(
              'p',
              null,
              'In order to apply to the GDPR almost all websites need to have some kind of cookie consent before setting any, but functional, cookies.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'With this ',
              _react2.default.createElement(
                'code',
                null,
                'Cookiebar'
              ),
              ' package you can easily implement cookie consent into your website with minor changes in your code.'
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'Implementation in NON React website'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Add the following code just before your closing ',
              _react2.default.createElement(
                'code',
                null,
                'body'
              ),
              ' tag. Make shure to point to the right directory where the files are downloaded.'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              "<div id=\"reactContent\"></div>\n" + "<script type=\"text/javascript\" src=\"/gdpr/settings.js\"></script>\n" + "<script type=\"text/javascript\" src=\"/gdpr/gdpr.js\"></script>\n" + ""
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'Implementation in React application'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Just add the Cookiebar component in your root of your application.'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              "<Cookiebar settings={{}} />"
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'Settings'
            ),
            'The following settings can be changed.',
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
                    'Name'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Value'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Description'
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
                      'reload'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'bool(false)'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Force a full page reload after setting consent level.'
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
                      'ignoreUserAgent'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Regular expression'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Disabling the cookiebar for certain userAgents like google bots.'
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
                      'whiteList'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Regular expression'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Disabling the cookiebar for certain pages.'
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
                      'title'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Title cookie modal.'
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
                      'intro'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Description in cookie modal.'
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
                      'compact'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'boole(true)'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Descrioption in cookie modal.'
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
                      'cookieBar'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'null | string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'When defined the cookiebar will be displayed as compact thus not page blocking.'
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
                      'button'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'content button accept'
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
                      'buttonCancel'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'null | string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'content to cancel / close modal'
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
                      'buttonSettings'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'null | string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Displaying the setting buttin in compact mode.'
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
                      'level1'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Explaining content of this level'
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
                      'level2'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Explaining content of this level'
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
                      'level3'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Explaining content of this level'
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
                      'iFrameBlob'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'blob'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Containing data for the replacement of resources that need consent.'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'h3',
              { className: 'mt-2' },
              'Example default settings'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              "var reactGpdrSettings = {\n" + "  reload: false,\n" + "  ignoreUserAgent: /bot|googlebot|crawler|spider|robot|crawling|page speed/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : 'xxxx'),\n" + "  whitelist: /privacy/i.test(typeof window !== 'undefined' ? window.location.href : 'xxxx'),\n" + "  title: 'Deze website gebruikt cookies',\n" + "  intro: 'Daarmee zorgen we dat de website werkt en je kunt inloggen. Selecteer één van de drie opties en klik op\\n' +\n" + "  '                &#39;Accepteren&#39;. Bekijk onze <a href=\"/privacy\">privacy- en cookieverklaring</a>',\n" + "  button: 'Accepteren',\n" + "  buttonCancel: null,\n" + "  compact: true,\n" + "  cookieBar: 'Deze website gebruikt cookies standaard alleen o.b.v. anonieme verwerking. <a href=\"/privacy\">Lees de privacy- en cookieverklaring</a>',\n" + "  buttonSettings: 'Instellingen',\n" + "  level1: '<h4>Strikt:</h4> Cookies zonder video&#39;s en zonder aanbiedingen. Deze zijn nodig om onze website te kunnen bezoeken en\\n' +\n" + "  '                in te kunnen loggen. Je bezoek en gegevens worden niet bijgehouden.',\n" + "  level2: '<h4>Statistieken:</h4> Cookies met video&#39;s maar zonder aanbiedingen. Met deze cookies kun je de website bezoeken,\\n' +\n" + "  '                inloggen en video&#39;s bekijken. Je bezoek en gegevens worden bijgehouden.',\n" + "  level3: '<h4>Extern:</h4> Cookies met video&#39;s en aanbiedingen. Met deze cookies werkt de website optimaal. Je bezoek wordt\\n' +\n" + "  '                bijgehouden zodat we onze website kunnen verbeteren en je aanbiedingen kunnen doen.',\n" + "  iFrameBlob: ReactDomServer.renderToStaticMarkup(<BlockResource />)\n" + "}"
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'Making your website compliant'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Because of the GDPR you are not allowed to set tracking cookies or start tracking before having constent from the user.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This means in most cases that we need to postpone the loading of certain script, embed, iframes and even images from external sites that sets cookies.'
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Let say you embed a video from youtube'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'html', showLineNumbers: true, style: _prism2.default },
              "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/TfBrKaJKRIo\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            ),
            _react2.default.createElement(
              'p',
              null,
              'Change the ',
              _react2.default.createElement(
                'code',
                null,
                'src'
              ),
              ' attribute into ',
              _react2.default.createElement(
                'code',
                null,
                'data-gdpr-src'
              ),
              ' and add ',
              _react2.default.createElement(
                'code',
                null,
                'data-gdpr-lvl'
              ),
              ' probably level 3. When a user accepts your cookies level 3. then the youtube content will be shown.'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'html', showLineNumbers: true, style: _prism2.default },
              "<iframe width=\"560\" height=\"315\" data-gdpr-lvl=\"3\" data-gdpr-src=\"https://www.youtube.com/embed/TfBrKaJKRIo\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            ),
            _react2.default.createElement(
              'h3',
              { className: 'mt-5' },
              'Live example'
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
              'div',
              { className: 'embed-responsive embed-responsive-16by9' },
              _react2.default.createElement('iframe', {
                title: 'linus tech',
                width: '560',
                height: '315',
                'data-gdpr-lvl': '3',
                'data-gdpr-src': 'https://www.youtube.com/embed/TfBrKaJKRIo',
                frameBorder: '0',
                allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                allowFullScreen: true })
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null)
          )
        ),
        _react2.default.createElement(_CookieConsent2.default, null)
      );
    }
  }]);
  return CookieBarPage;
}(_react.Component);

CookieBarPage.defaultProps = {};

exports.default = CookieBarPage;