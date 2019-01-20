'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', function () {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      /* eslint-disable-next-line */
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

var port = process.env.PORT || 3000;
var host = process.env.HOST || 'localhost';
_reactLoadable2.default.preloadAll().then(function () {
  console.log('> Starting on port http://' + host + ':' + port);
  (0, _express2.default)().use(function (req, res) {
    return app.handle(req, res);
  }).listen(port, host, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('> Started on port http://' + host + ':' + port);
  });
});