'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

    _this.scroller = _this.scroller.bind(_this);
    _this.reposition = _this.reposition.bind(_this);
    _this.subscribe = _this.subscribe.bind(_this);
    _this.getScrollTop = _this.getScrollTop.bind(_this);
    _this.setFixedProps = _this.setFixedProps.bind(_this);
    _this.scrollTop = null;
    _this.rect = null;
    _this.sticky = null;
    _this.placeHolder = null;
    _this.timer = null;
    _this.domState = {
      style: {},
      hasStyle: false,
      scrollTop: 0,
      oldStyle: {}
    };
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (window && this.sticky) {
        this.props.events.map(function (event) {
          return window.addEventListener(event, _this2.scroller);
        });
      }
      document.onreadystatechange = function () {
        if (document.readyState === "complete") {
          _this2.reposition();
        }
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.offset !== prevProps.offset) {
        this.reposition();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      if (window && this.sticky) {
        this.props.events.map(function (event) {
          return window.removeEventListener(event, _this3.scroller);
        });
      }
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      this.rect = this.sticky.getBoundingClientRect();
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }
  }, {
    key: 'setFixedProps',
    value: function setFixedProps() {
      var oldHeight = this.rect.height;
      if (this.props.addClassName) {
        this.sticky.classList.add(this.props.addClassName);
        this.getScrollTop();
      }

      this.domState.scrollTop = this.scrollTop + this.rect.top;
      this.domState.scrollWidth = this.rect.right - this.rect.left;

      this.domState.oldStyle.position = this.sticky.style.position;
      this.domState.oldStyle.top = this.sticky.style.top;
      this.domState.oldStyle.width = this.sticky.style.width;
      this.domState.oldStyle.zIndex = this.sticky.style.zIndex;

      this.sticky.style.position = 'fixed';
      this.sticky.style.top = Math.round(this.props.offset) + 'px';
      this.sticky.style.width = Math.round(this.domState.scrollWidth) + 'px';
      this.sticky.style.zIndex = this.props.zIndex;
      this.placeHolder.style.height = Math.round(oldHeight) + 'px';
      this.domState.hasStyle = true;
      this.sticky.classList.add(this.props.className);
      this.subscribe(this.rect);
    }
  }, {
    key: 'reposition',
    value: function reposition() {
      var _this4 = this;

      if (this.domState.hasStyle === true) {
        (0, _keys2.default)(this.domState.oldStyle).map(function (key) {
          _this4.sticky.style[key] = _this4.domState.oldStyle[key];
          return null;
        });

        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          _this4.getScrollTop();
          _this4.setFixedProps();
        }, this.props.timeout);
      }
    }
  }, {
    key: 'subscribe',
    value: function subscribe(rect) {
      if (typeof this.props.subscribe === 'function') {
        this.props.subscribe(rect);
      }
    }
  }, {
    key: 'scroller',
    value: function scroller(event) {
      var _this5 = this;

      this.getScrollTop();
      if (event.type === 'resize' || event.type === 'pageshow') {
        // Reposition the component;
        this.reposition();
      }

      if (this.domState.hasStyle === false) {
        this.domState.scrollTop = this.scrollTop + this.rect.top;
        this.domState.scrollWidth = this.rect.right - this.rect.left;
      }

      if (Math.round(this.rect.top) <= Math.round(this.props.offset) && Math.round(this.domState.scrollTop) <= Math.round(this.scrollTop + this.props.offset)) {
        if (this.domState.hasStyle === false) {
          this.setFixedProps();
        }
      } else if (this.domState.hasStyle === true) {
        (0, _keys2.default)(this.domState.oldStyle).map(function (key) {
          _this5.sticky.style[key] = _this5.domState.oldStyle[key];
          return null;
        });

        this.placeHolder.style.height = 0;
        this.domState.hasStyle = false;
        if (this.props.addClassName) {
          this.sticky.classList.remove(this.props.addClassName);
        }
        this.sticky.classList.remove(this.props.className);
        this.subscribe(this.rect);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { ref: function ref(_ref) {
              _this6.sticky = _ref;
              return null;
            } },
          this.props.children
        ),
        _react2.default.createElement('div', { ref: function ref(_ref2) {
            _this6.placeHolder = _ref2;
            return null;
          }, style: { height: '0px' } })
      );
    }
  }]);
  return Index;
}(_react.Component);

Index.defaultProps = {
  offset: 0,
  zIndex: 1040,
  className: 'sticked',
  addClassName: '',
  events: ['scroll', 'resize', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'],
  timeout: 0
};

exports.default = Index;