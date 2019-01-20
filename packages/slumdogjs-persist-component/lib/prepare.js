'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = function (initModules) {
  var modules = typeof initModules === 'string' ? [initModules] : initModules;
  var prepared = {};
  var saveRestore = function saveRestore(key) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$save = _ref.save,
        _save = _ref$save === undefined ? null : _ref$save,
        _ref$restore = _ref.restore,
        _restore = _ref$restore === undefined ? null : _ref$restore;

    return {
      save: function save(state, lastState, storage) {
        var saveState = _save ? _save(state, key, storage) : state;
        if (typeof saveState !== 'undefined') {
          var stringed = (0, _stringify2.default)(saveState);
          if (stringed !== lastState) {
            storage.setItem(key, stringed);
          }
          return stringed;
        }
        return null;
      },
      restore: function restore(_ref2) {
        var result = _ref2.result,
            dispatch = _ref2.dispatch,
            rest = (0, _objectWithoutProperties3.default)(_ref2, ['result', 'dispatch']);

        if (_restore) {
          _restore((0, _assign2.default)({ result: result, dispatch: dispatch }, rest));
        } else {
          dispatch({
            type: '@@redux-persist-component/' + key,
            result: result
          });
        }
        return true;
      }
    };
  };

  var moduleMapper = function moduleMapper(module, key) {
    if (typeof module === 'string') {
      prepared[module] = saveRestore(module);
    } else if (typeof module === 'function') {
      prepared[key] = saveRestore(key, { save: module });
    } else if ((typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) === 'object') {
      if (typeof module.save !== 'undefined' || typeof module.restore !== 'undefined') {
        prepared[key] = saveRestore(key, module);
      } else {
        (0, _keys2.default)(module).map(function (nestedKey) {
          return moduleMapper(module[nestedKey], nestedKey);
        });
      }
    }
  };

  modules.map(function (module, key) {
    return moduleMapper(module, key);
  });

  return prepared;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }