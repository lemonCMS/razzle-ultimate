'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = apiClient;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildTarget = typeof window === 'undefined' ? 'server' : 'client';

function apiClient(req) {
  var instance = _axios2.default.create({
    baseURL: (buildTarget === 'server' ? process.env.RAZZLE_PROXY_HOST : '') + process.env.RAZZLE_PROXY_PATH
  });

  instance.interceptors.request.use(function (conf) {
    if (buildTarget === 'server') {
      if (req.cookies && req.cookies.get('token')) {
        conf.headers.authorization = 'Bearer ' + req.cookies.get('token');
      }
      if (req.header('authorization')) {
        conf.headers.authorization = req.header('authorization');
      }
    }

    return conf;
  }, function (error) {
    return _promise2.default.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return _promise2.default.reject(error.response ? error.response.data : error);
  });

  return instance;
}