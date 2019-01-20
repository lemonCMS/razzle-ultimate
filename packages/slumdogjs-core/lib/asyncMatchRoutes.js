'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactRouterConfig = require('react-router-config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComponents(match) {
  var _this = this;

  return match.map(function (v) {
    return v.route.component;
  }).reduce(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(result, component) {
      var res, ret;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(component && component.preload)) {
                _context.next = 14;
                break;
              }

              _context.next = 3;
              return component.preload();

            case 3:
              res = _context.sent;
              _context.t0 = [];
              _context.t1 = _toConsumableArray3.default;
              _context.next = 8;
              return result;

            case 8:
              _context.t2 = _context.sent;
              _context.t3 = (0, _context.t1)(_context.t2);
              _context.t4 = [component];
              _context.t5 = (0, _toConsumableArray3.default)([].concat(res));
              ret = _context.t0.concat.call(_context.t0, _context.t3, _context.t4, _context.t5);
              return _context.abrupt('return', ret);

            case 14:
              _context.t6 = [];
              _context.t7 = _toConsumableArray3.default;
              _context.next = 18;
              return result;

            case 18:
              _context.t8 = _context.sent;
              _context.t9 = (0, _context.t7)(_context.t8);
              _context.t10 = [component];
              return _context.abrupt('return', _context.t6.concat.call(_context.t6, _context.t9, _context.t10));

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(), []);
}

function getParams(match) {
  return match.reduce(function (result, component) {
    if (component.match && component.match.params) {
      return (0, _assign2.default)({}, result, component.match.params);
    }
    return result;
  }, {});
}

var asyncMatchRoutes = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(routes, pathname) {
    var match, params, components;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            match = (0, _reactRouterConfig.matchRoutes)(routes, pathname);
            params = getParams(match);
            _context2.next = 4;
            return getComponents(match);

          case 4:
            components = _context2.sent;
            return _context2.abrupt('return', { components: components, match: match, params: params });

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function asyncMatchRoutes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = asyncMatchRoutes;