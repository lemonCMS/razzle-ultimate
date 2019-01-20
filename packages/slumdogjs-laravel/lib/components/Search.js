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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormLabel = require('react-bootstrap/lib/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _InputGroup = require('react-bootstrap/lib/InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_React$PureComponent) {
  (0, _inherits3.default)(Search, _React$PureComponent);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this));

    _this.pushSearch = _this.pushSearch.bind(_this);
    _this.clearSearch = _this.clearSearch.bind(_this);
    _this.state = {
      search: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Search, [{
    key: 'pushSearch',
    value: function pushSearch(e) {
      var _this2 = this;

      var value = e.target.value;
      this.setState({ search: value }, function () {
        _this2.props.pushSearch(value);
      });
    }
  }, {
    key: 'clearSearch',
    value: function clearSearch() {
      this.setState({
        search: ''
      }, this.props.pushSearch(''));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _FormGroup2.default,
        {
          controlId: 'q'
        },
        _react2.default.createElement(
          _FormLabel2.default,
          null,
          'Zoeken'
        ),
        _react2.default.createElement(
          _InputGroup2.default,
          null,
          _react2.default.createElement(_FormControl2.default, {
            type: 'text',
            value: this.state.search,
            placeholder: 'Zoeken',
            onChange: this.pushSearch
          }),
          _react2.default.createElement(
            _InputGroup2.default.Append,
            null,
            _react2.default.createElement(
              _Button2.default,
              { disabled: this.state.search === '', onClick: this.clearSearch },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['fas', 'times'], fixedWidth: true })
            )
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (state.search === '' || props.query !== state.search) {
        return { search: props.query };
      }
      return null;
    }
  }]);
  return Search;
}(_react2.default.PureComponent);

exports.default = Search;