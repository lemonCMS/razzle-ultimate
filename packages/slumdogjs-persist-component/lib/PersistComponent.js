'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _reactRedux = require('react-redux');

var _prepare = require('./prepare');

var _prepare2 = _interopRequireDefault(_prepare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PersistComponent = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(PersistComponent, _React$Component);

  function PersistComponent(props) {
    (0, _classCallCheck3.default)(this, PersistComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PersistComponent.__proto__ || (0, _getPrototypeOf2.default)(PersistComponent)).call(this, props));

    _this.lastState = {};
    _this.restored = false;
    _this.state = { mounted: false };

    _this.append = _this.append.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PersistComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.mounted === false) {
        this.setState({ mounted: true }, function () {
          return _this2.append();
        });
      }
    }
  }, {
    key: 'append',
    value: function append() {
      var _this3 = this;

      var _props = this.props,
          storage = _props.storage,
          modules = _props.modules;

      var preparedModules = (0, _prepare2.default)(modules);
      this.props.store.subscribe(function () {
        var state = _this3.props.store.getState();
        if (_this3.restored === true) {
          (0, _map3.default)(preparedModules, function (module, key) {
            var newState = (0, _get3.default)(state, key);
            _this3.lastState[key] = module.save(newState, _this3.lastState[key], storage);
          });
        }
      });

      (0, _map3.default)(preparedModules, function (module, key) {
        var promise = [];
        promise.push(_this3.props.storage.getItem(key).then(function (item) {
          if (item !== null && item !== 'undefined') {
            try {
              var result = typeof item === 'string' ? JSON.parse(item) : item;
              var state = _this3.props.store.getState();
              if (state[key] && (0, _stringify2.default)(state[key]) !== item) {
                module.restore({ dispatch: _this3.props.store.dispatch, result: result, currentState: state[key], key: key });
              }
            } catch (e) {
              console.log('Json parse failed', e);
            }
          }
        }));
        _promise2.default.all(promise).then(function () {
          _this3.restored = true;
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return PersistComponent;
}(_react2.default.Component), _class.contextTypes = {
  store: _propTypes2.default.object
}, _temp);

PersistComponent.defaultProps = {};

exports.default = function (props) {
  return _react2.default.createElement(
    _reactRedux.ReactReduxContext.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(PersistComponent, (0, _extends3.default)({}, context, props));
    }
  );
};