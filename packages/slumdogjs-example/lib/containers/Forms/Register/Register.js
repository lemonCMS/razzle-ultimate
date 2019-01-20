'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Form = require('../../../../../slumdogjs-final-form/src/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Button = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Select = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Radio = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Checkbox = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _DateTime = require('../../../../../slumdogjs-final-form/src/Bootstrap4/DateTime');

var _DateTime2 = _interopRequireDefault(_DateTime);

var _Dropdown = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Plupload = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Plupload');

var _Plupload2 = _interopRequireDefault(_Plupload);

var _TinyMce = require('../../../../../slumdogjs-final-form/src/Bootstrap4/TinyMce');

var _TinyMce2 = _interopRequireDefault(_TinyMce);

var _ComplexRow = require('../../../../../slumdogjs-final-form/src/Bootstrap4/ComplexRow');

var _ComplexRow2 = _interopRequireDefault(_ComplexRow);

var _Complex = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Show = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Show');

var _Show2 = _interopRequireDefault(_Show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes from 'prop-types';

var Register = function (_Component) {
  (0, _inherits3.default)(Register, _Component);

  function Register() {
    (0, _classCallCheck3.default)(this, Register);
    return (0, _possibleConstructorReturn3.default)(this, (Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).apply(this, arguments));
  }

  (0, _createClass3.default)(Register, [{
    key: 'render',
    value: function render() {

      var size = {
        labelSize: { xs: 3 },
        fieldSize: { xs: 9 }
      };

      var sizeComplex = {
        fieldSize: { xs: 12 }
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, {
          script: [{ type: 'text/javascript', src: '/js/plupload-2.1.9/plupload.full.min.js' }, { type: 'text/javascript', src: '/js/tinymce/js/tinymce/tinymce.min.js' }]
        }),
        _react2.default.createElement(
          'h2',
          null,
          'Registration Form'
        ),
        _react2.default.createElement(
          'p',
          null,
          'This form demonstrates a form with field arrays. here you can add multiple domestic pets and children.'
        ),
        _react2.default.createElement(
          _Form2.default,
          { debug: true },
          _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Username', placeholder: 'email', name: 'username', type: 'text' }, size)),
          _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Password', placeholder: 'password', name: 'password', type: 'password' }, size)),
          _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Firstname', placeholder: 'Firstname', name: 'firstname', type: 'text' }, size)),
          _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Lastname', placeholder: 'Lastname', name: 'lastname', type: 'text' }, size)),
          _react2.default.createElement(
            _Select2.default,
            (0, _extends3.default)({ label: 'Favorite Color', name: 'color' }, size),
            _react2.default.createElement(
              'option',
              { value: '1' },
              'White'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              'Black'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              'Red'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              'Pink'
            ),
            _react2.default.createElement(
              'option',
              { value: '5' },
              'Green'
            ),
            _react2.default.createElement(
              'option',
              { value: '6' },
              'Brown'
            ),
            _react2.default.createElement(
              'option',
              { value: '7' },
              'Grey'
            )
          ),
          _react2.default.createElement(
            _Checkbox2.default,
            (0, _extends3.default)({ label: 'Favorite food', name: 'colorCB' }, size),
            _react2.default.createElement(
              'option',
              { value: '1' },
              'pizza'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              'patat'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              'pasta'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              'steak'
            ),
            _react2.default.createElement(
              'option',
              { value: '5' },
              'burger'
            ),
            _react2.default.createElement(
              'option',
              { value: '6' },
              'chicken'
            ),
            _react2.default.createElement(
              'option',
              { value: '7' },
              'fish'
            )
          ),
          _react2.default.createElement(
            _Radio2.default,
            (0, _extends3.default)({ label: 'Favorite season', name: 'colorRadio' }, size),
            _react2.default.createElement(
              'option',
              { value: '1' },
              'Winter'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              'Spring'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              'Summer'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              'Fall'
            )
          ),
          _react2.default.createElement(_DateTime2.default, (0, _extends3.default)({ label: 'Date of birth', name: 'date-time' }, size)),
          _react2.default.createElement(
            _Dropdown2.default,
            (0, _extends3.default)({ label: 'Drop down', name: 'dropdown' }, size),
            _react2.default.createElement(
              'option',
              { value: '', selected: true },
              '-- choose --'
            ),
            _react2.default.createElement(
              'option',
              { value: '1' },
              'White'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              'Black'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              'Red'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              'Pink'
            ),
            _react2.default.createElement(
              'option',
              { value: '5' },
              'Green'
            ),
            _react2.default.createElement(
              'option',
              { value: '6' },
              'Brown'
            ),
            _react2.default.createElement(
              'option',
              { value: '7' },
              'Grey'
            )
          ),
          _react2.default.createElement(_Plupload2.default, (0, _extends3.default)({ name: 'plupload', label: 'Upload' }, size, { conf: { id: 'plupload' } })),
          _react2.default.createElement(
            'h4',
            { className: 'mb-1' },
            'Do you have pets?'
          ),
          _react2.default.createElement(_ComplexRow2.default, (0, _extends3.default)({
            label: 'Domestic pets',
            name: "pets"
          }, size, {
            left: { xs: 9 },
            right: { xs: 3 },
            moveBtn: { variant: 'secondary' },
            removeBtn: { variant: 'danger' },
            render: function render(name) {
              return _react2.default.createElement(
                _Row2.default,
                null,
                _react2.default.createElement(
                  _Col2.default,
                  { xs: 6 },
                  _react2.default.createElement(_Input2.default, (0, _extends3.default)({
                    placeholder: 'Name',
                    name: name + '.name',
                    type: "text"
                  }, sizeComplex))
                ),
                _react2.default.createElement(
                  _Col2.default,
                  { xs: 6 },
                  _react2.default.createElement(_Input2.default, (0, _extends3.default)({
                    placeholder: 'Age',
                    name: name + '.age',
                    type: "number"
                  }, sizeComplex))
                )
              );
            }
          })),
          _react2.default.createElement(
            'h4',
            { className: 'mb-1' },
            'Do you have children?'
          ),
          _react2.default.createElement(
            _Radio2.default,
            (0, _extends3.default)({ label: 'Children', name: 'hasChildren' }, size),
            _react2.default.createElement(
              'option',
              { value: '0' },
              'No'
            ),
            _react2.default.createElement(
              'option',
              { value: '1' },
              'Yes'
            )
          ),
          _react2.default.createElement(
            _Show2.default,
            { show: function show(data) {
                if (data.hasChildren && data.hasChildren === '1') {
                  return true;
                }
                return false;
              } },
            _react2.default.createElement(_Complex2.default, (0, _extends3.default)({
              label: 'Children',
              name: "children"
            }, size, {
              left: { xs: 9 },
              right: { xs: 3 },
              moveBtn: { variant: 'secondary', size: 'sm' },
              removeBtn: { variant: 'danger', size: 'sm' },
              render: function render(name) {
                return _react2.default.createElement(
                  _Row2.default,
                  null,
                  _react2.default.createElement(
                    _Col2.default,
                    { xs: 6 },
                    _react2.default.createElement(_Input2.default, (0, _extends3.default)({
                      placeholder: 'Name',
                      name: name + '.name',
                      type: "text"
                    }, sizeComplex))
                  ),
                  _react2.default.createElement(
                    _Col2.default,
                    { xs: 6 },
                    _react2.default.createElement(_Input2.default, (0, _extends3.default)({
                      placeholder: 'Age',
                      name: name + '.age',
                      type: "number"
                    }, sizeComplex))
                  )
                );
              }
            }))
          ),
          _react2.default.createElement(_TinyMce2.default, (0, _extends3.default)({ name: 'about', label: 'About you' }, size, { help: 'Tell us something about yourself.' })),
          _react2.default.createElement(
            _Button2.default,
            { type: 'button' },
            'Send'
          )
        )
      );
    }
  }]);
  return Register;
}(_react.Component);

Register.defaultProps = {};

exports.default = Register;