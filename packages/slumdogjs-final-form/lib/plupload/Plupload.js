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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BrowseButton = require('./BrowseButton');

var _BrowseButton2 = _interopRequireDefault(_BrowseButton);

var _UploadButton = require('./UploadButton');

var _UploadButton2 = _interopRequireDefault(_UploadButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EVENTS = ['PostInit', 'Browse', 'Refresh', 'StateChanged', 'QueueChanged', 'OptionChanged', 'BeforeUpload', 'UploadProgress', 'FileFiltered', 'FilesAdded', 'FilesRemoved', 'FileUploaded', 'ChunkUploaded', 'UploadComplete', 'Destroy', 'Error'];

var Plupload = function (_React$Component) {
  (0, _inherits3.default)(Plupload, _React$Component);

  function Plupload() {
    (0, _classCallCheck3.default)(this, Plupload);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Plupload.__proto__ || (0, _getPrototypeOf2.default)(Plupload)).call(this));

    _this.id = new Date().valueOf();
    _this.state = { files: [], uploadState: false, progress: {} };
    _this.runUploader = _this.runUploader.bind(_this);
    _this.getComponentId = _this.getComponentId.bind(_this);
    _this.refresh = _this.refresh.bind(_this);
    _this.initUploader = _this.initUploader.bind(_this);
    _this.list = _this.list.bind(_this);
    _this.clearAllFiles = _this.clearAllFiles.bind(_this);
    _this.clearFailedFiles = _this.clearFailedFiles.bind(_this);
    _this.removeFile = _this.removeFile.bind(_this);
    _this.doUpload = _this.doUpload.bind(_this);
    _this.container = null;
    _this.uploader = null;
    return _this;
  }

  (0, _createClass3.default)(Plupload, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.checkUploader()) {
        this.runUploader();
      } else {
        setTimeout(function () {
          if (_this2.checkUploader()) {
            _this2.runUploader();
          } else {
            console.warn('Plupload has not initialized');
          }
        }, 500);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.checkUploader() && this.uploader !== null) {
        this.refresh();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.uploader.destroy();
      this.uploader = null;
      window.plupload.removeAllEvents(this.container);
    }
  }, {
    key: 'getComponentId',
    value: function getComponentId() {
      return this.props.id || 'react_plupload_' + this.id;
    }
  }, {
    key: 'runUploader',
    value: function runUploader() {
      var _this3 = this;

      this.initUploader();
      this.uploader.init();

      EVENTS.forEach(function (event) {
        var handler = _this3.props['on' + event];
        if (typeof handler === 'function') {
          _this3.uploader.bind(event, handler);
        }
      });

      // Put the selected files into the current state
      this.uploader.bind('FilesAdded', function (up, files) {
        if (_lodash2.default.get(_this3.props, 'multi_selection') === false) {
          _this3.clearAllFiles();
        } else {
          _this3.clearFailedFiles();
        }

        _this3.setState(function (prevState) {
          var stateFiles = prevState.files;
          _lodash2.default.map(files, function (file) {
            stateFiles.push(file);
          });
          return { files: stateFiles };
        }, function () {
          if (_this3.props.autoUpload === true) {
            _this3.uploader.start();
          }
        });
      });

      /* this.uploader.bind('FilesRemoved', (up, rmFiles) => {
      }); */

      this.uploader.bind('StateChanged', function (up) {
        if (up.state === window.plupload.STARTED && _this3.state.uploadState === false) {
          _this3.setState({ uploadState: true });
        }
        if (up.state !== window.plupload.STARTED && _this3.state.uploadState === true) {
          _this3.setState({ uploadState: false });
        }
      });

      this.uploader.bind('FileUploaded', function (up, file) {
        _this3.setState(function (prevState) {
          var stateFiles = prevState.files;
          _lodash2.default.map(stateFiles, function (val, key) {
            if (val.id === file.id) {
              val.uploaded = true;
              stateFiles[key] = val;
            }
          });
          _this3.removeFile(file.id);
          return { files: stateFiles };
        });
      });

      this.uploader.bind('Error', function (up, err) {
        if (_lodash2.default.isUndefined(err.file) !== true) {
          _this3.setState(function (prevState) {
            var stateFiles = prevState.files;
            _lodash2.default.map(stateFiles, function (val, key) {
              if (val.id === err.file.id) {
                val.error = err;
                stateFiles[key] = val;
                stateFiles[key] = val;
              }
            });
            return { files: stateFiles };
          });
        }
      });

      this.uploader.bind('UploadProgress', function (up, file) {
        _this3.setState(function (prevState) {
          var stateProgress = prevState.progress;
          stateProgress[file.id] = file.percent;
          return { progress: stateProgress };
        });
      });
    }
  }, {
    key: 'checkUploader',
    value: function checkUploader() {
      return window.plupload !== undefined;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      // Refresh to append events to buttons again.
      this.uploader.refresh();
    }
  }, {
    key: 'initUploader',
    value: function initUploader() {
      this.uploader = new window.plupload.Uploader(_lodash2.default.extend({
        container: 'plupload_' + this.props.id,
        runtimes: 'html5',
        multipart: true,
        chunk_size: '1mb',
        browse_button: this.getComponentId(),
        url: '/upload'
      }, this.props));
    }

    // Display selected files

  }, {
    key: 'list',
    value: function list() {
      var _this4 = this;

      return _lodash2.default.map(this.state.files, function (val) {
        var removeFile = function removeFile(e) {
          e.preventDefault();
          _this4.removeFile(val.id);
        };
        var delButton = '';
        if (_this4.state.uploadState === false && val.uploaded !== true) {
          delButton = _react2.default.createElement(
            'button',
            { type: 'button', onClick: removeFile, className: 'float-right' },
            'X'
          );
        }

        var progressBar = '';
        if (_this4.state.uploadState === true && val.uploaded !== true && _lodash2.default.isUndefined(val.error)) {
          var percent = _this4.state.progress[val.id] || 0;
          progressBar = _react2.default.createElement('div', { className: 'progress' }, _react2.default.createElement('div', {
            className: 'progress-bar',
            role: 'progressbar',
            'aria-valuenow': percent,
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            style: { width: percent + '%' }
          }, _react2.default.createElement('span', { className: 'sr-only' }, percent + 'complete')));
        }

        var errorDiv = '';
        if (!_lodash2.default.isUndefined(val.error)) {
          errorDiv = _react2.default.createElement('div', { className: 'alert alert-danger' }, 'Error: ' + val.error.code + ', Message: ' + val.error.message);
        }

        var bgSuccess = '';
        if (!_lodash2.default.isUndefined(val.uploaded)) {
          bgSuccess = 'bg-success';
        }

        return _react2.default.createElement('li', { key: val.id }, _react2.default.createElement('p', { className: bgSuccess }, val.name, ' ', delButton), progressBar, errorDiv);
      });
    }
  }, {
    key: 'clearAllFiles',
    value: function clearAllFiles() {
      var _this5 = this;

      this.setState(function (prevState) {
        var stateFiles = _lodash2.default.filter(prevState.files, function (file) {
          _this5.uploader.removeFile(file.id);
        });
        return { files: stateFiles };
      });
    }
  }, {
    key: 'clearFailedFiles',
    value: function clearFailedFiles() {
      var _this6 = this;

      this.setState(function (prevState) {
        var stateFiles = _lodash2.default.filter(prevState.files, function (file) {
          if (file.error) {
            _this6.uploader.removeFile(file.id);
          }
          return !file.error;
        });
        return { files: stateFiles };
      });
    }
  }, {
    key: 'removeFile',
    value: function removeFile(id) {
      var _this7 = this;

      this.setState(function (prevState) {
        _this7.uploader.removeFile(id);
        var stateFiles = _lodash2.default.filter(prevState.files, function (file) {
          return file.id !== id;
        });
        return { files: stateFiles };
      });
    }
  }, {
    key: 'doUpload',
    value: function doUpload(e) {
      e.preventDefault();
      this.uploader.start();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var propsSelect = {
        id: this.getComponentId(),
        type: 'button',
        content: this.props.buttonSelect || 'Browse'
      };

      var propsUpload = {
        onClick: this.doUpload,
        type: 'button',
        content: this.props.buttonUpload || 'Upload'
      };
      if (this.state.files.length === 0) propsUpload.disabled = 'disabled';

      var list = this.list();

      return _react2.default.createElement(
        'div',
        {
          id: 'plupload_' + this.props.id,
          className: 'my-list',
          ref: function ref(_ref) {
            _this8.container = _ref;
            return null;
          }
        },
        _react2.default.createElement(
          'ul',
          { className: 'list-unstyled' },
          list
        ),
        _react2.default.createElement(_BrowseButton2.default, propsSelect),
        _react2.default.createElement(_UploadButton2.default, propsUpload)
      );
    }
  }]);
  return Plupload;
}(_react2.default.Component);

exports.default = Plupload;