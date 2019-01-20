'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _dec, _class; /* eslint-disable */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _prismLight = require('react-syntax-highlighter/dist/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/dist/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _prism = require('react-syntax-highlighter/dist/styles/prism/prism');

var _prism2 = _interopRequireDefault(_prism);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _connectToList = require('../../../../slumdogjs-laravel/src/decorators/connectToList');

var _connectToList2 = _interopRequireDefault(_connectToList);

var _actions = require('../../../../slumdogjs-redux/src/store/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);

var List = (_dec = (0, _connectToList2.default)({
  key: 'users',
  api: '/users',
  path: '/laravel',
  cols: [{
    name: 'Status',
    show: 'active',
    filterBy: [{ desc: 'Active', value: '1' }, { desc: 'Disabled', value: '0' }],
    translate: {
      false: _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['fas', 'minus'], fixedWidth: true }),
      true: _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['fas', 'check'], fixedWidth: true })
    }
  }, { name: 'ID', show: 'id', order: true }, { name: 'Name', show: 'name', order: true, edit: true }, { name: 'Email', show: 'email', order: true, edit: true }, { name: 'Created', show: 'created_at', filter: 'date', order: true, edit: true }, { name: 'Change status',
    show: 'active',
    checkbox: function checkbox(e, record, dispatch) {
      var data = (0, _assign2.default)({}, record, { active: e.target.checked });
      dispatch((0, _actions.update)('users', '/users', record.id, data));
      dispatch((0, _actions.updateListItem)('users', data));
    }
  }]
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
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
              'Laravel helpers'
            ),
            _react2.default.createElement(
              'p',
              null,
              'SlumDogJs comes with some helpers for laravel. With these helper you can create an admin interface'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              'import connectToList from \'@wicked_query/slumdogjs/lib/laravel/decorators/connectToList\';\n' + '\n' + '@connectToList({\n' + '  key: \'users\',\n' + '  api: \'/users\',\n' + '  path: \'/laravel\',\n' + '  cols: [\n' + '    {\n' + '      name: \'Status\',\n' + '      show: \'active\',\n' + '      filterBy: [\n' + '        {desc: \'Active\', value: \'1\'},\n' + '        {desc: \'Disabled\', value: \'0\'},\n' + '      ],\n' + '      translate: {\n' + '        false: <FontAwesomeIcon icon={[\'fas\', \'minus\']} fixedWidth />,\n' + '        true: <FontAwesomeIcon icon={[\'fas\', \'check\']} fixedWidth />\n' + '      }\n' + '    },\n' + '    {name: \'ID\', show: \'id\', order: true},\n' + '    {name: \'Name\', show: \'name\', order: true, edit: true},\n' + '    {name: \'Email\', show: \'email\', order: true, edit: true},\n' + '    {name: \'Created\', show: \'created_at\', filter: \'date\', order: true, edit: true},\n' + '  ]\n' + '})\n' + 'class List extends Component {\n' + '  render() {\n' + '    return (this.props.children);\n' + '  }\n' + '}\n' + ''
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'Api'
            ),
            _react2.default.createElement(
              'code',
              null,
              '@connectList'
            ),
            ' expects an object containing at least the following configuration',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'js', showLineNumbers: true, style: _prism2.default },
              '{\n' + '  key: \'users\',\n' + '  api: \'/users\',\n' + '  path: \'/laravel\',\n' + '  cols: []\n' + '}\n'
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
                    'The key under which the response data should be saved in the redux store ',
                    _react2.default.createElement(
                      'code',
                      null,
                      'store'
                    )
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
                    'Path to the resource relative to ',
                    _react2.default.createElement(
                      'code',
                      null,
                      '/api'
                    ),
                    ' proxy'
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
                      'path'
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
                    'Webbrowser full pathname'
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
                      'cols'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'array'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Containing the columns you wish to display in what format'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              _react2.default.createElement(
                'code',
                null,
                'cols'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Cols is an array constructed of at least the following'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'js', showLineNumbers: true, style: _prism2.default },
              '[\n' + '  {name: \'Table header\', show: \'column name\'}\n' + ']'
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
                      'name'
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
                    'Table header'
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
                      'show'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'string|array'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Containing the column name to display or an ',
                    _react2.default.createElement(
                      'code',
                      null,
                      'array'
                    ),
                    ' of column names.'
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
                      'filter'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      '\'date\', \'dateTime\', \'numeric\', \'unixDate\', \'unixDateTime\''
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Change how the data is shown'
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
                      'append'
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
                    'Append a string onto the data like a % character.'
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
                      'order'
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
                    'Set to true if it is possible to sort on this field.'
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
                    'boolen'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Navigate to the edit page.'
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
                      'onClick'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _prismLight2.default,
                      { language: 'js', style: _prism2.default },
                      'function(record, history) { }'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Callback containing the current record and history object for navigation.'
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
                      'translate'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _prismLight2.default,
                      { language: 'js', style: _prism2.default },
                      'translate: [\n' + ' {valueTranslateFrom: \'valueTranslateTo\'},\n' + ']'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Array of objects containing the value and their corresponding display value. Handy for converting booleans of numerics into user friendly texts. The translation may contain strings as React.Components.'
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
                      'filterBy'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _prismLight2.default,
                      { language: 'js', style: _prism2.default },
                      'filterBy: [\n' + ' {desc: \'Active\', value: \'1\'},\n' + ' {desc: \'Disabled\', value: \'0\'},\n' + ']'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Define the values this field can be filterd on.'
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
                      'checkbox'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _prismLight2.default,
                      { language: 'js', style: _prism2.default },
                      'checkbox: (event, item, dispatch) => { }'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Display an checkbox instead of a value. When clicked you are able to dispatch an action.'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { md: 12 },
            this.props.children
          )
        )
      );
    }
  }]);
  return List;
}(_react.Component)) || _class);

List.defaultProps = {};

exports.default = List;