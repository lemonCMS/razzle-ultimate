'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = reducer;

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _extend2 = require('lodash/extend');

var _extend3 = _interopRequireDefault(_extend2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *Reducer
 */
var initialState = {};

function reducer() {
  var orgState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var state = (0, _assign2.default)({}, orgState);
  var key = action.key;

  var keyState = (0, _assign2.default)({}, (0, _get3.default)(state, key));
  var status = (0, _get3.default)(action, 'error.status', false);
  switch (action.type) {

    case constants.STORE_UPDATE_LIST_ITEM:
      {
        var list = (0, _get3.default)(keyState, 'list.data', []);
        if (list.length === 0) {
          return state;
        }

        var index = (0, _findIndex3.default)(list, { id: action.params.id });
        if (index > -1) {
          list[index] = action.params;
        }
        var newState = (0, _set3.default)(keyState, 'list.data', list);
        return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, newState)));
      }
    case constants.STORE_LIST:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, { pending: true, failed: false })));
    case constants.STORE_LIST_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        list: action.result,
        pending: false,
        success: true,
        failed: false
      })));
    case constants.STORE_LIST_FAIL:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        pending: false,
        failed: true,
        error: status
      })));

    case constants.STORE_LIST_ALL:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        all: keyState.all,
        allStatus: { pending: true }
      })));
    case constants.STORE_LIST_ALL_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        all: action.result,
        allStatus: { pending: false, success: true }
      })));
    case constants.STORE_LIST_ALL_FAIL:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        all: keyState.all,
        allStatus: { pending: false, failed: true, error: status }
      })));
    case constants.STORE_LIST_ALL_CLEAR:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, { all: {} })));

    case constants.STORE_ITEM_LOAD:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, (0, _get3.default)(keyState, 'item', {}), {
          pending: true
        })
      })));
    case constants.STORE_ITEM_LOAD_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, action.result, {
          pending: false,
          success: true
        })
      })));
    case constants.STORE_ITEM_LOAD_FAIL:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: { pending: false, failed: true, error: status }
      })));

    case constants.STORE_ITEM_DELETE:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, { pending: true })
      })));
    case constants.STORE_ITEM_DELETE_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, { pending: false, deleted: true })
      })));
    case constants.STORE_ITEM_DELETE_FAIL:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, { pending: false, failed: true, error: status })
      })));
    case constants.STORE_ITEM_LOCAL_UPDATE:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, keyState.item, action.payload)
      })));
    case constants.STORE_ITEM_UPDATE:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, keyState.item, {
          actionStatus: {
            pending: true,
            success: false,
            failed: false
          }
        })
      })));
    case constants.STORE_ITEM_UPDATE_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, action.result, {
          actionStatus: {
            pending: false,
            success: true,
            failed: false
          }
        })
      })));
    case constants.STORE_ITEM_UPDATE_FAIL:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, keyState.item, {
          actionStatus: {
            pending: false,
            success: false,
            failed: true
          }
        })
      })));
    case constants.STORE_ITEM_PROPERTY:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, keyState.item, {
          actionStatus: {
            pending: true,
            success: false,
            failed: false,
            property: true
          }
        })
      })));
    case constants.STORE_ITEM_PROPERTY_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, (0, _extend3.default)(keyState.item, action.props), {
          actionStatus: {
            pending: false,
            success: true,
            failed: false,
            property: true
          }
        })
      })));
    case constants.STORE_ITEM_PROPERTY_FAIL:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, keyState.item, {
          actionStatus: {
            pending: false,
            success: false,
            failed: true,
            property: true
          }
        })
      })));

    case constants.STORE_ITEM_CREATE:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, {
          actionStatus: { pending: true, failed: false, success: false }
        })
      })));
    case constants.STORE_ITEM_CREATE_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, action.payload, action.result, {
          actionStatus: {
            pending: false,
            success: true
          }
        })
      })));
    case constants.STORE_ITEM_CREATE_FAIL:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, {
          actionStatus: { pending: false, failed: true, success: false }
        })
      })));

    case constants.STORE_LIST_CLEAR:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, { list: {}, success: false, pending: false, failed: false })));
    case constants.STORE_ITEM_CLEAR:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, { item: {} })));
    case constants.STORE_ITEM_CLEAR_NETWORK_STATE:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, keyState, {
        item: (0, _assign2.default)({}, keyState.item, { actionStatus: {} })
      })));

    case constants.STORE_STACK_ITEM_LOAD:
      {
        var stack = (0, _clone3.default)((0, _get3.default)(state, [key, 'stack'], {}));
        stack[action.id] = (0, _assign2.default)({}, { pending: true, success: false });
        return (0, _assign2.default)({}, state, (0, _set3.default)({}, [key, 'stack'], stack));
      }

    case constants.STORE_STACK_ITEM_LOAD_SUCCESS:
      {
        var _stack = (0, _clone3.default)((0, _get3.default)(state, [key, 'stack'], {}));
        _stack[action.id] = (0, _assign2.default)({}, action.result, {
          pending: false,
          success: true
        });
        return (0, _assign2.default)({}, state, (0, _set3.default)({}, [key, 'stack'], _stack));
      }
    case constants.STORE_STACK_ITEM_LOAD_FAILED:
      {
        var _stack2 = (0, _clone3.default)((0, _get3.default)(state, [key, 'stack'], {}));
        _stack2[action.id] = (0, _assign2.default)({}, { pending: false, failed: true });
        return (0, _assign2.default)({}, state, (0, _set3.default)({}, [key, 'stack'], _stack2));
      }
    case constants.STORE_STACK_ITEM_CLEAR:
      {
        var _stack3 = (0, _omit3.default)((0, _clone3.default)((0, _get3.default)(state, [key, 'stack'], {})), action.id);
        return (0, _assign2.default)({}, state, (0, _set3.default)({}, [key, 'stack'], _stack3));
      }

    case constants.STORE_SIMPLE_LOAD:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, { pending: true, success: false, failed: false })));
    case constants.STORE_SIMPLE_LOAD_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, action.result, {
        path: action.path,
        params: action.params,
        pending: false,
        success: true,
        failed: false
      })));
    case constants.STORE_SIMPLE_LOAD_FAIL:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, (0, _assign2.default)({}, { pending: false, success: false, failed: true })));
    case constants.STORE_SIMPLE_CLEAR:
      return (0, _assign2.default)({}, state, (0, _set3.default)(state, key, {}));

    default:
      return (0, _assign2.default)({}, state);
  }
}