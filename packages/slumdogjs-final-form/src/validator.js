import validator from 'validator';
import _map from 'lodash/map';
import _isNaN from 'lodash/isNaN';
import _omitBy from 'lodash/omitBy';
import _isUndefined from 'lodash/isUndefined';
import _isNull from 'lodash/isNull';

const isIntTest = (value) => {
  if (_isNaN(value) || typeof value === 'object') {
    return false;
  }
  const x = parseFloat(value);
  return (x | 0) === x; //eslint-disable-line
};

validator.isPassword = (str) => {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(str);
};

validator.isPhoneNumber = (str) => {
  const re = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
  return re.test(str);
};

validator.isNull = str => validator.isEmpty(str);

validator.mapToString = (values) => {
  _map(values, (value, key) => {
    values[key] = _isNaN(value) || typeof value === 'object' || typeof value === 'boolean' || isIntTest(value) ? value : String(value);
  });
  return values;
};

export const VALIDATE_ERROR_MANDATORY = 'Dit veld is verplicht';
export const VALIDATE_ERROR_EMAIL = 'Voer een geldig e-mailadres in';
export const VALIDATE_ERROR_URL = 'Voer een geldig webadres in';
export const VALIDATE_ERROR_PHONENUMBER = 'Voer een geldig telefoonnummer in';
export const VALIDATE_ERROR_PASSWORD = 'Minimaal 8 karakters waarvan 1 leesteken';
export const VALIDATE_ERROR_INTEGER = 'Voer een geldig afgerond getal in';
export const VALIDATE_ERROR_NUMERIC = 'Voer een geldig getal in';
export const VALIDATE_ERROR_NOT_SAME_PASSWORD = 'De wachtwoorden komen niet overeen';

export function mandatory(value) {
  if (!value || validator.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  return null;
}

export function mandatoryUrl(value) {
  if (!value || validator.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  if (!validator.isURL(String(value), {require_protocol: true})) return VALIDATE_ERROR_URL;
  return null;
}

export function url(value) {
  if (value && !validator.isURL(String(value), {require_protocol: true})) return VALIDATE_ERROR_URL;
  return null;
}

export function mandatoryInteger(value) {
  if (!validator.isInt(String(value), {allow_leading_zeroes: true})) return VALIDATE_ERROR_INTEGER;
  return null;
}

export function integer(value) {
  if (value && !validator.isInt(String(value), {allow_leading_zeroes: true})) return VALIDATE_ERROR_INTEGER;
  return null;
}

export function mandatoryNumeric(value) {
  if (!validator.isFloat(String(value))) return VALIDATE_ERROR_NUMERIC;
  return null;
}

export function numeric(value) {
  if (value && !validator.isFloat(String(value), {allow_leading_zeroes: true})) return VALIDATE_ERROR_NUMERIC;
  return null;
}

export function mandatoryEmail(value) {
  if (!value || validator.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  if (!validator.isEmail(String(value))) return VALIDATE_ERROR_EMAIL;
  return null;
}

export function email(value) {
  if (value && !validator.isEmail(String(value))) return VALIDATE_ERROR_EMAIL;
  return null;
}

export function mandatoryPassword(value) {
  if (!value || validator.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  if (value && !validator.isPassword(String(value))) return VALIDATE_ERROR_PASSWORD;
  return null;
}

export function password(value) {
  if (value && !validator.isPassword(String(value))) return VALIDATE_ERROR_PASSWORD;
  return null;
}

export function isSamePassword(value1, value2) {
  if (!password(value1) && !password(value2)) {
    if (value1 !== value2) return VALIDATE_ERROR_NOT_SAME_PASSWORD;
  }
  return null;
}

export function mandatoryPhonenumber(value) {
  if (!value || validator.isNull(String(value))) return VALIDATE_ERROR_MANDATORY;
  if (value && !validator.isPhoneNumber(String(value))) return VALIDATE_ERROR_PHONENUMBER;
  return null;
}

export function phonenumber(value) {
  if (value && !validator.isPhoneNumber(String(value))) return VALIDATE_ERROR_PHONENUMBER;
  return null;
}

export function mandatoryArray(value) {
  if (!value || value.length === 0) return VALIDATE_ERROR_MANDATORY;
  return null;
}

export function omit(errors) {
  return _omitBy(_omitBy(errors, _isUndefined), _isNull);
}


validator.omit = omit;
validator.mandatoryArray = mandatoryArray;
validator.phonenumber = phonenumber;
validator.mandatoryPhonenumber = mandatoryPhonenumber;
validator.isSamePassword = isSamePassword;
validator.password = password;
validator.mandatoryPassword = mandatoryPassword;
validator.email = email;
validator.mandatoryEmail = mandatoryEmail;
validator.numeric = numeric;
validator.mandatoryNumeric = mandatoryNumeric;
validator.integer = integer;
validator.mandatoryInteger = mandatoryInteger;
validator.url = url;
validator.mandatoryUrl = mandatoryUrl;
validator.mandatory = mandatory;


export default validator;
