"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr, mapper) {
  var q = _promise2.default.resolve();
  return _promise2.default.all(arr.map(function (v) {
    q = q.then(function () {
      return mapper(v);
    });
    return q;
  }));
};