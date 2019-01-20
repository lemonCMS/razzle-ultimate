'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Wrap = require('./Wrappers/Wrap');

var _Wrap2 = _interopRequireDefault(_Wrap);

var _Radio = require('./Types/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _decorator = require('../utils/decorator');

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _decorator2.default)({ type: 'text', component: _Radio2.default })(_Wrap2.default);