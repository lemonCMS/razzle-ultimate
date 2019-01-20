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

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _omitBy2 = require('lodash/omitBy');

var _omitBy3 = _interopRequireDefault(_omitBy2);

var _ResourceModel = require('./ResourceModel');

var _ResourceModel2 = _interopRequireDefault(_ResourceModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listName = [];

var Tmp = (_dec = (0, _reactRedux.connect)(function (state) {
  var rest = {};
  (0, _map3.default)(listName, function (list) {
    return rest[list] = (0, _get3.default)(state, ['store', list], {});
  });
  return rest;
}), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(Tmp, _React$Component);

  function Tmp(props) {
    (0, _classCallCheck3.default)(this, Tmp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tmp.__proto__ || (0, _getPrototypeOf2.default)(Tmp)).call(this, props));

    (0, _uniq3.default)(listName.push(props.listName));
    return _this;
  }

  (0, _createClass3.default)(Tmp, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.show !== this.props.show || (0, _get3.default)(this.props, [this.props.listName]) !== (0, _get3.default)(nextProps, [this.props.listName]);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ResourceModel2.default, (0, _extends3.default)({}, (0, _omitBy3.default)(this.props, listName), { list: (0, _get3.default)(this.props, [this.props.listName]) }));
    }
  }]);
  return Tmp;
}(_react2.default.Component)) || _class);
exports.default = Tmp;