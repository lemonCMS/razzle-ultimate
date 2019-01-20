'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRestore = exports.AUTH_CLEAR_REDIRECT_AFTER_LOGIN = exports.AUTH_REDIRECT_AFTER_LOGIN = exports.AUTH_UPDATE_FAIL = exports.AUTH_UPDATE_SUCCESS = exports.AUTH_UPDATE = exports.AUTH_REGISTER_FAIL = exports.AUTH_REGISTER_SUCCESS = exports.AUTH_REGISTER = exports.AUTH_SET_ACCOUNT_AFFILIATES_FAILED = exports.AUTH_SET_ACCOUNT_AFFILIATES_SUCCESS = exports.AUTH_SET_ACCOUNT_AFFILIATES = exports.AUTH_PASSWORD_CHANGE_FAIL = exports.AUTH_PASSWORD_CHANGE_SUCCESS = exports.AUTH_PASSWORD_CHANGE = exports.AUTH_PASSWORD_FAIL = exports.AUTH_PASSWORD_SUCCESS = exports.AUTH_PASSWORD = exports.AUTH_USERINFO_FAIL = exports.AUTH_USERINFO_SUCCSS = exports.AUTH_USERINFO = exports.AUTH_AUTH_LOGOUT = exports.AUTH_AUTH_SET_TOKEN = exports.AUTH_LOGIN_FAIL = exports.AUTH_LOGIN_SUCCESS = exports.AUTH_LOGIN = exports.AUTH_RESTORE = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.logout = logout;
exports.setAccountAffiliates = setAccountAffiliates;
exports.getUserAttempt = getUserAttempt;
exports.getUserSuccess = getUserSuccess;
exports.getUserFailure = getUserFailure;
exports.setUser = setUser;
exports.redirectAfterLogin = redirectAfterLogin;
exports.clearRedirectAfterLogin = clearRedirectAfterLogin;
exports.getUser = getUser;
exports.loginAttempt = loginAttempt;
exports.loginSucces = loginSucces;
exports.loginFailure = loginFailure;
exports.register = register;
exports.update = update;
exports.authenticate = authenticate;
exports.setToken = setToken;
exports.passwordReset = passwordReset;
exports.passwordChange = passwordChange;
exports.isLoaded = isLoaded;
exports.default = reducer;

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTH_RESTORE = exports.AUTH_RESTORE = '@@redux-persist-component/auth';
var AUTH_LOGIN = exports.AUTH_LOGIN = 'AUTH_LOGIN_REQUEST';
var AUTH_LOGIN_SUCCESS = exports.AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
var AUTH_LOGIN_FAIL = exports.AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAILED';
var AUTH_AUTH_SET_TOKEN = exports.AUTH_AUTH_SET_TOKEN = 'AUTH_AUTH_SET_TOKEN';
var AUTH_AUTH_LOGOUT = exports.AUTH_AUTH_LOGOUT = 'AUTH_AUTH_LOGOUT';
var AUTH_USERINFO = exports.AUTH_USERINFO = 'AUTH_USERINFO';
var AUTH_USERINFO_SUCCSS = exports.AUTH_USERINFO_SUCCSS = 'AUTH_USERINFO_SUCCSS';
var AUTH_USERINFO_FAIL = exports.AUTH_USERINFO_FAIL = 'AUTH_USERINFO_FAIL';
var AUTH_PASSWORD = exports.AUTH_PASSWORD = 'AUTH_PASSWORD_REQUEST';
var AUTH_PASSWORD_SUCCESS = exports.AUTH_PASSWORD_SUCCESS = 'AUTH_PASSWORD_SUCCESS';
var AUTH_PASSWORD_FAIL = exports.AUTH_PASSWORD_FAIL = 'AUTH_PASSWORD_FAILED';
var AUTH_PASSWORD_CHANGE = exports.AUTH_PASSWORD_CHANGE = 'AUTH_PASSWORD_CHANGE_REQUEST';
var AUTH_PASSWORD_CHANGE_SUCCESS = exports.AUTH_PASSWORD_CHANGE_SUCCESS = 'AUTH_PASSWORD_CHANGE_SUCCESS';
var AUTH_PASSWORD_CHANGE_FAIL = exports.AUTH_PASSWORD_CHANGE_FAIL = 'AUTH_PASSWORD_CHANGE_FAILED';
var AUTH_SET_ACCOUNT_AFFILIATES = exports.AUTH_SET_ACCOUNT_AFFILIATES = 'AUTH_SET_ACCOUNT_AFFILIATES';
var AUTH_SET_ACCOUNT_AFFILIATES_SUCCESS = exports.AUTH_SET_ACCOUNT_AFFILIATES_SUCCESS = 'AUTH_SET_ACCOUNT_AFFILIATES_SUCCES';
var AUTH_SET_ACCOUNT_AFFILIATES_FAILED = exports.AUTH_SET_ACCOUNT_AFFILIATES_FAILED = 'AUTH_SET_ACCOUNT_AFFILIATES_FAILED';
var AUTH_REGISTER = exports.AUTH_REGISTER = 'AUTH_REGISTER';
var AUTH_REGISTER_SUCCESS = exports.AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
var AUTH_REGISTER_FAIL = exports.AUTH_REGISTER_FAIL = 'AUTH_REGISTER_FAIL';
var AUTH_UPDATE = exports.AUTH_UPDATE = 'AUTH_UPDATE';
var AUTH_UPDATE_SUCCESS = exports.AUTH_UPDATE_SUCCESS = 'AUTH_UPDATE_SUCCESS';
var AUTH_UPDATE_FAIL = exports.AUTH_UPDATE_FAIL = 'AUTH_UPDATE_FAIL';
var AUTH_REDIRECT_AFTER_LOGIN = exports.AUTH_REDIRECT_AFTER_LOGIN = 'AUTH_REDIRECT_AFTER_LOGIN';
var AUTH_CLEAR_REDIRECT_AFTER_LOGIN = exports.AUTH_CLEAR_REDIRECT_AFTER_LOGIN = 'AUTH_CLEAR_REDIRECT_AFTER_LOGIN';

var authRestore = exports.authRestore = function authRestore() {
  return {
    save: function save(state) {
      return { token: state.token, loggedIn: state.loggedIn };
    },
    restore: function restore(_ref) {
      var dispatch = _ref.dispatch,
          result = _ref.result,
          currentState = _ref.currentState;

      if (result.token && currentState.token && result.token !== currentState.token) {
        dispatch({ action: AUTH_RESTORE, result: result });
      }
    }
  };
};

function logout() {
  return function (_ref2) {
    var dispatch = _ref2.dispatch,
        cookies = _ref2.cookies;

    cookies.removeItem('token').then(function () {
      dispatch({ type: AUTH_AUTH_LOGOUT });
    });
  };
}

function setAccountAffiliates(path, params) {
  return {
    types: [AUTH_SET_ACCOUNT_AFFILIATES, AUTH_SET_ACCOUNT_AFFILIATES_SUCCESS, AUTH_SET_ACCOUNT_AFFILIATES_FAILED],
    promise: function promise(_ref3) {
      var client = _ref3.client;
      return client.put(path, params);
    }
  };
}

function getUserAttempt() {
  return {
    type: AUTH_USERINFO
  };
}

function getUserSuccess(result) {
  return {
    type: AUTH_USERINFO_SUCCSS,
    result: result
  };
}

function getUserFailure(Exception) {
  return {
    type: AUTH_USERINFO_FAIL,
    exception: Exception
  };
}

function setUser(data) {
  return {
    type: AUTH_USERINFO_SUCCSS,
    result: data
  };
}

function redirectAfterLogin(data) {
  return {
    type: AUTH_REDIRECT_AFTER_LOGIN,
    result: data
  };
}

function clearRedirectAfterLogin() {
  return {
    type: AUTH_CLEAR_REDIRECT_AFTER_LOGIN
  };
}

function getUser(token) {
  return {
    types: [AUTH_USERINFO, AUTH_USERINFO_SUCCSS, AUTH_USERINFO_FAIL],
    promise: function promise(_ref4) {
      var client = _ref4.client,
          cookies = _ref4.cookies;
      return cookies.setItem('token', token).then(function () {
        return client.get('/authuser', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
      });
    }
  };
}

function loginAttempt() {
  return {
    type: AUTH_LOGIN
  };
}

function loginSucces(result) {
  return function (_ref5) {
    var dispatch = _ref5.dispatch;

    dispatch(getUser(result.access_token));
    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      result: result
    });
  };
}

function loginFailure() {
  return {
    type: AUTH_LOGIN_FAIL
  };
}

function register(payload) {
  return {
    types: [AUTH_REGISTER, AUTH_REGISTER_SUCCESS, AUTH_REGISTER_FAIL],
    promise: function promise(_ref6) {
      var client = _ref6.client;
      return client.post('/register', payload);
    }
  };
}

function update(payload) {
  return {
    types: [AUTH_UPDATE, AUTH_UPDATE_SUCCESS, AUTH_UPDATE_FAIL],
    promise: function promise(_ref7) {
      var client = _ref7.client;
      return client.put('/register', payload);
    }
  };
}

function authenticate(payload) {
  return function (_ref8) {
    var dispatch = _ref8.dispatch,
        client = _ref8.client;

    dispatch(loginAttempt());
    return client.post('/authenticate', {
      username: payload.username,
      password: payload.password
    }).then(function (response) {
      dispatch(loginSucces(response));
      return response;
    }).catch(function (Exception) {
      dispatch(loginFailure(Exception));
      throw Exception;
    });
  };
}

function setToken(token) {
  return function (_ref9) {
    var dispatch = _ref9.dispatch;

    dispatch({
      type: AUTH_AUTH_SET_TOKEN,
      token: token
    });
  };
}

function passwordReset(payload) {
  return {
    types: [AUTH_PASSWORD, AUTH_PASSWORD_SUCCESS, AUTH_PASSWORD_FAIL],
    promise: function promise(_ref10) {
      var client = _ref10.client;
      return client.post('/password', {
        username: payload.username
      });
    }
  };
}

function passwordChange(payload) {
  return {
    types: [AUTH_PASSWORD_CHANGE, AUTH_PASSWORD_CHANGE_SUCCESS, AUTH_PASSWORD_CHANGE_FAIL],
    promise: function promise(_ref11) {
      var client = _ref11.client;
      return client.post('/password-reset', {
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.passwordCheck,
        token: payload.token
      });
    }
  };
}

function isLoaded(globalState) {
  return globalState.auth && globalState.auth.user && (globalState.auth.user.success === true || globalState.auth.user.pending === true || globalState.auth.user.failed === true);
}

var initialState = {
  token: null,
  loggedIn: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case AUTH_AUTH_SET_TOKEN:
      return (0, _assign2.default)({}, state, {
        token: action.token,
        loggedIn: true,
        success: true,
        failed: false,
        pending: false
      });
    case AUTH_LOGIN:
      return (0, _assign2.default)({}, state, {
        token: null,
        loggedIn: false,
        loggedOut: false,
        pending: true,
        failed: false,
        success: false
      });
    case AUTH_LOGIN_SUCCESS:
      return (0, _assign2.default)({}, state, {
        token: action.result.access_token,
        loggedIn: true,
        pending: false,
        failed: false,
        success: true
      });
    case AUTH_LOGIN_FAIL:
      return (0, _assign2.default)({}, state, {
        token: null,
        loggedIn: false,
        pending: false,
        failed: true,
        success: false
      });
    case AUTH_USERINFO:
      return (0, _assign2.default)({}, state, {
        user: { pending: true, failed: false, success: false }
      });
    case AUTH_USERINFO_SUCCSS:
      {
        var result = action.result;
        return (0, _assign2.default)({}, state, {
          user: (0, _assign2.default)({}, result, {
            pending: false,
            failed: false,
            success: true
          })
        });
      }
    case AUTH_USERINFO_FAIL:
      return (0, _assign2.default)({}, {
        loggedIn: false,
        user: { pending: false, failed: true, success: false }
      });
    case AUTH_AUTH_LOGOUT:
      return (0, _assign2.default)({}, {
        token: null,
        loggedOut: true,
        loggedIn: false,
        pending: false,
        failed: false,
        success: false
      });
    case AUTH_PASSWORD:
      return (0, _assign2.default)({}, state, {
        password: { pending: true, failed: false, success: false }
      });
    case AUTH_PASSWORD_SUCCESS:
      return (0, _assign2.default)({}, state, {
        password: { pending: false, failed: false, success: true }
      });
    case AUTH_PASSWORD_FAIL:
      return (0, _assign2.default)({}, state, {
        password: { pending: false, failed: true, success: false }
      });
    case AUTH_PASSWORD_CHANGE:
      return (0, _assign2.default)({}, state, {
        passwordChange: { pending: true, failed: false, success: false }
      });
    case AUTH_PASSWORD_CHANGE_SUCCESS:
      return (0, _assign2.default)({}, state, {
        passwordChange: { pending: false, failed: false, success: true }
      });
    case AUTH_PASSWORD_CHANGE_FAIL:
      return (0, _assign2.default)({}, state, {
        passwordChange: {
          msg: action.result,
          pending: false,
          failed: true,
          success: false
        }
      });
    case AUTH_REGISTER:
      return (0, _assign2.default)({}, state, {
        register: { pending: true, failed: false, success: false }
      });
    case AUTH_REGISTER_SUCCESS:
      return (0, _assign2.default)({}, state, {
        user: action.result.user,
        token: action.result.access_token,
        loggedIn: true,
        register: { pending: false, failed: false, success: true }
      });
    case AUTH_REGISTER_FAIL:
      return (0, _assign2.default)({}, state, {
        register: { pending: false, failed: true, success: false }
      });

    case AUTH_UPDATE:
      return (0, _assign2.default)({}, state, {
        update: { pending: true, failed: false, success: false }
      });
    case AUTH_UPDATE_SUCCESS:
      return (0, _assign2.default)({}, state, {
        user: action.result,
        update: { pending: false, failed: false, success: true }
      });
    case AUTH_UPDATE_FAIL:
      return (0, _assign2.default)({}, state, {
        update: { pending: false, failed: true, success: false }
      });

    case AUTH_SET_ACCOUNT_AFFILIATES_SUCCESS:
      {
        var accountIndex = (0, _findIndex3.default)(state.user.accounts, ['id', (0, _get3.default)(action, ['result', 'id'])]);
        var affiliateIds = (0, _get3.default)(action, ['result', 'affiliate_ids'], []);
        (0, _set3.default)(state, ['user', 'accounts', accountIndex, 'affiliate_ids'], affiliateIds);
        return (0, _assign2.default)({}, state);
      }
    case AUTH_REDIRECT_AFTER_LOGIN:
      {
        return (0, _assign2.default)({}, state, { redirectAfterLogin: action.result });
      }
    case AUTH_CLEAR_REDIRECT_AFTER_LOGIN:
      {
        return (0, _assign2.default)({}, state, { redirectAfterLogin: null });
      }
    case AUTH_RESTORE:
      return (0, _assign2.default)({}, state, action.result);
    default:
      return (0, _assign2.default)({}, state);
  }
}