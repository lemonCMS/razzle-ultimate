'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _webpack = require('react-loadable/webpack');

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _apiClient = require('../apiClient');

var _apiClient2 = _interopRequireDefault(_apiClient);

var _render = require('../render');

var _render2 = _interopRequireDefault(_render);

var _Providers = require('../context/Providers');

var _Providers2 = _interopRequireDefault(_Providers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paths = require('razzle/config/paths');
// eslint-disable-next-line
// const assets = require(paths.appManifest);
var assets = {};
if (_fsExtra2.default.pathExistsSync(paths.appManifest)) {
  assets = _fsExtra2.default.readJsonSync(paths.appManifest);
} else {
  console.warn('assets.json does not exists');
}

var vendorAssets = {};

if (process.env.RAZZLE_VENDOR_MANIFEST) {
  console.log(require.resolve(process.env.RAZZLE_VENDOR_MANIFEST));

  var vendorFile = paths.appBuild + '/' + process.env.RAZZLE_VENDOR_MANIFEST;
  if (_fsExtra2.default.pathExistsSync(vendorFile)) {
    vendorAssets = _fsExtra2.default.readJsonSync(vendorFile);
  } else {
    console.log('vendor.json does not exists: ', vendorFile);
  }
}

var index = (0, _express2.default)();

index.disable('x-powered-by');
if (process.env.NODE_ENV === 'production') {
  index.use(_express2.default.static(paths.appBuildPublic));
} else {
  index.use(_express2.default.static(paths.appPublic));
}

exports.default = index;
var render = exports.render = function render(_ref, stats, routes, _ref2, wrapper, awaitRender) {
  var req = _ref.req,
      res = _ref.res;
  var initializeStore = _ref2.initializeStore,
      providers = _ref2.providers;
  var ErrorPage = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

  (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var history, store, bundles, customRenderer, html;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            history = (0, _createMemoryHistory2.default)({
              initialEntries: [req.originalUrl]
            });

            providers.client = (0, _apiClient2.default)(req);
            providers.history = history;
            store = initializeStore({}, providers);
            bundles = [];

            customRenderer = function customRenderer(node) {
              var modules = [];
              var App = _react2.default.createElement(
                _reactLoadable2.default.Capture,
                { report: function report(moduleName) {
                    return modules.push(moduleName);
                  } },
                _react2.default.createElement(
                  _Providers2.default.Provider,
                  { value: { providers: providers } },
                  _react2.default.createElement(
                    _reactRedux.Provider,
                    { store: store },
                    typeof wrapper === 'function' ? wrapper(node) : node
                  )
                )
              );
              var Html = (0, _server.renderToString)(App);
              bundles = (0, _webpack.getBundles)(stats, modules);

              return {
                html: Html,
                bundles: bundles
              };
            };

            if (!(typeof awaitRender === 'function')) {
              _context.next = 10;
              break;
            }

            _context.next = 10;
            return awaitRender({ store: store, providers: providers, req: req, res: res });

          case 10:
            _context.next = 12;
            return _reactLoadable2.default.preloadReady();

          case 12:
            _context.next = 14;
            return (0, _render2.default)({
              req: req,
              res: res,
              customRenderer: customRenderer,
              routes: routes,
              assets: (0, _assign2.default)({}, vendorAssets, assets),
              store: store,
              history: history,
              client: providers.client,
              ErrorPage: ErrorPage
            });

          case 14:
            html = _context.sent;

            res.send(html);
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](0);

            console.trace('MOUNT ERROR', _context.t0);
            res.json(_context.t0);

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 18]]);
  }))();
};