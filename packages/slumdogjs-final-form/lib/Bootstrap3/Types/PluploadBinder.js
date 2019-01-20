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

var _reactPlupload = require('react-plupload');

var _reactPlupload2 = _interopRequireDefault(_reactPlupload);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PluploadBinder = function (_React$Component) {
  (0, _inherits3.default)(PluploadBinder, _React$Component);

  function PluploadBinder() {
    (0, _classCallCheck3.default)(this, PluploadBinder);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PluploadBinder.__proto__ || (0, _getPrototypeOf2.default)(PluploadBinder)).call(this));

    _this.renderTable = _this.renderTable.bind(_this);
    _this.addedFiles = _this.addedFiles.bind(_this);
    _this.editRender = _this.editRender.bind(_this);
    _this.fileDelete = _this.fileDelete.bind(_this);
    _this.fileUploaded = _this.fileUploaded.bind(_this);
    _this.stateChange = _this.stateChange.bind(_this);
    _this.staticRender = _this.staticRender.bind(_this);
    _this.allFiles = [];
    return _this;
  }

  (0, _createClass3.default)(PluploadBinder, [{
    key: 'stateChange',
    value: function stateChange(plupload) {
      if (plupload.state === 2) {
        // Starting with uploading
        this.setState({ pending: true });
        return true;
      }

      this.setState({ pending: false });
    }
  }, {
    key: 'addedFiles',
    value: function addedFiles(plupload, files) {
      var fileList = [];
      (0, _map3.default)(files, function (file) {
        fileList.push(file.name);
      });
    }
  }, {
    key: 'fileUploaded',
    value: function fileUploaded(plupload, file, response) {
      var _this2 = this;

      var uploadResponse = JSON.parse(response.response);
      if ((0, _get3.default)(this.props.field.config, 'multi_selection', true) === false) {
        this.allFiles = [uploadResponse.result];
        this.setState({ changed: Date.now() }, function () {
          _this2.props.input.onChange(_this2.allFiles);
        });
      } else {
        var files = (0, _clone3.default)(this.allFiles);
        files.push(uploadResponse.result);
        this.allFiles = files;
        this.setState({ changed: Date.now() }, function () {
          _this2.props.input.onBlur();
          _this2.props.input.onChange(_this2.allFiles);
        });
      }
    }
  }, {
    key: 'fileDelete',
    value: function fileDelete(index) {
      var _this3 = this;

      this.allFiles = this.props.input.value;
      this.allFiles[index].deleted = 1;
      this.setState({ changed: Date.now() }, function () {
        _this3.props.input.onBlur();
        _this3.props.input.onChange(_this3.allFiles);
        _this3.forceUpdate();
      });
    }
  }, {
    key: 'editRender',
    value: function editRender(files) {
      var _this4 = this;

      if (files.length > 0) {
        return _react2.default.createElement(
          _Table2.default,
          { striped: true, bordered: true, condensed: true, hover: true },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Bestand'
              ),
              _react2.default.createElement('th', null)
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            (0, _map3.default)(files, function (file, key) {
              return !file.deleted && _react2.default.createElement(
                'tr',
                { key: key },
                _react2.default.createElement(
                  'td',
                  null,
                  file.file_original_name,
                  ' ',
                  file.deleted
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { onClick: function onClick() {
                        _this4.fileDelete(key);
                      } },
                    _react2.default.createElement('i', { className: 'fa fa-trash-o' })
                  )
                )
              );
            })
          )
        );
      }
    }
  }, {
    key: 'staticRender',
    value: function staticRender(files) {
      if (files.length > 0) {
        return _react2.default.createElement(
          _Table2.default,
          { striped: true, bordered: true, condensed: true, hover: true },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Bestand'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            (0, _map3.default)(files, function (file, key) {
              return !file.deleted && _react2.default.createElement(
                'tr',
                { key: key },
                _react2.default.createElement(
                  'td',
                  null,
                  file.file_original_name,
                  ' ',
                  file.deleted
                )
              );
            })
          )
        );
      }
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      var staticForm = (0, _get3.default)(this.props, 'static', false);
      var files = [];
      if (Array.isArray(this.props.input.value) && this.props.input.value.length > 0) {
        files = this.props.input.value;
      }

      files = (0, _filter3.default)(this.props.input.value, function (file) {
        return !file.deleted;
      });
      if (files.length > 0) {
        return staticForm ? this.staticRender(files) : this.editRender(files);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          field = _props.field,
          input = _props.input;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactPlupload2.default, (0, _extends3.default)({
          className: field.className,
          onFileUploaded: this.fileUploaded,
          id: 'plupload_' + input.name
        }, field.config)),
        this.renderTable()
      );
    }
  }]);
  return PluploadBinder;
}(_react2.default.Component);

var Binded = function Binded(_ref) {
  var input = _ref.input,
      field = _ref.field;
  return _react2.default.createElement(PluploadBinder, { input: input, field: field });
};
exports.default = Binded;