'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var render = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(options) {
    var _this = this;

    var req, res, routes, assets, document, customRenderer, store, client, history, ErrorPage, rest, Doc, context, renderPage, _ref3, components, match, params, locals;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            req = options.req, res = options.res, routes = options.routes, assets = options.assets, document = options.document, customRenderer = options.customRenderer, store = options.store, client = options.client, history = options.history, ErrorPage = options.ErrorPage, rest = (0, _objectWithoutProperties3.default)(options, ['req', 'res', 'routes', 'assets', 'document', 'customRenderer', 'store', 'client', 'history', 'ErrorPage']);
            Doc = document || _Document2.default;
            context = {};

            renderPage = function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : modPageFn;
                var defaultRenderer, renderer, renderedContent, helmet;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // By default, we keep ReactDOMServer synchronous renderToString function
                        defaultRenderer = function defaultRenderer(element) {
                          return { html: ReactDOMServer.renderToString(element) };
                        };

                        renderer = customRenderer || defaultRenderer;
                        renderedContent = renderer(React.createElement(
                          _reactRouterDom.StaticRouter,
                          { location: req.originalUrl, context: context },
                          fn(_Ultimate2.default)({ routes: routes })
                        ));
                        helmet = _reactHelmet2.default.renderStatic();
                        return _context.abrupt('return', (0, _assign2.default)({ helmet: helmet }, renderedContent));

                      case 5:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function renderPage() {
                return _ref2.apply(this, arguments);
              };
            }();

            _context3.next = 6;
            return (0, _asyncMatchRoutes2.default)(routes, req._parsedUrl.pathname);

          case 6:
            _ref3 = _context3.sent;
            components = _ref3.components;
            match = _ref3.match;
            params = _ref3.params;
            locals = {
              store: store,
              match: match,
              params: params,
              client: client,
              history: history
            };
            return _context3.abrupt('return', (0, _src.authorizeWait)('authorized', components, locals).then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
              var triggers, _ref5, html, docProps, doc;

              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      triggers = (0, _src.triggerWait)('fetch', components, locals);
                      _context2.next = 3;
                      return triggers;

                    case 3:
                      if (match) {
                        _context2.next = 6;
                        break;
                      }

                      res.status(404);
                      return _context2.abrupt('return', null);

                    case 6:
                      if (!(match.path === '**')) {
                        _context2.next = 10;
                        break;
                      }

                      res.status(404);
                      _context2.next = 13;
                      break;

                    case 10:
                      if (!(match && match.redirectTo && match.path)) {
                        _context2.next = 13;
                        break;
                      }

                      res.redirect(301, req.originalUrl.replace(match.path, match.redirectTo));
                      return _context2.abrupt('return', null);

                    case 13:
                      _context2.next = 15;
                      return Doc.getInitialProps((0, _assign2.default)({
                        req: req,
                        res: res,
                        assets: assets,
                        renderPage: renderPage,
                        helmet: _reactHelmet2.default.renderStatic(),
                        data: store.getState(),
                        match: match
                      }, rest));

                    case 15:
                      _ref5 = _context2.sent;
                      html = _ref5.html;
                      docProps = (0, _objectWithoutProperties3.default)(_ref5, ['html']);
                      doc = ReactDOMServer.renderToStaticMarkup(React.createElement(Doc, docProps));
                      return _context2.abrupt('return', '<!doctype html>' + doc.replace('DO_NOT_DELETE_THIS_YOU_WILL_BREAK_YOUR_APP', html));

                    case 20:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, _this);
            }))).catch(function (error) {
              res.status(501);
              var html = '<body><h1>Error</h1><p>There was an error, please try again.</p></body>';
              if (ErrorPage !== null) {
                var docProps = (0, _assign2.default)({
                  req: req,
                  res: res,
                  assets: assets,
                  helmet: _reactHelmet2.default.renderStatic(),
                  data: store.getState(),
                  match: match
                }, rest);
                html = ReactDOMServer.renderToString(React.createElement(ErrorPage, (0, _extends3.default)({}, docProps, { error: error })));
              }
              return '<!doctype html>' + html;
            }));

          case 12:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function render(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _server = require('react-dom/server');

var ReactDOMServer = _interopRequireWildcard(_server);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouterDom = require('react-router-dom');

var _src = require('../../slumdogjs-redial/src');

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

var _Ultimate = require('./Ultimate');

var _Ultimate2 = _interopRequireDefault(_Ultimate);

var _asyncMatchRoutes = require('./asyncMatchRoutes');

var _asyncMatchRoutes2 = _interopRequireDefault(_asyncMatchRoutes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modPageFn = function modPageFn(Page) {
  return function (props) {
    return React.createElement(Page, props);
  };
};

exports.default = render;