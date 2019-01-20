'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AfterRoot = function AfterRoot() {
  return _react2.default.createElement(
    'div',
    { id: 'root', className: 'toggled' },
    'DO_NOT_DELETE_THIS_YOU_WILL_BREAK_YOUR_APP'
  );
};

var Document = function (_React$PureComponent) {
  (0, _inherits3.default)(Document, _React$PureComponent);

  function Document() {
    (0, _classCallCheck3.default)(this, Document);
    return (0, _possibleConstructorReturn3.default)(this, (Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).apply(this, arguments));
  }

  (0, _createClass3.default)(Document, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          helmet = _props.helmet,
          assets = _props.assets,
          data = _props.data,
          bundles = _props.bundles;

      var chunks = bundles.filter(function (bundle) {
        return bundle.file.endsWith('.js');
      });
      var styles = bundles.filter(function (bundle) {
        return bundle.file.endsWith('.css');
      });
      // get attributes from React Helmet
      var htmlAttrs = helmet.htmlAttributes.toComponent();
      var bodyAttrs = helmet.bodyAttributes.toComponent();

      var scripts = (0, _keys2.default)(assets).filter(function (key) {
        return assets[key] && assets[key].js;
      }).map(function (key, index) {
        return _react2.default.createElement('script', { key: index, src: assets[key].js, defer: true });
      });

      /* eslint-disable jsx-a11y/html-has-lang */
      /* eslint-disable react/no-danger */
      return _react2.default.createElement(
        'html',
        htmlAttrs,
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement(
            'title',
            null,
            'Welcome to the Afterparty'
          ),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
          assets.client.css && _react2.default.createElement('link', { rel: 'stylesheet', href: assets.client.css }),
          styles.map(function (style, key) {
            return process.env.NODE_ENV === 'production' ? _react2.default.createElement('link', { rel: 'stylesheet', key: key, href: '/' + style.file }) : _react2.default.createElement('link', {
              rel: 'stylesheet',
              key: key,
              href: '' + process.env.PROTOCOL + (process.env.DEV_HOSTNAME ? process.env.DEV_HOSTNAME : process.env.HOST) + ':' + (parseInt(process.env.PORT, 10) + 1) + '/' + style.file
            });
          }),
          helmet.title.toComponent(),
          helmet.meta.toComponent(),
          helmet.link.toComponent(),
          helmet.style.toComponent()
        ),
        _react2.default.createElement(
          'body',
          bodyAttrs,
          _react2.default.createElement(AfterRoot, null),
          scripts,
          chunks.map(function (chunk, key) {
            return process.env.NODE_ENV === 'production' ? _react2.default.createElement('script', { key: key, src: '/' + chunk.file }) : _react2.default.createElement('script', {
              key: key,
              src: '' + process.env.PROTOCOL + (process.env.DEV_HOSTNAME ? process.env.DEV_HOSTNAME : process.env.HOST) + ':' + (parseInt(process.env.PORT, 10) + 1) + '/' + chunk.file
            });
          }),
          _react2.default.createElement('span', {
            dangerouslySetInnerHTML: { __html: '<script>window.__PRELOADED_STATE__ = ' + (0, _stringify2.default)(data) + '</script>' // prettier-ignore
            }
          })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var assets = _ref.assets,
            data = _ref.data,
            renderPage = _ref.renderPage;
        var page;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return renderPage();

              case 2:
                page = _context.sent;
                return _context.abrupt('return', (0, _assign2.default)({ assets: assets, data: data }, page));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return Document;
}(_react2.default.PureComponent);

exports.default = Document;