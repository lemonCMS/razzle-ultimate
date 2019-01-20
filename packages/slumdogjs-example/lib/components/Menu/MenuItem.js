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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

var _reactRouterDom = require('react-router-dom');

var _reactFontawesome = require('@fortawesome/react-fontawesome');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function (_Component) {
  (0, _inherits3.default)(MenuItem, _Component);

  function MenuItem(props, context) {
    (0, _classCallCheck3.default)(this, MenuItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call(this, props, context));

    _this.content = _this.content.bind(_this);
    _this.children = _this.children.bind(_this);
    _this.icon = _this.icon.bind(_this);
    _this.openClose = _this.openClose.bind(_this);
    _this.state = { active: false };
    return _this;
  }

  (0, _createClass3.default)(MenuItem, [{
    key: 'content',
    value: function content() {
      var item = this.props.item;

      if (_lodash2.default.has(item, 'to')) {
        return _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: item.to,
            activeClassName: 'active' },
          this.icon(),
          ' ',
          item.desc,
          ' ',
          this.openClose()
        );
      }
      return _react2.default.createElement(
        'span',
        null,
        this.icon(),
        ' ',
        item.desc
      );
    }
  }, {
    key: 'icon',
    value: function icon() {
      var item = this.props.item;

      if (_lodash2.default.has(item, 'icon')) {
        return _react2.default.createElement('i', { className: (0, _classnames2.default)('fa', 'fa-lg', 'fa-fw', item.icon) });
      }
      return null;
    }
  }, {
    key: 'openClose',
    value: function openClose() {
      var item = this.props.item;

      if (_lodash2.default.has(item, 'children')) {
        if (this.state.active === true) {
          return _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['far', 'minus-square'], className: 'float-right' });
        }

        return _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['far', 'plus-square'], className: 'float-right' });
      }
      return null;
    }
  }, {
    key: 'children',
    value: function children() {
      var _this2 = this;

      if (_lodash2.default.has(this.props.item, 'children') && this.state.active === true) {
        return _lodash2.default.map(_lodash2.default.get(this.props.item, 'children'), function (item, key) {
          return _react2.default.createElement(MenuItem, { key: key,
            item: item,
            location: _this2.props.location,
            match: _this2.props.match });
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: (0, _classnames2.default)({ 'active': this.state.active, 'open': this.state.active }) },
        this.content(),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { component: 'ul',
            transitionName: {
              enter: 'animated',
              enterActive: 'slideInLeft',
              leave: 'animatedOut',
              leaveActive: 'slideOutLeft'
            },
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500 },
          this.children()
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props) {
      if ((0, _reactRouter.matchPath)(props.location.pathname, props.item.to)) {
        return { active: true };
      }
      return { active: false };
    }
  }]);
  return MenuItem;
}(_react.Component);

exports.default = MenuItem;