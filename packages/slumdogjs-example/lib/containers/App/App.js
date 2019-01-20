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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = require('react-router');

var _reactRouterConfig = require('react-router-config');

var _FontAwesome = require('./FontAwesome');

var _FontAwesome2 = _interopRequireDefault(_FontAwesome);

var _Menu = require('../../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _menu = require('../../menu');

var _menu2 = _interopRequireDefault(_menu);

require('./app.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var routes = this.props.route.routes;

      return _react2.default.createElement(
        _FontAwesome2.default,
        null,
        _react2.default.createElement(_reactHelmet2.default, {
          script: [{ type: 'text/javascript', src: '/js/plupload-2.1.9/plupload.full.min.js' }, { type: 'text/javascript', src: '/js/tinymce/js/tinymce/tinymce.min.js' }]

        }),
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            'nav',
            { id: 'sidebar', className: (0, _classnames2.default)({ 'active': this.state.active }) },
            _react2.default.createElement(
              'div',
              { className: 'sidebar-header' },
              _react2.default.createElement(
                'h3',
                null,
                'SlumDogJs'
              )
            ),
            _react2.default.createElement(_Menu2.default, { menu: _menu2.default, className: 'list-unstyled components' })
          ),
          _react2.default.createElement(
            'div',
            { id: 'content' },
            _react2.default.createElement(
              'nav',
              { className: 'navbar navbar-expand-lg navbar-light bg-light' },
              _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                  'button',
                  {
                    type: 'button',
                    id: 'sidebarCollapse',
                    className: (0, _classnames2.default)({ 'navbar-btn': true, 'active': this.state.active }),
                    onClick: function onClick() {
                      var active = _this2.state.active;

                      _this2.setState({ active: !active });
                    }
                  },
                  _react2.default.createElement('span', null),
                  _react2.default.createElement('span', null),
                  _react2.default.createElement('span', null)
                ),
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-dark d-inline-block d-lg-none ml-auto', type: 'button', 'data-toggle': 'collapse',
                    'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent',
                    'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                  _react2.default.createElement('i', { className: 'fas fa-align-justify' })
                )
              )
            ),
            _react2.default.createElement(
              _reactRouter.Switch,
              null,
              (0, _reactRouterConfig.renderRoutes)(routes)
            )
          )
        )
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;