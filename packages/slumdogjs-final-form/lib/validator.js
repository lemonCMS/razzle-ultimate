'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALIDATE_ERROR_NOT_SAME_PASSWORD = exports.VALIDATE_ERROR_NUMERIC = exports.VALIDATE_ERROR_INTEGER = exports.VALIDATE_ERROR_PASSWORD = exports.VALIDATE_ERROR_PHONENUMBER = exports.VALIDATE_ERROR_URL = exports.VALIDATE_ERROR_EMAIL = exports.VALIDATE_ERROR_MANDATORY = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.mandatory = mandatory;
exports.mandatoryUrl = mandatoryUrl;
exports.url = url;
exports.mandatoryInteger = mandatoryInteger;
exports.integer = integer;
exports.mandatoryNumeric = mandatoryNumeric;
exports.numeric = numeric;
exports.mandatoryEmail = mandatoryEmail;
exports.email = email;
exports.mandatoryPassword = mandatoryPassword;
exports.password = password;
exports.isSamePassword = isSamePassword;
exports.mandatoryPhonenumber = mandatoryPhonenumber;
exports.phonenumber = phonenumber;
exports.mandatoryArray = mandatoryArray;
exports.omit = omit;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _isNaN2 = require('lodash/isNaN');

var _isNaN3 = _interopRequireDefault(_isNaN2);

var _omitBy2 = require('lodash/omitBy');

var _omitBy3 = _interopRequireDefault(_omitBy2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _isNull2 = require('lodash/isNull');

var _isNull3 = _interopRequireDefault(_isNull2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isIntTest = function isIntTest(value) {
  if ((0, _isNaN3.default)(value) || (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x; //eslint-disable-line
};

_validator2.default.isPassword = function (str) {
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(str);
};

_validator2.default.isPhoneNumber = function (str) {
  var re = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
  return re.test(str);
};

_validator2.default.isNull = function (str) {
  return _validator2.default.isEmpty(str);
};

_validator2.default.mapToString = function (values) {
  (0, _map3.default)(values, function (value, key) {
    values[key] = (0, _isNaN3.default)(value) || (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' || typeof value === 'boolean' || isIntTest(value) ? value : String(value);
  });
  return values;
};

var VALIDATE_ERROR_MANDATORY = exports.VALIDATE_ERROR_MANDATORY = 'Dit veld is verplicht';
var VALIDATE_ERROR_EMAIL = exports.VALIDATE_ERROR_EMAIL = 'Voer een geldig e-mailadres in';
var VALIDATE_ERROR_URL = exports.VALIDATE_ERROR_URL = 'Voer een geldig webadres in';
var VALIDATE_ERROR_PHONENUMBER = exports.VALIDATE_ERROR_PHONENUMBER = 'Voer een geldig telefoonnummer in';
var VALIDATE_ERROR_PASSWORD = exports.VALIDATE_ERROR_PASSWORD = 'Minimaal 8 karakters waarvan 1 leesteken';
var VALIDATE_ERROR_INTEGER = exports.VALIDATE_ERROR_INTEGER = 'Voer een geldig afgerond getal in';
var VALIDATE_ERROR_NUMERIC = exports.VALIDATE_ERROR_NUMERIC = 'Voer een geldig getal in';
var VALIDATE_ERROR_NOT_SAME_PASSWORD = exports.VALIDATE_ERROR_NOT_SAME_PASSWORD = 'De wachtwoorden komen niet overeen';

function mandatory(value) {
  if (!value || _validator2.default.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  return null;
}

function mandatoryUrl(value) {
  if (!value || _validator2.default.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  if (!_validator2.default.isURL(String(value), { require_protocol: true })) return VALIDATE_ERROR_URL;
  return null;
}

function url(value) {
  if (value && !_validator2.default.isURL(String(value), { require_protocol: true })) return VALIDATE_ERROR_URL;
  return null;
}

function mandatoryInteger(value) {
  if (!_validator2.default.isInt(String(value), { allow_leading_zeroes: true })) return VALIDATE_ERROR_INTEGER;
  return null;
}

function integer(value) {
  if (value && !_validator2.default.isInt(String(value), { allow_leading_zeroes: true })) return VALIDATE_ERROR_INTEGER;
  return null;
}

function mandatoryNumeric(value) {
  if (!_validator2.default.isFloat(String(value))) return VALIDATE_ERROR_NUMERIC;
  return null;
}

function numeric(value) {
  if (value && !_validator2.default.isFloat(String(value), { allow_leading_zeroes: true })) return VALIDATE_ERROR_NUMERIC;
  return null;
}

function mandatoryEmail(value) {
  if (!value || _validator2.default.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  if (!_validator2.default.isEmail(String(value))) return VALIDATE_ERROR_EMAIL;
  return null;
}

function email(value) {
  if (value && !_validator2.default.isEmail(String(value))) return VALIDATE_ERROR_EMAIL;
  return null;
}

function mandatoryPassword(value) {
  if (!value || _validator2.default.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  if (value && !_validator2.default.isPassword(String(value))) return VALIDATE_ERROR_PASSWORD;
  return null;
}

function password(value) {
  if (value && !_validator2.default.isPassword(String(value))) return VALIDATE_ERROR_PASSWORD;
  return null;
}

function isSamePassword(value1, value2) {
  if (!password(value1) && !password(value2)) {
    if (value1 !== value2) return VALIDATE_ERROR_NOT_SAME_PASSWORD;
  }
  return null;
}

function mandatoryPhonenumber(value) {
  if (!value || _validator2.default.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  if (value && !_validator2.default.isPhoneNumber(String(value))) return VALIDATE_ERROR_PHONENUMBER;
  return null;
}

function phonenumber(value) {
  if (value && !_validator2.default.isPhoneNumber(String(value))) return VALIDATE_ERROR_PHONENUMBER;
  return null;
}

function mandatoryArray(value) {
  if (!value || value.length === 0) return VALIDATE_ERROR_MANDATORY;
  return null;
}

function omit(errors) {
  return (0, _omitBy3.default)((0, _omitBy3.default)(errors, _isUndefined3.default), _isNull3.default);
}

_validator2.default.omit = omit;
_validator2.default.mandatoryArray = mandatoryArray;
_validator2.default.phonenumber = phonenumber;
_validator2.default.mandatoryPhonenumber = mandatoryPhonenumber;
_validator2.default.isSamePassword = isSamePassword;
_validator2.default.password = password;
_validator2.default.mandatoryPassword = mandatoryPassword;
_validator2.default.email = email;
_validator2.default.mandatoryEmail = mandatoryEmail;
_validator2.default.numeric = numeric;
_validator2.default.mandatoryNumeric = mandatoryNumeric;
_validator2.default.integer = integer;
_validator2.default.mandatoryInteger = mandatoryInteger;
_validator2.default.url = url;
_validator2.default.mandatoryUrl = mandatoryUrl;
_validator2.default.mandatory = mandatory;

exports.default = _validator2.default;