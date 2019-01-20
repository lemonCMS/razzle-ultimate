'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

exports.default = function (props) {
  return _react2.default.createElement(
    _AppContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(CookieBar, (0, _extends3.default)({ context: context }, props));
    }
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Level = require('./Level');

var _Level2 = _interopRequireDefault(_Level);

var _AppContext = require('./context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CookieBar = function (_React$Component) {
  (0, _inherits3.default)(CookieBar, _React$Component);

  function CookieBar(props) {
    (0, _classCallCheck3.default)(this, CookieBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CookieBar.__proto__ || (0, _getPrototypeOf2.default)(CookieBar)).call(this));

    var level = props.context.cookieConsent();
    _this.state = {
      disabled: level === null,
      level: level
    };
    return _this;
  }

  (0, _createClass3.default)(CookieBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.context.config.ignoreUserAgent === false && this.props.context.config.whitelist === false) {
        if (window && this.props.context.cookies.get('cookieAccepted') !== 'true' || this.props.open === true) {
          if (this.props.context.cookies.get('cookieAccepted') !== 'true') {
            this.ref.style.display = 'block';
          }
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var ctxLevel = this.props.context.cookieConsent();
      if (this.state.level === null && ctxLevel !== null) {
        this.setState({ level: ctxLevel, disabled: false });
      }

      if (prevProps.open !== this.props.open) {
        if (this.props.open === true) {
          this.ref.style.display = 'block';
          this.setState({ level: this.props.context.cookieConsent(), disabled: false });
        } else {
          this.ref.style.display = 'none';
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.props.context.config;
      var levelClick = function levelClick(level) {
        _this2.setState({ level: Number(level), disabled: false });
      };

      var save = function save() {
        _this2.props.context.saveCookieConsent(_this2.state.level);
        _this2.ref.style.display = 'none';
      };
      return _react2.default.createElement(
        'div',
        {
          style: { display: 'none' },
          ref: function ref(_ref) {
            _this2.ref = _ref;
          } },
        _react2.default.createElement('div', { className: 'react-gdr-page-overlay' }),
        _react2.default.createElement(
          'div',
          { className: 'react-gdr-page-modal-container' },
          _react2.default.createElement(
            'div',
            { className: 'react-gdr-page-modal' },
            _react2.default.createElement('div', { className: 'header', dangerouslySetInnerHTML: { __html: data.title } }),
            _react2.default.createElement(
              'div',
              { className: 'body' },
              _react2.default.createElement('div', { className: 'info', dangerouslySetInnerHTML: { __html: data.intro } }),
              data.level3 !== null && _react2.default.createElement(
                _Level2.default,
                { onClick: function onClick() {
                    return levelClick(3);
                  }, active: this.state.level === 3 },
                data.level3
              ),
              data.level2 !== null && _react2.default.createElement(
                _Level2.default,
                { onClick: function onClick() {
                    return levelClick(2);
                  }, active: this.state.level === 2 },
                data.level2
              ),
              data.level1 !== null && _react2.default.createElement(
                _Level2.default,
                { onClick: function onClick() {
                    return levelClick(1);
                  }, active: this.state.level === 1 },
                data.level1
              ),
              _react2.default.createElement(
                'div',
                { className: 'buttonBar' },
                _react2.default.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'button',
                    disabled: this.state.disabled,
                    onClick: save
                  },
                  data.button
                )
              )
            )
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var ctxLevel = props.context.cookieConsent();
      if (state.level === null && state.level !== ctxLevel) {
        return {
          level: ctxLevel,
          disabled: false
        };
      }
      return null;
    }
  }]);
  return CookieBar;
}(_react2.default.Component);

CookieBar.defaultProps = {
  open: false,
  context: {}
};

;