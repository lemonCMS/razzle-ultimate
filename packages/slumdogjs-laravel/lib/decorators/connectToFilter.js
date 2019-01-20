'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign2 = require('babel-runtime/core-js/object/assign');

var _assign3 = _interopRequireDefault(_assign2);

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

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.createAllParamsForFetch = createAllParamsForFetch;
exports.default = connectToFilter;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _assign4 = require('lodash/assign');

var _assign5 = _interopRequireDefault(_assign4);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _actions = require('../../../slumdogjs-redux/src/routeState/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var myTimeout = null;

function createAllParamsForFetch(props, match, history) {
  var pathname = (0, _get3.default)(history, 'location.pathname', null);
  var params = (0, _assign5.default)((0, _get3.default)(props, ['routesState', 'routes', pathname], {}), _qs2.default.parse((0, _get3.default)(history, 'location.search', ''), { ignoreQueryPrefix: true }));

  return (0, _omit3.default)(params, function (value) {
    return !value;
  });
}

function connectToFilter(rest) {
  var path = null;
  if (rest !== 'undefined') {
    if ((typeof rest === 'undefined' ? 'undefined' : (0, _typeof3.default)(rest)) === 'object') {
      if (rest.path !== 'undefined') {
        path = rest.path;
      }
    }
  }

  return function (WrappedComponent) {
    var _dec, _class;

    var StateConnection = (_dec = (0, _reactRedux.connect)(function (state) {
      return {
        routesState: state.routesState
      };
    }), (0, _reactRouter.withRouter)(_class = _dec(_class = function (_Component) {
      (0, _inherits3.default)(StateConnection, _Component);

      function StateConnection() {
        (0, _classCallCheck3.default)(this, StateConnection);

        var _this = (0, _possibleConstructorReturn3.default)(this, (StateConnection.__proto__ || (0, _getPrototypeOf2.default)(StateConnection)).call(this));

        _this.switchPage = _this.switchPage.bind(_this);
        _this.pushOnState = _this.pushOnState.bind(_this);
        _this.pushStateAttempt = _this.pushStateAttempt.bind(_this);
        _this.pushSearch = _this.pushSearch.bind(_this);
        _this.mergeState = _this.mergeState.bind(_this);
        _this.clearTimer = _this.clearTimer.bind(_this);
        _this.getParams = _this.getParams.bind(_this);
        _this.toggleOnStack = _this.toggleOnStack.bind(_this);
        _this.inputOnStack = _this.inputOnStack.bind(_this);
        _this.onStack = _this.onStack.bind(_this);
        _this.sortOnStack = _this.sortOnStack.bind(_this);
        _this.removeFromState = _this.removeFromState.bind(_this);
        _this.alphabet = _this.alphabet.bind(_this);
        _this.alphaFilter = _this.alphaFilter.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.state = {
          form: {}
        };
        return _this;
      }

      (0, _createClass3.default)(StateConnection, [{
        key: 'onStack',
        value: function onStack(key, value) {
          return !!this.state.form[key] && this.state.form[key].indexOf(String(value)) > -1;
        }
      }, {
        key: 'getParams',
        value: function getParams() {
          return createAllParamsForFetch(this.props);
        }
      }, {
        key: 'reset',
        value: function reset() {
          this.setState({ form: {} }, this.pushStateAttempt);
        }
      }, {
        key: 'stringifyFullState',
        value: function stringifyFullState(state) {
          return _qs2.default.stringify((0, _omit3.default)(state, function (value) {
            return !value;
          }), { encode: false });
        }
      }, {
        key: 'inputOnStack',
        value: function inputOnStack(key) {
          return this.state.form[key] ? this.state.form[key] : '';
        }
      }, {
        key: 'sortOnStack',
        value: function sortOnStack(field) {
          var form = this.state.form;


          if ((0, _has3.default)(form, 'sort')) {
            if ((0, _get3.default)(form, 'sort.field') === field && (0, _get3.default)(form, 'sort.order') === 'asc') {
              form.sort = {
                field: field,
                order: 'desc'
              };
            } else {
              form.sort = {
                field: field,
                order: 'asc'
              };
            }
          } else {
            form.sort = {
              field: field,
              order: 'asc'
            };
          }
          this.setState({ form: form }, this.pushStateAttempt);
        }
      }, {
        key: 'toggleOnStack',
        value: function toggleOnStack(key, value) {
          var form = this.state.form;


          if (!form[key]) {
            form[key] = [value];
          } else {
            var index = form[key].indexOf(String(value));
            if (index < 0) {
              form[key].push(value);
            } else {
              delete form[key][index];
            }
          }
          if (form.page) {
            form.page = null;
          }
          this.setState({ form: form }, this.pushStateAttempt);
        }
      }, {
        key: 'removeFromState',
        value: function removeFromState(key) {
          var form = this.state.form;

          delete form[key];
          this.setState({ form: form }, this.pushStateAttempt);
        }
      }, {
        key: 'mergeState',
        value: function mergeState(values) {
          var form = this.state.form;

          var state = (0, _assign3.default)({}, form, values);
          this.setState({ form: state }, this.pushStateAttempt);
        }
      }, {
        key: 'pushOnState',
        value: function pushOnState(key, value) {
          var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var form = this.state.form;

          form[key] = value;
          if (form.page) {
            form.page = null;
          }

          if ((0, _keys2.default)(clear).length > 0) {
            (0, _map3.default)(clear, function (field) {
              form[field] = undefined;
            });
          }

          this.setState({ form: form }, this.pushStateAttempt);
        }
      }, {
        key: 'pushStateAttempt',
        value: function pushStateAttempt() {
          if (path === null) {
            path = (0, _get3.default)(this.props.history, 'location.pathname');
          }

          this.props.dispatch((0, _actions.storeState)(path, this.state.form));
          var q = this.stringifyFullState((0, _omit3.default)(this.state.form, ['t']));
          if (q.length > 0) {
            this.props.history.push({
              pathname: path,
              search: _qs2.default.stringify((0, _omit3.default)(this.state.form, ['t'])),
              state: this.state
            });
          } else {
            var d = new Date();
            this.props.history.push({
              pathname: path,
              search: _qs2.default.stringify({ t: d.getTime() }),
              state: this.state
            });
          }
        }
      }, {
        key: 'switchPage',
        value: function switchPage(page) {
          var form = this.state.form;

          form.page = page;
          this.setState({ form: form }, this.pushStateAttempt);
        }
      }, {
        key: 'pushSearch',
        value: function pushSearch(value) {
          var _this2 = this;

          var form = this.state.form;

          form.search = value;
          this.setState({
            form: form
          }, function () {
            if (myTimeout) {
              clearTimeout(myTimeout);
            }
            myTimeout = setTimeout(function () {
              _this2.pushOnState('search', value);
            }, 500);
          });
        }
      }, {
        key: 'clearTimer',
        value: function clearTimer() {
          if (myTimeout) {
            clearTimeout(myTimeout);
          }
        }
      }, {
        key: 'alphabet',
        value: function alphabet() {
          var _this3 = this;

          var stack = this.inputOnStack('alfa');
          var name = 'alfa';
          var range = ['~', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
          return _react2.default.createElement(
            'div',
            { className: 'panel panel-border-tb' },
            _react2.default.createElement(
              'div',
              { className: 'panel-heading' },
              _react2.default.createElement(
                'h4',
                { className: 'panel-title' },
                'Alfabet'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel-body' },
              _react2.default.createElement(
                'div',
                { className: 'filter-color-container' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  (0, _map3.default)(range, function (val, key) {
                    return _this3.alphaFilter(name, key, val, stack);
                  })
                )
              )
            )
          );
        }
      }, {
        key: 'alphaFilter',
        value: function alphaFilter(name, key, item, stack) {
          var _this4 = this;

          if (stack === item) {
            return _react2.default.createElement(
              'button',
              {
                type: 'button',
                key: key,
                className: (0, _classnames2.default)({
                  btn: true,
                  'btn-link': true,
                  'filter-size-box': true,
                  active: stack === item
                }),
                onClick: function onClick() {
                  _this4.removeFromState(name, item);
                }
              },
              item
            );
          }

          return _react2.default.createElement(
            'button',
            {
              type: 'button',
              key: key,
              className: (0, _classnames2.default)({
                btn: true,
                'btn-link': true,
                'filter-size-box': true,
                active: stack === item
              }),
              onClick: function onClick() {
                _this4.pushOnState(name, item);
              }
            },
            item
          );
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, {
            switchPage: this.switchPage,
            pushOnState: this.pushOnState,
            removeFromState: this.removeFromState,
            getParams: this.getParams,
            toggleOnStack: this.toggleOnStack,
            inputOnStack: this.inputOnStack,
            onStack: this.onStack,
            sortOnStack: this.sortOnStack,
            alphabet: this.alphabet,
            pushSearch: this.pushSearch,
            pushStateAttempt: this.pushStateAttempt,
            mergeState: this.mergeState,
            reset: this.reset
          }));
        }
      }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, state) {
          return {
            form: (0, _assign3.default)({}, (0, _get3.default)(props.routesState, ['routes', [props.match.path]], {}), (0, _get3.default)(props, 'location.state.form', {}), state.form)
          };
        }
      }]);
      return StateConnection;
    }(_react.Component)) || _class) || _class);


    return StateConnection;
  };
}