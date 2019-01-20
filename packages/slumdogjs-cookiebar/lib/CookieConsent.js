'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uniqid = require('uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _CookieBar = require('./CookieBar');

var _CookieBar2 = _interopRequireDefault(_CookieBar);

var _CookieBarCompact = require('./CookieBarCompact');

var _CookieBarCompact2 = _interopRequireDefault(_CookieBarCompact);

var _BlockResource = require('./BlockResource');

var _BlockResource2 = _interopRequireDefault(_BlockResource);

var _AppContext = require('./context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

var _Providers = require('../../slumdogjs-core/src/context/Providers');

var _Providers2 = _interopRequireDefault(_Providers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CookieConsent = function (_React$Component) {
  (0, _inherits3.default)(CookieConsent, _React$Component);

  function CookieConsent(props) {
    (0, _classCallCheck3.default)(this, CookieConsent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CookieConsent.__proto__ || (0, _getPrototypeOf2.default)(CookieConsent)).call(this));

    _this.config = {
      reload: false,
      compact: true,
      ignoreUserAgent: /bot|googlebot|crawler|spider|robot|crawling|page speed/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : 'xxxx'),
      whitelist: /privacy/i.test(typeof window !== 'undefined' ? window.location.href : 'xxxx'),
      title: 'Deze website gebruikt cookies',
      intro: 'Daarmee zorgen we dat de website werkt en je kunt inloggen. Selecteer één van de drie opties en klik op\n' + '                &#39;Accepteren&#39;. Bekijk onze <a href="/privacy">privacy- en cookieverklaring</a>',
      cookieBar: 'Deze website gebruikt cookies standaard alleen o.b.v. anonieme verwerking. <a href="/privacy">Lees de privacy- en cookieverklaring</a>',
      button: 'Accepteren',
      buttonCancel: null,
      buttonSettings: 'Instellingen',
      level1: '<h4>Strikt:</h4> Cookies zonder video&#39;s en zonder aanbiedingen. Deze zijn nodig om onze website te kunnen bezoeken en\n' + '                in te kunnen loggen. Je bezoek en gegevens worden niet bijgehouden.',
      level2: '<h4>Statistieken:</h4> Cookies met video&#39;s maar zonder aanbiedingen. Met deze cookies kun je de website bezoeken,\n' + '                inloggen en video&#39;s bekijken. Je bezoek en gegevens worden bijgehouden.',
      level3: '<h4>Extern:</h4> Cookies met video&#39;s en aanbiedingen. Met deze cookies werkt de website optimaal. Je bezoek wordt\n' + '                bijgehouden zodat we onze website kunnen verbeteren en je aanbiedingen kunnen doen.',
      iFrameBlob: _server2.default.renderToStaticMarkup(_react2.default.createElement(_BlockResource2.default, null))
    };
    _this.cookies = null;
    _this.cookieOptions = {
      path: '/',
      expires: new Date(new Date().getTime() + 60 * 60 * 1000 * 24 * 365) // 1 year
    };
    _this.iFrameBlobData = null;

    _this.toggleCookieSettings = _this.toggleCookieSettings.bind(_this);
    _this.saveCookieConsent = _this.saveCookieConsent.bind(_this);
    _this.scroller = _this.scroller.bind(_this);
    _this.listener = _this.listener.bind(_this);
    _this.cookieConsentLvl = _this.cookieConsentLvl.bind(_this);
    _this.iframeBlob = _this.iframeBlob.bind(_this);
    _this.updateDoc = _this.updateDoc.bind(_this);
    _this.getDomainName = _this.getDomainName.bind(_this);
    _this.init = _this.init.bind(_this);
    _this.state = {
      showCookieSettings: false,
      openedByHash: false
    };
    _this.position = 0;
    _this.cookies = props.providers.cookies.cookies;
    return _this;
  }

  (0, _createClass3.default)(CookieConsent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window !== 'undefined' && typeof window.location !== 'undefined' && typeof window.location.hash !== 'undefined' && window.location.hash === '#gdprSettings') {
        this.setState({
          openedByHash: true
        }, function () {
          window.scrollTo(0, 0);
        });
      }
      this.init();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('hashchange', this.listener);
      window.removeEventListener('scroll', this.scroller);
    }
  }, {
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
    key: 'getElements',
    value: function getElements(attrib) {
      return document.querySelectorAll('[' + attrib + ']');
    }
  }, {
    key: 'listener',
    value: function listener(event) {
      if (typeof event !== 'undefined' && typeof event.target !== 'undefined' && typeof event.target.window !== 'undefined' && typeof event.target.window.location !== 'undefined' && typeof event.target.window.location.hash !== 'undefined' && event.target.window.location.hash === '#gdprSettings') {
        this.setState({
          openedByHash: true
        }, function () {
          window.scrollTo(0, 0);
        });
      }
    }
  }, {
    key: 'scroller',
    value: function scroller() {
      var doc = document.documentElement;
      var currPos = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (!this.state.openedByHash && currPos > 0) {
        this.position = currPos;
      }
    }
  }, {
    key: 'updateDoc',
    value: function updateDoc() {
      var elements = this.getElements('data-gdpr-lvl');
      var level = this.cookieConsentLvl();
      for (var i = 0; i < elements.length; i += 1) {
        if (Number(level) >= Number(elements[i].dataset.gdprLvl)) {
          if (typeof elements[i].src === 'undefined' || elements[i].src === '' || elements[i].dataset.gdprPlaceholder) {
            elements[i].src = elements[i].dataset.gdprSrc;
            if (elements[i].dataset.gdprPlaceholder) {
              delete elements[i].dataset.gdprPlaceholder;
              var id = elements[i].dataset.gdprUniqId;
              elements[i].style.display = elements[i].dataset.gdprDisplay;
              var child = document.getElementById(id);
              if (child) {
                child.parentNode.removeChild(child);
              }
            }
          }
        } else {
          elements[i].removeAttribute('src');
          if (elements[i].tagName === 'IFRAME' || elements[i].tagName === 'IMG') {
            if (!elements[i].dataset.gdprPlaceholder) {
              var render = true;
              if (elements[i].hasAttribute('width')) {
                var width = elements[i].getAttribute('width');
                if (width === '1') {
                  render = false;
                }
              }

              if (render === true) {
                elements[i].dataset.gdprDisplay = elements[i].style.display;
                elements[i].style.display = 'none';
                var _child = document.createElement('div');
                var _id = 'gdpr-' + (0, _uniqid2.default)();

                elements[i].dataset.gdprPlaceholder = true;
                elements[i].dataset.gdprUniqId = _id;
                _child.setAttribute('id', _id);
                _child.setAttribute('class', 'gdpr-legacy');

                if (elements[i].nextSibling) {
                  elements[i].parentNode.insertBefore(_child, elements[i].nextSibling);
                } else {
                  elements[i].parentNode.appendChild(_child);
                }
                _child.innerHTML = this.config.iFrameBlob;
              }
            }
          }
        }
      }
    }
  }, {
    key: 'init',
    value: function init() {
      if (typeof window !== 'undefined') {
        if (typeof window !== 'undefined' && typeof window.reactGpdrSettings !== 'undefined') {
          this.config = (0, _assign2.default)({}, this.config, window.reactGpdrSettings);
        }

        if (this.props.settings) {
          this.config = (0, _assign2.default)({}, this.config, this.props.settings);
        }

        window.addEventListener('hashchange', this.listener);
        window.addEventListener('scroll', this.scroller);
        this.updateDoc();
      }
    }
  }, {
    key: 'iframeBlob',
    value: function iframeBlob() {
      if (this.iFrameBlobData) {
        return this.iFrameBlobData;
      }
      var blob = new Blob([this.config.iFrameBlob], { type: 'text/html' });
      this.iFrameBlobData = URL.createObjectURL(blob);
      return this.iFrameBlobData;
    }
  }, {
    key: 'toggleCookieSettings',
    value: function toggleCookieSettings() {
      var showCookieSettings = this.state.showCookieSettings;

      this.setState({ showCookieSettings: !showCookieSettings });
    }
  }, {
    key: 'saveCookieConsent',
    value: function saveCookieConsent(level) {
      this.cookieOptions.domain = this.getDomainName(window.location.host);
      this.cookies.set('cookieConsent', level, this.cookieOptions);
      this.cookies.set('cookieAccepted', 'true', this.cookieOptions);
      this.setState({ openedByHash: false });
      if (this.config.reload === false) {
        this.updateDoc();
        if (typeof window.history !== 'undefined' && typeof window.history.pushState !== 'undefined') {
          window.history.pushState(null, null, window.location.href.split('#')[0]);
        } else {
          window.location.hash = '';
        }

        window.scrollTo(0, this.position);
      } else {
        window.location.reload(true);
      }
    }
  }, {
    key: 'cookieConsentLvl',
    value: function cookieConsentLvl() {
      if (this.config.ignoreUserAgent === true) {
        return 3;
      }
      return Number(this.cookies && this.cookies.get('cookieConsent')) || null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _AppContext2.default.Provider,
        {
          value: {
            cookieConsent: this.cookieConsentLvl,
            saveCookieConsent: this.saveCookieConsent,
            toggleCookieSettings: this.toggleCookieSettings,
            cookies: this.cookies,
            config: this.config
          } },
        _react2.default.createElement(
          'div',
          { className: 'gdpr-support' },
          this.config.compact ? _react2.default.createElement(_CookieBarCompact2.default, { open: this.state.openedByHash }) : _react2.default.createElement(_CookieBar2.default, { open: this.state.openedByHash })
        )
      );
    }
  }]);
  return CookieConsent;
}(_react2.default.Component);

CookieConsent.defaultProps = {};

exports.default = function (props) {
  return _react2.default.createElement(
    _Providers2.default.Consumer,
    null,
    function (providers) {
      return _react2.default.createElement(CookieConsent, (0, _extends3.default)({}, props, providers));
    }
  );
};