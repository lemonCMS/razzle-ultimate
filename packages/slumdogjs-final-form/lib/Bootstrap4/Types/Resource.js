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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _indexOf2 = require('lodash/indexOf');

var _indexOf3 = _interopRequireDefault(_indexOf2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _AppContext = require('../../context/AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resourcebinder = function (_React$Component) {
  (0, _inherits3.default)(Resourcebinder, _React$Component);

  function Resourcebinder() {
    (0, _classCallCheck3.default)(this, Resourcebinder);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Resourcebinder.__proto__ || (0, _getPrototypeOf2.default)(Resourcebinder)).call(this));

    _this.openResource = _this.openResource.bind(_this);
    _this.closeResource = _this.closeResource.bind(_this);
    _this.options = _this.options.bind(_this);
    _this.callBack = _this.callBack.bind(_this);
    _this.getList = _this.getList.bind(_this);
    _this.state = {
      showResource: false,
      list: []
    };
    return _this;
  }

  (0, _createClass3.default)(Resourcebinder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getList(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.getList(this.props);
    }
  }, {
    key: 'getList',
    value: function getList(props) {
      var field = props.field;

      var list = [];
      if (this.state.list.length === 0) {
        if ((0, _has3.default)(field, 'list')) {
          list = field.list;
        } else if (props.field.children) {

          list = (0, _map3.default)((0, _isArray3.default)(props.field.children) ? props.field.children : [props.field.children], function (option) {
            return { value: option.props.value, desc: option.props.children };
          });
        }
      } else {
        list = this.state.list;
      }

      this.setState({ list: list });
    }
  }, {
    key: 'options',
    value: function options() {
      var _this2 = this;

      var options = [];
      if ((0, _get3.default)(this.props.field, 'multiple', true) === true) {
        options = (0, _map3.default)(this.state.list, function (option, key) {
          if ((0, _indexOf3.default)(_this2.props.input.value, option.value) > -1) {
            return _react2.default.createElement(
              'p',
              { className: 'form-control-static', key: key },
              (0, _indexOf3.default)(_this2.props.input.value, option.value) > -1 ? _react2.default.createElement('i', { className: 'fa fa-check-square-o' }) : _react2.default.createElement('i', { className: 'fa fa-square-o' }),
              ' ',
              option.desc
            );
          }
          return null;
        });
      } else {
        options = (0, _map3.default)(this.state.list, function (option, key) {
          if (String(_this2.props.input.value) === String(option.value)) {
            return _react2.default.createElement(
              'p',
              { className: 'form-control-static', key: key },
              _react2.default.createElement('i', { className: 'fa fa-check-square-o' }),
              ' ',
              option.desc
            );
          }
          return null;
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'checkbox' },
        options
      );
    }
  }, {
    key: 'callBack',
    value: function callBack(values, list) {
      var _this3 = this;

      this.setState({
        list: list
      }, function () {

        if ((0, _get3.default)(_this3.props.field, 'multiple', true) === true) {
          _this3.props.input.onChange((0, _uniq3.default)(values));
        } else {
          _this3.props.input.onChange(values);
        }
      });
    }
  }, {
    key: 'openResource',
    value: function openResource() {
      this.setState({ showResource: true });
    }
  }, {
    key: 'closeResource',
    value: function closeResource() {
      this.setState({ showResource: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var disabled = false;
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.context.checkCondition(this.props.field.disabled());
      }

      var button = function button() {
        if (!_this4.props.field.static && !_this4.props.context.isStatic) {
          return _react2.default.createElement(
            'button',
            { type: 'button', onClick: _this4.openResource,
              disabled: disabled },
            (0, _get3.default)(_this4.props, 'field.buttonResource', 'open')
          );
        }
        return null;
      };

      var clonedValues = function clonedValues() {
        if ((0, _get3.default)(_this4.props.field, 'multiple', true) === true) {
          if ((0, _isEmpty3.default)(_this4.props.input.value)) {
            return [];
          }
          return (0, _clone3.default)(_this4.props.input.value);
        }
        return _this4.props.input.value;
      };

      var resourceProps = {
        clonedValues: clonedValues(),
        clonedList: (0, _clone3.default)(this.state.list) || (0, _clone3.default)(this.props.field.list) || [],
        callBack: this.callBack,
        show: this.state.showResource,
        closeResource: this.closeResource,
        multiple: (0, _get3.default)(this.props.field, 'multiple', true),
        name: (0, _get3.default)(this.props.field, 'name')
      };

      return _react2.default.createElement(
        'div',
        null,
        button(),
        this.options(),
        this.props.field.resource(resourceProps)
      );
    }
  }]);
  return Resourcebinder;
}(_react2.default.Component);

var Binder = function Binder(props) {
  return _react2.default.createElement(
    _AppContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(Resourcebinder, (0, _extends3.default)({ context: context }, props));
    }
  );
};

exports.default = Binder;