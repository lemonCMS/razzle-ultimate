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

var _class;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _compact2 = require('lodash/compact');

var _compact3 = _interopRequireDefault(_compact2);

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRouter = require('react-router');

var _Paginator = require('./Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _moment = require('../utils/moment');

var _moment2 = _interopRequireDefault(_moment);

var _numeral = require('../utils/numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataTable = (0, _reactRouter.withRouter)(_class = function (_Component) {
  (0, _inherits3.default)(DataTable, _Component);

  function DataTable() {
    (0, _classCallCheck3.default)(this, DataTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DataTable.__proto__ || (0, _getPrototypeOf2.default)(DataTable)).call(this));

    _this.renderRows = _this.renderRows.bind(_this);
    _this.renderCols = _this.renderCols.bind(_this);
    _this.renderRecords = _this.renderRecords.bind(_this);
    _this.renderRecordCols = _this.renderRecordCols.bind(_this);
    _this.renderRecordRows = _this.renderRecordRows.bind(_this);
    _this.renderDropdownItems = _this.renderDropdownItems.bind(_this);
    _this.renderPaginator = _this.renderPaginator.bind(_this);
    _this.getValue = _this.getValue.bind(_this);
    _this.check = _this.check.bind(_this);
    _this.pushIds = _this.pushIds.bind(_this);
    _this.state = {
      orderCol: null,
      checked: {},
      current: {},
      ids: {},
      idsTouched: {}
    };
    return _this;
  }

  (0, _createClass3.default)(DataTable, [{
    key: 'getValue',
    value: function getValue(record, col, key) {
      var _this2 = this;

      var cell = [];
      if ((0, _has3.default)(col, 'checkbox')) {
        var click = function click(event) {
          col.checkbox(event, record, _this2.props.dispatch);
          var _state = _this2.state,
              ids = _state.ids,
              idsTouched = _state.idsTouched;

          if (!ids['box-' + key]) {
            ids['box-' + key] = [];
          }
          if (!idsTouched['box-' + key]) {
            idsTouched['box-' + key] = [];
          }
          var index = ids['box-' + key].indexOf(record.id);
          if (index > -1) {
            ids['box-' + key].splice(index, 1);
          }

          if (event.target.checked) {
            ids['box-' + key].push(record.id);
          }

          var touched = idsTouched['box-' + key].indexOf(record.id);
          if (touched === -1) {
            idsTouched['box-' + key].push(record.id);
          }
          _this2.setState({ ids: ids, idsTouched: idsTouched });
        };
        var defaultChecked = (0, _get3.default)(record, (0, _get3.default)(col, 'show'), false);
        var checked = function checked() {
          var ids = _this2.state.ids;
          var idsTouched = _this2.state.idsTouched;

          if (!idsTouched['box-' + key] || !ids['box-' + key]) {
            return defaultChecked;
          }

          var touched = idsTouched['box-' + key].indexOf(record.id);
          if (touched === -1) {
            return defaultChecked;
          }

          var checkedId = ids['box-' + key].indexOf(record.id);
          if (checkedId > -1) {
            return true;
          }
          return false;
        };

        return _react2.default.createElement('input', {
          key: 'checkbox' + record.id,
          type: 'checkbox',
          onChange: click,
          checked: checked()
        });
      }
      if ((0, _has3.default)(col, 'image')) {
        if ((0, _has3.default)(record, col.image)) {
          cell.push(_react2.default.createElement(_reactBootstrap.Image, {
            key: 'image',
            src: '/image/small/' + (0, _get3.default)(record, col.image),
            responsive: true,
            thumbnail: true }));
        }
      }

      if ((0, _has3.default)(col, 'text')) {
        cell.push(_react2.default.createElement(
          'span',
          {
            key: 'text',
            className: 'data-table-static-text' },
          col.text
        ));
      }

      if ((0, _has3.default)(col, 'link') && (0, _has3.default)(col, 'onClick')) {
        var _click = function _click(event) {
          event.preventDefault();
          col.onClick(record, _this2.props.history);
        };
        cell.push(_react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'btn btn-link',
            key: 'link',
            onClick: _click },
          (0, _get3.default)(col, 'link')
        ));
      }

      if ((0, _has3.default)(col, 'array') && (0, _has3.default)(col, 'arrayShow') && (0, _has3.default)(col, 'onClick')) {
        (0, _map3.default)((0, _get3.default)(record, col.array, []), function (item, key2) {
          var show = '';
          if ((0, _isArray3.default)(col.arrayShow)) {
            (0, _map3.default)(col.arrayShow, function (arrayCol) {
              show = show.concat((0, _get3.default)(item, arrayCol, ''), ' ');
            });
            show.trim();
          } else {
            show = (0, _get3.default)(item, col.arrayShow, '');
          }

          cell.push(_react2.default.createElement(
            'button',
            {
              type: 'button',
              key: key2,
              className: 'btn btn-link',
              onClick: function onClick() {
                col.onClick(item, _this2.props.history);
              } },
            show
          ));
        });
      } else if ((0, _has3.default)(col, 'array') && (0, _has3.default)(col, 'arrayShow')) {
        (0, _map3.default)((0, _get3.default)(record, col.array, []), function (item) {
          cell.push(_react2.default.createElement(
            'span',
            null,
            (0, _get3.default)(item, col.arrayShow, '')
          ));
        });
      }

      if ((0, _has3.default)(col, 'show')) {
        var value = '';
        if ((0, _isString3.default)(col.show)) {
          if ((0, _has3.default)(col, 'translate')) {
            value = (0, _get3.default)(col, ['translate', (0, _get3.default)(record, col.show, '')], '');
          } else if ((0, _has3.default)(col, 'append')) {
            if (!(0, _isEmpty3.default)(record, col.show, '')) {
              value = (0, _get3.default)(record, col.show, 0) + (0, _get3.default)(col, 'append');
            }
          } else if ((0, _has3.default)(col, 'filter') && col.filter === 'numeral') {
            value = (0, _numeral2.default)(Number((0, _get3.default)(record, col.show, 0))).format('$0.00');
          } else if ((0, _has3.default)(col, 'filter') && col.filter === 'date') {
            value = (0, _moment2.default)((0, _get3.default)(record, col.show, '')).format((0, _get3.default)(col, 'format', 'YYYY-MM-DD'));
          } else if ((0, _has3.default)(col, 'filter') && col.filter === 'dateTime') {
            value = (0, _moment2.default)((0, _get3.default)(record, col.show, '')).format((0, _get3.default)(col, 'format', 'YYYY-MM-DD HH:mm'));
          } else if ((0, _has3.default)(col, 'filter') && col.filter === 'unixDate') {
            value = _moment2.default.unix((0, _get3.default)(record, col.show, '')).format((0, _get3.default)(col, 'format', 'YYYY-MM-DD'));
          } else if ((0, _has3.default)(col, 'filter') && col.filter === 'unixDateTime') {
            value = _moment2.default.unix((0, _get3.default)(record, col.show, '')).format((0, _get3.default)(col, 'format', 'YYYY-MM-DD HH:mm'));
          } else {
            value = (0, _get3.default)(record, col.show, '');
          }
        } else if ((0, _isArray3.default)(col.show)) {
          var values = [];
          (0, _map3.default)(col.show, function (field) {
            values.push(_react2.default.createElement(
              'span',
              { key: '\'show\'' },
              (0, _get3.default)(record, field, '')
            ));
          });
          value = (0, _compact3.default)(value).join(' ');
        }

        if ((0, _has3.default)(col, 'edit')) {
          cell.push(_react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-link',
              key: 'link',
              onClick: function onClick() {
                _this2.props.edit(record);
              } },
            value
          ));
        } else if ((0, _has3.default)(col, 'onClick')) {
          var _click2 = function _click2(event) {
            event.preventDefault();
            col.onClick(record, _this2.props.history);
          };

          cell.push(_react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-link',
              key: 'showClick',
              onClick: _click2 },
            value
          ));
        } else {
          cell.push(_react2.default.createElement(
            'span',
            { className: 'show', key: 'c1' },
            value
          ));
        }
      }

      if ((0, _has3.default)(col, 'fa')) {
        return _react2.default.createElement(
          'div',
          { className: 'btn-group',
            role: 'group',
            'aria-label': 'Basic example' },
          (0, _map3.default)(col.fa, function (item, itemKey) {
            var click = function click() {
              if ((0, _has3.default)(item, 'onClick')) {
                var currPage = _this2.props.paginator.currPage;

                item.onClick({ record: record, currPage: currPage, router: _this2.props.history, dispatch: _this2.props.dispatch });
              }
            };
            return _react2.default.createElement(
              'button',
              { key: itemKey,
                type: 'button',
                className: 'btn btn-sm',
                onClick: click },
              _react2.default.createElement('i', { className: 'fa fa-' + item.icon })
            );
          })
        );
      }

      if ((0, _has3.default)(col, 'dropdownButton')) {
        var dropDownItems = this.renderDropdownItems((0, _get3.default)(col, 'dropdownButton'), record);
        cell.push(_react2.default.createElement(
          _reactBootstrap.DropdownButton,
          {
            key: 'dbbutton',
            size: 'sm',
            title: col.name,
            id: 'dropDown' + key },
          dropDownItems
        ));
      }

      return cell;
    }
  }, {
    key: 'pushIds',
    value: function pushIds(props) {
      var ids = this.state.ids;

      var current = [];
      (0, _map3.default)(props.records, function (record) {
        if (!(0, _find3.default)(ids, { id: record.id })) {
          ids.push({ id: record.id, checked: false, clicked: false });
          current.push(record.id);
        }
      });
      this.setState({
        ids: ids,
        current: current
      });
    }
  }, {
    key: 'check',
    value: function check(event, key) {
      var _state2 = this.state,
          ids = _state2.ids,
          idsTouched = _state2.idsTouched,
          checked = _state2.checked;

      if (!ids['box-' + key]) {
        ids['box-' + key] = [];
      }
      if (!idsTouched['box-' + key]) {
        idsTouched['box-' + key] = [];
      }
      (0, _map3.default)(this.props.records, function (record) {
        var index = ids['box-' + key].indexOf(record.id);
        if (index > -1) {
          ids['box-' + key].splice(index, 1);
        }

        if (event.target.checked) {
          ids['box-' + key].push(record.id);
        }

        var touched = idsTouched['box-' + key].indexOf(record.id);
        if (touched === -1) {
          idsTouched['box-' + key].push(record.id);
        }
      });
      checked['box-' + key] = event.target.checked;
      this.setState({ ids: ids, idsTouched: idsTouched, checked: checked });
    }
  }, {
    key: 'renderRows',
    value: function renderRows() {
      var _this3 = this;

      if ((0, _has3.default)(this.props, 'rows')) {
        return (0, _map3.default)(this.props.rows, function (row, key) {
          return _react2.default.createElement(
            'tr',
            { key: key },
            _this3.renderCols(row.cols)
          );
        });
      }

      return _react2.default.createElement(
        'tr',
        null,
        this.renderCols(this.props.cols)
      );
    }
  }, {
    key: 'renderCols',
    value: function renderCols(cols) {
      var _this4 = this;

      return (0, _map3.default)(cols, function (col, key) {
        var orderName = 'order-' + key;
        var dbCol = function dbCol(orderType) {
          if ((0, _has3.default)(col, 'show')) {
            if ((0, _isString3.default)(col.show)) {
              return col.show + orderType;
            }
            if ((0, _isArray3.default)(col.show)) {
              return (0, _get3.default)(col.show, [0]) + orderType;
            }
          }
          return null;
        };

        var select1 = function select1() {
          var state = _this4.state;
          state[orderName] = 'A ... Z';
          state.orderCol = dbCol();
          _this4.setState(state, function () {
            _this4.props.pushOnState('order', dbCol('Asc'));
          });
        };

        var select2 = function select2() {
          var state = _this4.state;
          state[orderName] = 'Z ... A';
          state.orderCol = dbCol();
          _this4.setState(state, function () {
            _this4.props.pushOnState('order', dbCol('Desc'));
          });
        };

        var filter = function filter(value) {
          var state = _this4.state;
          state[(0, _get3.default)(col, 'show')] = value;
          _this4.setState(state, function () {
            _this4.props.pushOnState((0, _get3.default)(col, 'show'), value);
          });
        };

        var actions = false;
        if ((0, _has3.default)(col, 'actions')) {
          actions = (0, _map3.default)(col.actions, function (button, key2) {
            return _react2.default.createElement(
              _reactBootstrap.Dropdown.Item,
              {
                key: key2,
                eventKey: key2,
                onSelect: function onSelect() {
                  button.action((0, _get3.default)(_this4.state.ids, 'box-' + key, []), _this4.props.dispatch);
                } },
              button.name
            );
          });
        }

        var title = function title() {
          if ((0, _get3.default)(col, 'filterBy', false) !== false) {
            var onStack = _this4.props.inputOnStack((0, _get3.default)(col, 'show'));
            if (onStack) {
              var result = (0, _filter3.default)(col.filterBy, function (item) {
                return String(item.value) === String(onStack);
              });
              if (result) {
                return result[0].desc;
              }
            }

            if (_this4.state[(0, _get3.default)(col, 'show')]) {
              return (0, _get3.default)(col, 'filterBy[' + _this4.state[(0, _get3.default)(col, 'show')] + '].desc', '');
            }
          }

          if (_this4.state.orderCol === dbCol()) {
            if ((0, _get3.default)(_this4.state, orderName)) {
              return _this4.state[orderName];
            }
          }

          if (_this4.state.orderCol === null) {
            if (dbCol('Asc') === (0, _get3.default)(_this4.props, 'order')) {
              return 'A ... Z';
            }

            if (dbCol('Desc') === (0, _get3.default)(_this4.props, 'order')) {
              return 'Z ... A';
            }
          }

          return (0, _get3.default)(col, 'name', '');
        };

        var filterBy = (0, _get3.default)(col, 'filterBy', false);
        if (filterBy !== false) {
          return _react2.default.createElement(
            'th',
            {
              key: key,
              width: (0, _get3.default)(col, 'width', 'auto'),
              colSpan: (0, _get3.default)(col, 'colSpan', '1') },
            _react2.default.createElement(
              _reactBootstrap.ButtonToolbar,
              null,
              _react2.default.createElement(
                _reactBootstrap.DropdownButton,
                {
                  variant: 'link',
                  title: title(),
                  id: 'dropdown-size-extra-small' + key },
                (0, _map3.default)((0, _get3.default)(col, 'filterBy', []), function (item, itemKey) {
                  return _react2.default.createElement(
                    _reactBootstrap.Dropdown.Item,
                    {
                      key: itemKey,
                      eventKey: itemKey,
                      onSelect: function onSelect() {
                        filter(item.value);
                      } },
                    item.desc
                  );
                }),
                _react2.default.createElement(_reactBootstrap.Dropdown.Divider, null),
                _react2.default.createElement(
                  _reactBootstrap.Dropdown.Item,
                  {
                    eventKey: 999,
                    onSelect: function onSelect() {
                      filter('');
                    } },
                  'reset'
                ),
                actions && _react2.default.createElement(_reactBootstrap.Dropdown.Divider, null),
                actions && actions
              )
            )
          );
        }

        var order = (0, _get3.default)(col, 'order', false);
        if (order === true) {
          return _react2.default.createElement(
            'th',
            {
              key: key,
              width: (0, _get3.default)(col, 'width', 'auto'),
              colSpan: (0, _get3.default)(col, 'colSpan', '1') },
            _react2.default.createElement(
              _reactBootstrap.ButtonToolbar,
              null,
              _react2.default.createElement(
                _reactBootstrap.DropdownButton,
                {
                  variant: 'link',
                  title: title(),
                  id: 'dropdown-size-extra-small' + key },
                _react2.default.createElement(
                  _reactBootstrap.Dropdown.Item,
                  {
                    eventKey: '1',
                    onSelect: select1 },
                  'A ... Z'
                ),
                _react2.default.createElement(
                  _reactBootstrap.Dropdown.Item,
                  {
                    eventKey: '2',
                    onSelect: select2 },
                  'Z ... A'
                ),
                actions && _react2.default.createElement(_reactBootstrap.Dropdown.Divider, null),
                actions && actions
              )
            )
          );
        }

        if (actions) {
          return _react2.default.createElement(
            'th',
            {
              key: key,
              width: (0, _get3.default)(col, 'width', 'auto'),
              colSpan: (0, _get3.default)(col, 'colSpan', '1') },
            _react2.default.createElement('input', {
              type: 'checkbox',
              onChange: function onChange(event) {
                _this4.check(event, key);
              },
              defaultChecked: _this4.state.checked['box-' + key] }),
            _react2.default.createElement(
              _reactBootstrap.ButtonToolbar,
              null,
              _react2.default.createElement(
                _reactBootstrap.DropdownButton,
                {
                  variant: 'link',
                  title: title(),
                  id: 'dropdown-size-extra-small' + key },
                actions
              )
            )
          );
        }

        return _react2.default.createElement(
          'th',
          {
            key: key,
            width: (0, _get3.default)(col, 'width', 'auto'),
            colSpan: (0, _get3.default)(col, 'colSpan', '1') },
          (0, _get3.default)(col, 'name', '')
        );
      });
    }
  }, {
    key: 'renderRecords',
    value: function renderRecords() {
      var _this5 = this;

      return (0, _map3.default)(this.props.records, function (record, key) {
        return _this5.renderRecordRows(key, record);
      });
    }
  }, {
    key: 'renderRecordRows',
    value: function renderRecordRows(key, record) {
      var _this6 = this;

      if ((0, _has3.default)(this.props, 'rows')) {
        return (0, _map3.default)(this.props.rows, function (row, keyRow) {
          return _react2.default.createElement(
            'tr',
            {
              key: record.id || key + '-' + keyRow,
              className: 'data-table-row' + keyRow },
            _this6.renderRecordCols(row.cols, record)
          );
        });
      }

      return _react2.default.createElement(
        'tr',
        { key: key },
        this.renderRecordCols(this.props.cols, record)
      );
    }
  }, {
    key: 'renderRecordCols',
    value: function renderRecordCols(cols, record) {
      var _this7 = this;

      return (0, _map3.default)(cols, function (col, key) {
        var value = _this7.getValue(record, col, key);
        return _react2.default.createElement(
          'td',
          {
            key: key,
            colSpan: (0, _get3.default)(col, 'colSpan', '1'),
            className: (0, _get3.default)(col, 'className', '') },
          value
        );
      });
    }
  }, {
    key: 'renderDropdownItems',
    value: function renderDropdownItems(buttons, record) {
      var _this8 = this;

      return (0, _map3.default)(buttons, function (button, key) {
        var click = function click() {
          if ((0, _has3.default)(button, 'onClick')) {
            button.onClick(record, _this8.props.history);
          }
        };

        if ((0, _has3.default)(button, 'divider')) {
          return _react2.default.createElement(_reactBootstrap.Dropdown.Divider, { key: key + '-divider' });
        }

        return _react2.default.createElement(
          _reactBootstrap.Dropdown.Item,
          {
            key: key,
            eventKey: key,
            onSelect: click },
          button.name
        );
      });
    }
  }, {
    key: 'renderPaginator',
    value: function renderPaginator() {
      var _props$paginator = this.props.paginator,
          currPage = _props$paginator.currPage,
          lastPage = _props$paginator.lastPage,
          onChange = _props$paginator.onChange;

      return _react2.default.createElement(_Paginator2.default, {
        currPage: currPage,
        lastPage: lastPage,
        onChange: onChange });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this9 = this;

      var noRecords = function noRecords() {
        if (!_this9.props.records || _this9.props.records.length === 0) {
          return _react2.default.createElement(
            _reactBootstrap.Alert,
            { variant: 'warning' },
            'No records found.'
          );
        }
        return null;
      };

      var paged = !(0, _isEmpty3.default)(this.props.paginator) ? this.renderPaginator() : '';
      var rows = this.renderRows();
      var records = this.renderRecords();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'table-responsive' },
          _react2.default.createElement(
            'table',
            { className: 'table table-bordered table-sm table-data table-hover' },
            _react2.default.createElement(
              'thead',
              { className: 'thead-light' },
              rows
            ),
            _react2.default.createElement(
              'tbody',
              null,
              records
            )
          )
        ),
        noRecords(),
        paged
      );
    }
  }]);
  return DataTable;
}(_react.Component)) || _class;

exports.default = DataTable;