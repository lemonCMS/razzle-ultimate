'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _reactRouter = require('react-router');

var _actions = require('@slumdogjs/redux/lib/store/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (custom) {
  return function (Component) {
    var _class;

    var config = (0, _assign2.default)({}, {
      api: null,
      key: null
    }, custom);

    if (!config.api) {
      console.warn('Path to your `api` is required');
    }
    if (!config.key) {
      console.warn('Redux store `key` is required');
    }

    var WrappedComponent = (0, _reactRouter.withRouter)(_class = function (_React$Component) {
      (0, _inherits3.default)(WrappedComponent, _React$Component);

      function WrappedComponent(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, WrappedComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WrappedComponent.__proto__ || (0, _getPrototypeOf2.default)(WrappedComponent)).call(this, props));

        _this.onSubmit = function () {
          var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload) {
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt('return', new _promise2.default(function (resolve) {
                      var promise = null;
                      if (!_this.state.edit) {
                        _this.props.dispatch((0, _actions.clearList)('users'));
                        promise = _this.props.dispatch((0, _actions.post)(config.key, '' + config.api, payload));
                      } else {
                        promise = _this.props.dispatch((0, _actions.update)(config.key, '' + config.api, _this.props.match.params.id, payload));
                      }

                      promise.then(function (ret) {
                        if (ret && Object.prototype.hasOwnProperty.call(ret, 'error')) {
                          resolve(ret.error);
                        }
                        if (_this.state.newItem) {
                          _this.props.history.push(_this.props.history.location.pathname.replace(/\/new$/, '') + '/' + (0, _get3.default)(ret, 'id', 'new') + '/edit');
                        } else {
                          var record = (0, _assign2.default)({}, payload, { id: parseInt(_this.props.match.params.id, 10) });
                          _this.props.dispatch((0, _actions.updateListItem)(config.key, record));
                        }
                        resolve();
                      }).catch(function (err) {
                        if (err && Object.prototype.hasOwnProperty.call(err, 'error')) {
                          resolve(err.error);
                        }
                        resolve(err);
                      });
                    }));

                  case 1:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this2);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();

        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.state = {
          id: null,
          edit: false,
          confirm: false,
          close: false,
          newItem: false,
          location: ''
        };
        return _this;
      }

      (0, _createClass3.default)(WrappedComponent, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.props.dispatch((0, _actions.clearItem)('users'));
        }
      }, {
        key: 'render',
        value: function render() {
          var props = (0, _assign2.default)({}, this.props, this.state, {
            onSubmit: this.onSubmit
          });

          return _react2.default.createElement(Component, props);
        }
      }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props) {
          var pathname = props.history.location.pathname,
              params = props.match.params;

          var edit = (0, _has3.default)(pathname.match(/(edit|confirm|close)$/g), [0]);
          var id = edit ? params.id : null;

          return {
            id: id,
            edit: edit,
            confirm: (0, _has3.default)(pathname.match(/confirm$/g), [0]),
            close: (0, _has3.default)(pathname.match(/close/g), [0]),
            newItem: (0, _has3.default)(pathname.match(/new/g), [0])
          };
        }
      }]);
      return WrappedComponent;
    }(_react2.default.Component)) || _class;

    return WrappedComponent;
  };
};