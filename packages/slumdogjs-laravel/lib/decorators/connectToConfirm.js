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

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = connnectToConfirm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connnectToConfirm(conf) {
  return function (WrappedComponent) {

    var thisConf = (0, _assign2.default)({}, {
      title: 'Actie bevestigen',
      message: 'Weet u zeker dat u deze actie wilt uitvoeren?',
      confirm: 'bestigen',
      cancel: 'annuleren'
    }, conf);

    var ConfirmConnection = function (_Component) {
      (0, _inherits3.default)(ConfirmConnection, _Component);

      function ConfirmConnection() {
        (0, _classCallCheck3.default)(this, ConfirmConnection);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ConfirmConnection.__proto__ || (0, _getPrototypeOf2.default)(ConfirmConnection)).call(this));

        _this.showModal = _this.showModal.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        _this.confirm = _this.confirm.bind(_this);
        _this.renderModal = _this.renderModal.bind(_this);
        _this.state = {
          showModal: false
        };
        return _this;
      }

      (0, _createClass3.default)(ConfirmConnection, [{
        key: 'showModal',
        value: function showModal(item, action) {
          this.setState({ showModal: true, item: item, action: action });
        }
      }, {
        key: 'closeModal',
        value: function closeModal() {
          this.setState({ showModal: false, item: null });
        }
      }, {
        key: 'confirm',
        value: function confirm() {
          var item = this.state.item;

          this.state.action(item);
          this.closeModal();
        }
      }, {
        key: 'renderModal',
        value: function renderModal() {
          return _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: this.state.showModal,
              onHide: this.closeModal },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              { closeButton: true },
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                thisConf.title
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              thisConf.message
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                { variant: 'danger',
                  onClick: this.confirm },
                thisConf.confirm
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.closeModal },
                thisConf.cancel
              )
            )
          );
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            WrappedComponent,
            (0, _extends3.default)({}, this.props, {
              showModal: this.showModal,
              closeModal: this.closeModal
            }),
            this.renderModal()
          );
        }
      }]);
      return ConfirmConnection;
    }(_react.Component);

    return ConfirmConnection;
  };
}