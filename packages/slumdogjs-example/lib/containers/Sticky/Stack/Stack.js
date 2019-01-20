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

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _prismLight = require('react-syntax-highlighter/dist/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/dist/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _prism = require('react-syntax-highlighter/dist/styles/prism/prism');

var _prism2 = _interopRequireDefault(_prism);

var _src = require('../../../../../slumdogjs-sticky/src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);

var Stack = function (_React$Component) {
  (0, _inherits3.default)(Stack, _React$Component);

  function Stack() {
    (0, _classCallCheck3.default)(this, Stack);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Stack.__proto__ || (0, _getPrototypeOf2.default)(Stack)).call(this));

    _this.state = {
      offset: 0,
      offsetSecond: 0

    };
    return _this;
  }

  (0, _createClass3.default)(Stack, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Container2.default,
        { fluid: true },
        _react2.default.createElement(
          'h1',
          null,
          'Sticky stacked example'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In this example there are multiple sticky components that will get stacked.',
          _react2.default.createElement('br', null),
          'This is were we will use the ',
          _react2.default.createElement(
            'code',
            null,
            'subscribe'
          ),
          ' and ',
          _react2.default.createElement(
            'code',
            null,
            'offset'
          ),
          ' attribbute.'
        ),
        _react2.default.createElement(
          'h2',
          { className: 'mt-5' },
          'Compenent #1'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In this example there are 3 elements that will be stacked.',
          _react2.default.createElement('br', null),
          'The first component can just be wrapped with the sticky component.'
        ),
        _react2.default.createElement(
          _prismLight2.default,
          { language: 'jsx', showLineNumbers: true, style: _prism2.default },
          '<Sticky>\n' + '  <h2>\n' + '    Sticky example\n' + '  </h2>\n' + '</Sticky>'
        ),
        _react2.default.createElement(
          'h2',
          { className: 'mt-5' },
          'Compenent #2'
        ),
        _react2.default.createElement(
          'p',
          null,
          'For the second component we will need a offset we would like it to be place right after the first component.',
          _react2.default.createElement('br', null),
          'So we need the height of the first component as offset for the seconden component.',
          _react2.default.createElement('br', null),
          'We need to ',
          _react2.default.createElement(
            'code',
            null,
            'subscribe'
          ),
          ' to the props of the first component and store them in the ',
          _react2.default.createElement(
            'code',
            null,
            'this.state'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Component #1'
          ),
          _react2.default.createElement('br', null),
          'Here we store the height from the first component.'
        ),
        _react2.default.createElement(
          _prismLight2.default,
          { language: 'jsx', showLineNumbers: true, style: _prism2.default },
          '<Sticky subscribe={(props) => (this.setState({offset: props.height}))}>\n' + '  <h2>\n' + '    Sticky component #1\n' + '  </h2>\n' + '</Sticky>'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Component #2'
          ),
          _react2.default.createElement('br', null),
          'Here we give the height as offset for the second component.'
        ),
        _react2.default.createElement(
          _prismLight2.default,
          { language: 'jsx', showLineNumbers: true, style: _prism2.default },
          '<Sticky offset={this.state.offset}>\n' + '  <h2>\n' + '    Sticky component #2\n' + '  </h2>\n' + '</Sticky>'
        ),
        _react2.default.createElement(
          'h2',
          { className: 'mt-5' },
          'Compenent #3'
        ),
        _react2.default.createElement(
          'p',
          null,
          'For component number 3 we repeat the steps.'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Component #2'
          ),
          _react2.default.createElement('br', null),
          'create a ',
          _react2.default.createElement(
            'code',
            null,
            'offsetSecond'
          ),
          ' from the heights off the first and second component.'
        ),
        _react2.default.createElement(
          _prismLight2.default,
          { language: 'jsx', showLineNumbers: true, style: _prism2.default },
          '<Sticky \n' + '  offset={this.state.offset}\n' + '  subscribe={(props) => {\n' + '    const {offset} = this.state;\n' + '    this.setState({offsetSecond: offset + props.height});\n' + '    return null\n' + '}}>\n' + '  <h2>\n' + '    Sticky component #1\n' + '  </h2>\n' + '</Sticky>'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Component #3'
          ),
          _react2.default.createElement('br', null),
          'Here we give the height from the first and second component as offset for the third component.'
        ),
        _react2.default.createElement(
          _prismLight2.default,
          { language: 'jsx', showLineNumbers: true, style: _prism2.default },
          '<Sticky offset={this.state.offsetSecond}>\n' + '  <h2>\n' + '    Sticky component #3\n' + '  </h2>\n' + '</Sticky>'
        ),
        _react2.default.createElement(
          _Alert2.default,
          { variant: 'info', className: 'mt-5 mb-5' },
          'Scroll down to see how it all works together.'
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { xs: 12 },
            _react2.default.createElement(
              _src2.default,
              { subscribe: function subscribe(props) {
                  return _this2.setState({ offset: props.height });
                }, addClassName: 'small' },
              _react2.default.createElement(
                'h2',
                { style: { backgroundColor: 'silver', padding: 0, margin: 0 } },
                'Sticky component #1'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan massa sit amet augue mollis, at finibus magna luctus. Nunc ultricies tincidunt urna vel finibus. Cras a nibh et est laoreet euismod ut et risus. Sed maximus nec lacus vel feugiat. Nulla interdum libero in orci tempus tempus. Praesent nec ultricies massa, quis aliquet dui. Etiam porttitor, nunc id maximus fermentum, felis leo condimentum lorem, eget pulvinar nulla lectus vel arcu. In in orci ac nisi dapibus facilisis nec et dolor. In pulvinar eros ac odio sagittis maximus. Cras pulvinar, sem et cursus commodo, sem velit auctor arcu, vel viverra lectus erat et felis. Sed faucibus aliquam varius. Ut at commodo urna. Ut in vehicula metus. Vestibulum pulvinar vel nisi a pellentesque. Suspendisse ullamcorper massa tincidunt turpis commodo aliquet. Phasellus a elementum leo.'
            ),
            _react2.default.createElement(
              _src2.default,
              { offset: this.state.offset, subscribe: function subscribe(props) {
                  var offset = _this2.state.offset;

                  _this2.setState({ offsetSecond: props.height + offset });
                  return null;
                } },
              _react2.default.createElement(
                'h2',
                { style: { backgroundColor: 'silver', padding: 0, margin: 0 } },
                'Sticky component #2 ',
                _react2.default.createElement(
                  'code',
                  null,
                  'offset: ',
                  this.state.offset,
                  'px'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Morbi interdum viverra mauris, ac laoreet est semper a. Proin ipsum dolor, cursus a nisi id, tempor laoreet libero. Cras tempus, diam ut mollis auctor, lectus felis imperdiet urna, non pellentesque tortor mi at purus. Nulla consequat rutrum metus, a pulvinar leo scelerisque ac. Phasellus quis urna pulvinar, iaculis leo eu, dictum nunc. Curabitur et placerat sapien. Curabitur consectetur nibh elementum nulla hendrerit, a sodales quam ornare. Sed sit amet est diam. Morbi efficitur leo id ornare mattis. Donec tincidunt, ante eget condimentum lacinia, est felis elementum ex, sed tristique felis ligula ut sapien. Praesent consequat justo nisi, vitae placerat lorem consequat nec. Suspendisse in porta dolor.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Aliquam lacus enim, laoreet id lacinia convallis, vulputate sed eros. Nunc vitae fringilla ligula. Donec vel velit non justo congue dapibus. Curabitur egestas lorem turpis, in finibus nulla fermentum ac. Morbi finibus rhoncus congue. Nullam ex quam, iaculis porttitor porttitor eget, dictum lacinia magna. Nam nec euismod sem. Sed et est at urna laoreet fringilla. Pellentesque imperdiet mollis nunc maximus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur urna tortor, consequat in ipsum a, laoreet accumsan enim. Vivamus sed pellentesque nisi. Mauris maximus condimentum nisl vitae malesuada.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Etiam quis metus est. Nullam pharetra fringilla massa, et tincidunt ligula. Mauris aliquam arcu quis nunc venenatis ornare. Integer sapien orci, porttitor vitae fringilla id, varius eu felis. Sed quis auctor eros, eu egestas ligula. Aliquam porta dolor libero, sit amet ullamcorper ligula tristique id. Mauris sit amet nulla arcu. Nullam suscipit vestibulum nisl a ullamcorper. Cras vel lorem sed quam viverra tempus. Quisque varius nulla quis leo luctus finibus. Aliquam varius in urna id pharetra. Aliquam vitae ex massa. Suspendisse finibus rhoncus tellus vitae condimentum.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'In hac habitasse platea dictumst. Ut consectetur sapien erat, at viverra urna viverra in. Pellentesque finibus volutpat dolor. Suspendisse nibh nulla, rhoncus ac sapien sed, pellentesque placerat urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ac laoreet ipsum, eget gravida velit. Cras at euismod purus, nec finibus felis. Curabitur sollicitudin nisl quis elementum faucibus. Donec eget purus turpis. Maecenas justo metus, aliquam ac commodo in, semper eu quam. Proin risus nisi, volutpat vel venenatis porttitor, molestie id urna. Integer lacinia pharetra velit id euismod. Sed venenatis, justo sit amet volutpat lobortis, quam nunc congue lorem, euismod lobortis elit libero quis tortor. Vivamus pulvinar mollis tempor. Morbi ac consequat ex. Duis tristique nulla in interdum imperdiet.'
            ),
            _react2.default.createElement(
              _src2.default,
              { offset: this.state.offsetSecond },
              _react2.default.createElement(
                'h2',
                { style: { backgroundColor: '#ccc', padding: 0, margin: 0 } },
                'Sticky component #3 ',
                _react2.default.createElement(
                  'code',
                  null,
                  'offset: ',
                  this.state.offsetSecond,
                  'px'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Morbi interdum viverra mauris, ac laoreet est semper a. Proin ipsum dolor, cursus a nisi id, tempor laoreet libero. Cras tempus, diam ut mollis auctor, lectus felis imperdiet urna, non pellentesque tortor mi at purus. Nulla consequat rutrum metus, a pulvinar leo scelerisque ac. Phasellus quis urna pulvinar, iaculis leo eu, dictum nunc. Curabitur et placerat sapien. Curabitur consectetur nibh elementum nulla hendrerit, a sodales quam ornare. Sed sit amet est diam. Morbi efficitur leo id ornare mattis. Donec tincidunt, ante eget condimentum lacinia, est felis elementum ex, sed tristique felis ligula ut sapien. Praesent consequat justo nisi, vitae placerat lorem consequat nec. Suspendisse in porta dolor.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Aliquam lacus enim, laoreet id lacinia convallis, vulputate sed eros. Nunc vitae fringilla ligula. Donec vel velit non justo congue dapibus. Curabitur egestas lorem turpis, in finibus nulla fermentum ac. Morbi finibus rhoncus congue. Nullam ex quam, iaculis porttitor porttitor eget, dictum lacinia magna. Nam nec euismod sem. Sed et est at urna laoreet fringilla. Pellentesque imperdiet mollis nunc maximus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur urna tortor, consequat in ipsum a, laoreet accumsan enim. Vivamus sed pellentesque nisi. Mauris maximus condimentum nisl vitae malesuada.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Etiam quis metus est. Nullam pharetra fringilla massa, et tincidunt ligula. Mauris aliquam arcu quis nunc venenatis ornare. Integer sapien orci, porttitor vitae fringilla id, varius eu felis. Sed quis auctor eros, eu egestas ligula. Aliquam porta dolor libero, sit amet ullamcorper ligula tristique id. Mauris sit amet nulla arcu. Nullam suscipit vestibulum nisl a ullamcorper. Cras vel lorem sed quam viverra tempus. Quisque varius nulla quis leo luctus finibus. Aliquam varius in urna id pharetra. Aliquam vitae ex massa. Suspendisse finibus rhoncus tellus vitae condimentum.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'In hac habitasse platea dictumst. Ut consectetur sapien erat, at viverra urna viverra in. Pellentesque finibus volutpat dolor. Suspendisse nibh nulla, rhoncus ac sapien sed, pellentesque placerat urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ac laoreet ipsum, eget gravida velit. Cras at euismod purus, nec finibus felis. Curabitur sollicitudin nisl quis elementum faucibus. Donec eget purus turpis. Maecenas justo metus, aliquam ac commodo in, semper eu quam. Proin risus nisi, volutpat vel venenatis porttitor, molestie id urna. Integer lacinia pharetra velit id euismod. Sed venenatis, justo sit amet volutpat lobortis, quam nunc congue lorem, euismod lobortis elit libero quis tortor. Vivamus pulvinar mollis tempor. Morbi ac consequat ex. Duis tristique nulla in interdum imperdiet.'
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
        _react2.default.createElement('br', null)
      );
    }
  }]);
  return Stack;
}(_react2.default.Component);

Stack.defaultProps = {};

exports.default = Stack;