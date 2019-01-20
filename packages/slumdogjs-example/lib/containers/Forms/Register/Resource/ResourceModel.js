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

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _indexOf2 = require('lodash/indexOf');

var _indexOf3 = _interopRequireDefault(_indexOf2);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Paginator = require('../../../../../../slumdogjs-laravel/src/components/Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _actions = require('../../../../../../slumdogjs-redux/src/store/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = {
  'value': 'id',
  'desc': 'name'
};

var myTimeout = null;

var Models = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Models, _Component);

  function Models() {
    (0, _classCallCheck3.default)(this, Models);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Models.__proto__ || (0, _getPrototypeOf2.default)(Models)).call(this));

    _this.body = _this.body.bind(_this);
    _this.footer = _this.footer.bind(_this);
    _this.getData = _this.getData.bind(_this);
    _this.pushSearch = _this.pushSearch.bind(_this);
    _this.renderPaginator = _this.renderPaginator.bind(_this);
    _this.setParams = _this.setParams.bind(_this);
    _this.clearSearch = _this.clearSearch.bind(_this);
    _this.state = {
      keep: [],
      values: [],
      list: [],
      params: {
        search: ''
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Models, [{
    key: 'getData',
    value: function getData() {
      this.props.dispatch((0, _actions.load)(this.props.listName, this.props.api, this.state.params));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        keep: this.props.clonedValues || [],
        values: this.props.clonedValues || [],
        list: this.props.clonedList || []
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.show === true && prevProps.show === false) {
        this.props.dispatch((0, _actions.clearList)(this.props.listName));
      }
      if (!(0, _isEqual3.default)(this.props.show, prevProps.show)) {
        this.setState({
          keep: this.props.clonedValues || [],
          values: this.props.clonedValues,
          list: this.props.clonedList || []
        }, function () {
          _this2.getData();
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e, item) {
      var values = this.state.values;
      var list = this.state.list;
      var mappedItem = {
        value: item[this.props.fields.value],
        desc: item[this.props.fields.desc]
      };
      if (this.props.multiple === false) {
        if (e.target.checked === true) {
          this.setState({
            values: mappedItem.value,
            list: [mappedItem]
          });
        } else {
          this.setState({
            values: null,
            list: null
          });
        }
      } else {
        // If checkbox
        var index = (0, _findIndex3.default)(list, { value: item[this.props.fields.value] });
        if (e.target.checked === true) {
          if (index === -1) {
            list.push(mappedItem);
          }
          values.push(mappedItem.value);
        } else {
          if (index > -1) {
            list.splice(index, 1);
          }
          values.splice((0, _indexOf3.default)(values, mappedItem.value), 1);
        }

        this.setState({
          values: (0, _uniq3.default)(values),
          list: list
        });
      }
    }
  }, {
    key: 'list',
    value: function list(items) {
      var _this3 = this;

      return (0, _map3.default)(items, function (item, key) {
        return _react2.default.createElement(
          'li',
          { key: item[_this3.props.fields.value] },
          _react2.default.createElement(
            'label',
            { htmlFor: 'item-' + key },
            _react2.default.createElement('input', {
              type: _this3.props.multiple ? 'checkbox' : 'radio',
              id: 'item-' + key,
              name: _this3.props.multiple ? 'check-' + key : 'check-' + _this3.props.name,
              value: item[fields.value],
              defaultChecked: _this3.props.multiple ? (0, _indexOf3.default)(_this3.state.values, item[_this3.props.fields.value]) > -1 : String(_this3.state.values) === String(item[_this3.props.fields.value]),
              onChange: function onChange(e) {
                _this3.onChange(e, item);
              }
            }),
            ' ' + item[_this3.props.fields.desc]
          )
        );
      });
    }
  }, {
    key: 'pushSearch',
    value: function pushSearch(e) {
      var _this4 = this;

      var value = e.target.value;
      var params = this.state.params;
      params.search = value;
      params.page = 1;
      this.setState({
        params: params
      }, function () {
        if (myTimeout) {
          clearTimeout(myTimeout);
        }
        myTimeout = setTimeout(function () {
          _this4.getData();
        }, 200);
      });
    }
  }, {
    key: 'clearSearch',
    value: function clearSearch() {
      var params = this.state.params;
      params.search = '';
      params.page = 1;
      this.setState({
        params: params
      }, this.getData);
    }
  }, {
    key: 'body',
    value: function body() {
      return _react2.default.createElement(
        _reactBootstrap.Modal.Body,
        null,
        _react2.default.createElement(
          'ul',
          null,
          this.list((0, _get3.default)(this.props, 'list.list.data', []))
        ),
        this.renderPaginator()
      );
    }
  }, {
    key: 'setParams',
    value: function setParams(name, value) {
      var _this5 = this;

      var params = this.state.params;
      params[name] = value;
      this.setState({ params: params }, function () {
        _this5.getData();
      });
    }
  }, {
    key: 'footer',
    value: function footer() {
      var _this6 = this;

      var callBack = function callBack() {
        _this6.props.callBack(_this6.state.values, _this6.state.list);
        _this6.props.closeResource();
      };

      var callBackEmpty = function callBackEmpty() {
        _this6.props.callBack([], []);
        _this6.props.closeResource();
      };

      return _react2.default.createElement(
        _reactBootstrap.Modal.Footer,
        null,
        _react2.default.createElement(
          _reactBootstrap.Button,
          { onClick: this.props.closeResource },
          'sluiten'
        ),
        _react2.default.createElement(
          _reactBootstrap.Button,
          { onClick: callBackEmpty },
          'legen'
        ),
        _react2.default.createElement(
          _reactBootstrap.Button,
          { onClick: callBack,
            bsStyle: 'primary' },
          'versturen'
        )
      );
    }
  }, {
    key: 'renderPaginator',
    value: function renderPaginator() {
      var _this7 = this;

      if ((0, _get3.default)(this.props.list, 'list.total', null)) {
        return _react2.default.createElement(_Paginator2.default, {
          currPage: this.props.list.list.current_page,
          lastPage: this.props.list.list.last_page,
          onChange: function onChange(page) {
            _this7.setParams('page', page);
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { bsSize: 'large',
          show: this.props.show,
          onHide: this.props.closeResource },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            'Data resource'
          )
        ),
        this.body(),
        this.footer()
      );
    }
  }]);
  return Models;
}(_react.Component), _class.defaultProps = {
  fields: {
    value: 'id',
    desc: 'name'
  }
}, _temp);
exports.default = Models;