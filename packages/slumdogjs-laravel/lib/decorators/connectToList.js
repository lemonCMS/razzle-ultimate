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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = connnectToList;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _flatten2 = require('lodash/flatten');

var _flatten3 = _interopRequireDefault(_flatten2);

var _compact2 = require('lodash/compact');

var _compact3 = _interopRequireDefault(_compact2);

var _cloneDeep2 = require('lodash/cloneDeep');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _reactRouterDom = require('react-router-dom');

var _lib = require('@slumdogjs/redial/lib');

var _actions = require('@slumdogjs/redux/lib/store/actions');

var _DataTable = require('../components/DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

var _connectToFilter = require('./connectToFilter');

var _connectToFilter2 = _interopRequireDefault(_connectToFilter);

var _connectToConfirm = require('./connectToConfirm');

var _connectToConfirm2 = _interopRequireDefault(_connectToConfirm);

var _Search = require('../components/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Pending = require('../components/Pending');

var _Pending2 = _interopRequireDefault(_Pending);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connnectToList(properties) {
  return function (WrappedComponent) {
    var _dec, _dec2, _dec3, _dec4, _class;

    var Connection = (_dec = (0, _lib.provideHooks)({
      fetch: function fetch(_ref) {
        var _ref$store = _ref.store,
            dispatch = _ref$store.dispatch,
            getState = _ref$store.getState,
            params = _ref.params,
            match = _ref.match,
            history = _ref.history;

        var promises = [];
        var state = (0, _connectToFilter.createAllParamsForFetch)(getState(), match, history);
        var api = function api() {
          if ((0, _isFunction3.default)(properties.api)) {
            return properties.api(params);
          }
          return properties.api;
        };

        if (!(0, _actions.isLoaded)(properties.key, getState(), state)) {
          promises.push(dispatch((0, _actions.load)(properties.key, api(), state)));
        }

        return _promise2.default.all(promises);
      }
    }), _dec2 = (0, _connectToFilter2.default)(), _dec3 = (0, _connectToConfirm2.default)(), _dec4 = (0, _reactRedux.connect)(function (state) {
      return {
        data: state.store[properties.key],
        auth: state.auth
      };
    }), _dec(_class = (0, _reactRouter.withRouter)(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_Component) {
      (0, _inherits3.default)(Connection, _Component);

      function Connection() {
        (0, _classCallCheck3.default)(this, Connection);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Connection.__proto__ || (0, _getPrototypeOf2.default)(Connection)).call(this));

        _this.filter = _this.filter.bind(_this);
        _this.show = _this.show.bind(_this);
        _this.edit = _this.edit.bind(_this);
        _this.destroy = _this.destroy.bind(_this);
        _this.path = _this.path.bind(_this);
        _this.state = {
          path: ''
        };
        return _this;
      }

      (0, _createClass3.default)(Connection, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.path();
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          // this.path();
        }
      }, {
        key: 'path',
        value: function path() {
          var path = properties.path;

          if ((0, _isFunction3.default)(path)) {
            path = path(this.props.match.params);
          }
          this.setState({ path: path });
        }
      }, {
        key: 'filter',
        value: function filter() {
          return _react2.default.createElement(
            'div',
            { className: 'card panel-border-tb' },
            _react2.default.createElement(
              'div',
              { className: 'card-body' },
              _react2.default.createElement(
                'div',
                { className: 'card-heading' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: properties.path + '/new',
                    className: 'float-right' },
                  _react2.default.createElement('i', { className: 'fa fa-plus' }),
                  ' nieuw item aanmaken'
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'card-title' },
                  'Verfijn'
                )
              ),
              _react2.default.createElement(_Search2.default, {
                pushSearch: this.props.pushSearch,
                query: this.props.inputOnStack('search') })
            )
          );
        }
      }, {
        key: 'show',
        value: function show(item) {
          this.props.history.push(this.state.path + '/' + item.id);
        }
      }, {
        key: 'edit',
        value: function edit(item) {
          this.props.history.push(this.state.path + '/' + item.id + '/edit');
        }
      }, {
        key: 'destroy',
        value: function destroy(item) {
          var _this2 = this;

          this.props.dispatch((0, _actions.destroyItem)(properties.key, '' + properties.api, item.id)).then(function () {
            _this2.props.pushOnState('d', item.id);
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var dropDown = {};
          if (!properties.noDropDown) {
            dropDown.name = 'Acties';

            if (!properties.noEdit) {
              dropDown.dropdownButton = [{ name: 'bekijken', onClick: this.show }, { name: 'wijzigen', onClick: this.edit }];
            }

            if (!properties.noDelete) {
              if (!dropDown.dropdownButton) {
                dropDown.dropdownButton = [];
              }

              dropDown.dropdownButton.push({ divider: true });
              dropDown.dropdownButton.push({
                name: 'verwijderen',
                onClick: function onClick(item) {
                  _this3.props.showModal(item, _this3.destroy);
                }
              });
            }
          }

          var rows = (0, _cloneDeep3.default)((0, _has3.default)(properties, 'rows') ? properties.rows : [{ cols: properties.cols }]);
          if ((0, _keys2.default)(dropDown).length > 0) {
            rows[0].cols = (0, _compact3.default)((0, _flatten3.default)([rows[0].cols, [dropDown]]));
          }

          var getTable = function getTable() {
            if ((0, _get3.default)(_this3.props, ['data', 'success'], false) === true) {
              return _react2.default.createElement(_DataTable2.default, {
                records: _this3.props.data.list.data,
                rows: rows,
                dispatch: _this3.props.dispatch,
                pushOnState: _this3.props.pushOnState,
                inputOnStack: _this3.props.inputOnStack,
                order: _this3.props.inputOnStack('order'),
                auth: _this3.props.auth,
                edit: _this3.edit,
                show: _this3.show,
                paginator: {
                  currPage: _this3.props.data.list.current_page,
                  lastPage: _this3.props.data.list.last_page,
                  onChange: _this3.props.switchPage
                }
              });
            }
            return null;
          };

          var state = {
            pending: (0, _get3.default)(this.props.data, 'pending', false),
            failed: (0, _get3.default)(this.props.data, 'failed', false)
          };

          var warning = function warning() {
            if ((0, _has3.default)(_this3.props, ['data', 'item', 'error'])) {
              return _react2.default.createElement(
                _reactBootstrap.Alert,
                { variant: 'danger' },
                (0, _get3.default)(_this3.props, ['data', 'item', 'error'])
              );
            }
            return null;
          };

          return _react2.default.createElement(
            WrappedComponent,
            this.props,
            this.filter(),
            warning(),
            _react2.default.createElement(
              _Pending2.default,
              { state: state },
              getTable()
            ),
            this.props.children
          );
        }
      }]);
      return Connection;
    }(_react.Component)) || _class) || _class) || _class) || _class) || _class);


    return Connection;
  };
}