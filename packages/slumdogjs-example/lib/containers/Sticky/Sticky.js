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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('react-bootstrap/lib/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _prismLight = require('react-syntax-highlighter/dist/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/dist/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _prism = require('react-syntax-highlighter/dist/styles/prism/prism');

var _prism2 = _interopRequireDefault(_prism);

var _src = require('../../../../slumdogjs-sticky/src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);

var Sticky = function (_React$Component) {
  (0, _inherits3.default)(Sticky, _React$Component);

  function Sticky() {
    (0, _classCallCheck3.default)(this, Sticky);
    return (0, _possibleConstructorReturn3.default)(this, (Sticky.__proto__ || (0, _getPrototypeOf2.default)(Sticky)).apply(this, arguments));
  }

  (0, _createClass3.default)(Sticky, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Container2.default,
        { fluid: true },
        _react2.default.createElement(
          _src2.default,
          null,
          _react2.default.createElement(
            'h1',
            { style: { backgroundColor: '#fff' } },
            'Sticky Component'
          )
        ),
        _react2.default.createElement(
          'h2',
          { className: 'mt-5' },
          'Simple implementation'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Just wrap the html tag or a react component with the sticky component.',
          _react2.default.createElement('br', null),
          'Scroll this page to see that the header sticks to the top.'
        ),
        _react2.default.createElement(
          _prismLight2.default,
          { language: 'jsx', showLineNumbers: true, style: _prism2.default },
          '<StickyComponent>\n' + '  <h1>Sticky Component</h1>\n' + '</StickyComponent>'
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { xs: 12 },
            _react2.default.createElement(
              'h2',
              { className: 'mt-5' },
              'Api'
            ),
            _react2.default.createElement(
              _prismLight2.default,
              { language: 'jsx', showLineNumbers: true, style: _prism2.default },
              '<StickyComponent \n' + '  subscribe={(props) => {\n' + '    this.setState({offset: props.height});\n' + '    return null;\n' + '  }\n' + '  offset={50}\n' + '  addClassName="small"\n' + '' + '/>'
            ),
            _react2.default.createElement(
              _Table2.default,
              { size: 'sm', striped: true },
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
                      'offset'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'integer | float'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Add an ',
                    _react2.default.createElement(
                      'code',
                      null,
                      'offset'
                    ),
                    ' in pixels from the top'
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
                      'subscride'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'function(props)'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    'Get the current style properties from the component'
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
                      'addClassName'
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
                    'aAd an ',
                    _react2.default.createElement(
                      'code',
                      null,
                      'className'
                    ),
                    ' when the component gets sticky'
                  )
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null)
          )
        )
      );
    }
  }]);
  return Sticky;
}(_react2.default.Component);

Sticky.defaultProps = {};

exports.default = Sticky;