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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _dec, _dec2, _dec3, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Card = require('react-bootstrap/lib/Card');

var _Card2 = _interopRequireDefault(_Card);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _reactRedux = require('react-redux');

var _prismLight = require('react-syntax-highlighter/dist/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/dist/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _prism = require('react-syntax-highlighter/dist/styles/prism/prism');

var _prism2 = _interopRequireDefault(_prism);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _src = require('../../../../../slumdogjs-redial/src');

var _connectToForm = require('../../../../../slumdogjs-laravel/src/decorators/connectToForm');

var _connectToForm2 = _interopRequireDefault(_connectToForm);

var _actions = require('../../../../../slumdogjs-redux/src/store/actions');

var _Form = require('../../../../../slumdogjs-final-form/src/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Input = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Checkbox = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Message = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Message');

var _Message2 = _interopRequireDefault(_Message);

var _validator = require('../../../../../slumdogjs-final-form/src/validator');

var _validator2 = _interopRequireDefault(_validator);

var _Button = require('../../../../../slumdogjs-final-form/src/Bootstrap4/Button');

var _Button2 = _interopRequireDefault(_Button);

var _src2 = require('../../../../../slumdogjs-sticky/src');

var _src3 = _interopRequireDefault(_src2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);

var api = '/users';
var key = 'users';

var Item = (_dec = (0, _src.provideHooks)({
  fetch: function fetch(_ref) {
    var _ref$store = _ref.store,
        dispatch = _ref$store.dispatch,
        getState = _ref$store.getState,
        params = _ref.params;

    var promises = [];
    if (params.id && params.id !== 'new') {
      if (!(0, _actions.isLoadedItem)(key, getState(), params.id)) {
        promises.push(dispatch((0, _actions.loadItem)(key, api, params.id, {})));
      }
    }
    return _promise2.default.all(promises);
  }

}), _dec2 = (0, _reactRedux.connect)(function (state) {
  return {
    item: (0, _get3.default)(state.store, [key, 'item'], {})
  };
}), _dec3 = (0, _connectToForm2.default)({
  api: api,
  key: key
}), _dec(_class = _dec2(_class = _dec3(_class = function (_PureComponent) {
  (0, _inherits3.default)(Item, _PureComponent);

  function Item() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Item, [{
    key: 'validate',
    value: function validate(data) {
      var errors = {};
      errors.name = _validator2.default.mandatory(data.name);
      errors.email = _validator2.default.mandatoryEmail(data.email);
      return _validator2.default.omit(errors);
    }
  }, {
    key: 'render',
    value: function render() {
      var size = {
        labelSize: { md: 2 },
        fieldSize: { md: 10 }
      };
      var _props = this.props,
          edit = _props.edit,
          newItem = _props.newItem;


      return _react2.default.createElement(
        _Container2.default,
        { fluid: true },
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { md: 12 },
            _react2.default.createElement(
              'h1',
              null,
              'ConnectToForm'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Adds the handleSubmit function as a property on your component. This makes it easy in a admin environment where there a lot of forms.',
              _react2.default.createElement('br', null),
              'Correct handling of server errors.'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'js', showLineNumbers: true, style: _prism2.default },
              'import connectToForm from \'@wicked_query/slumdogjs/lib/laravel/decorators/connectToForm\';\n\n' + '@connectToForm({\n' + '  api,\n' + '  key\n' + '})' + '' + ''
            ),
            _react2.default.createElement(
              _Table2.default,
              { className: 'mt-5' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Attribute'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Type'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Description'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'api'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'path to your api relative from /api proxy.'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'key'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'string'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'The key in redux where under the data should be stored / available.'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'Added props'
            ),
            _react2.default.createElement(
              _Table2.default,
              { className: 'mt-5' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Property'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Type'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Description'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'onSubmit'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'function'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'This will handle post/put request to your server.'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'id'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'int'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'The id of the item.'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'new'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'boolean'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'true'
                    ),
                    ' when it is a new item.'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'edit'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'boolean'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      'true'
                    ),
                    ' when you are editing a item.'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _Col2.default,
            { md: 12, className: 'mt-5' },
            _react2.default.createElement(
              'h2',
              null,
              'Example simple user form'
            ),
            _react2.default.createElement(
              _Card2.default,
              null,
              _react2.default.createElement(
                _Card2.default.Header,
                null,
                'You\'re editing:',
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.state.name || 'new user'
                )
              ),
              _react2.default.createElement(
                _Card2.default.Body,
                null,
                _react2.default.createElement(
                  _Form2.default,
                  {
                    className: 'horizontal',
                    initialValues: this.state,
                    validate: this.validate,
                    onSubmit: this.props.onSubmit,
                    'static': !edit && !newItem
                  },
                  _react2.default.createElement(
                    _src3.default,
                    null,
                    _react2.default.createElement(
                      _Row2.default,
                      { className: 'mb-2 message-min-height' },
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 8 },
                        _react2.default.createElement(
                          _Message2.default,
                          { type: 'success' },
                          'Your changes have been saved.'
                        ),
                        _react2.default.createElement(
                          _Message2.default,
                          { type: 'error' },
                          'There is a problem, please check the form.'
                        )
                      ),
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 4 },
                        _react2.default.createElement(
                          _Button2.default,
                          { className: 'float-right',
                            type: 'submit',
                            variant: 'primary' },
                          'save'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Name',
                    name: 'name',
                    autoComplete: 'off',
                    type: 'text' }, size)),
                  _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Email',
                    name: 'email',
                    type: 'email' }, size)),
                  _react2.default.createElement(
                    _Checkbox2.default,
                    { name: 'active',
                      fieldSize: { md: { span: 10, offset: 2 } } },
                    _react2.default.createElement(
                      'option',
                      { value: true },
                      'Actief'
                    )
                  ),
                  _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'Created',
                    name: 'created_at',
                    type: 'text',
                    'static': true }, size)),
                  _react2.default.createElement(_Input2.default, (0, _extends3.default)({ label: 'updated',
                    name: 'updated_at',
                    type: 'text',
                    'static': true }, size))
                )
              )
            )
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (state.id !== props.item.id || state.updated_at !== props.item.updated_at) {
        return props.item;
      }
      return null;
    }
  }]);
  return Item;
}(_react.PureComponent)) || _class) || _class) || _class);

Item.defaultProps = {};

exports.default = Item;