'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _class, _temp; /* global tinymce */

// TinyMCE semi-controlled component.
//
// Limitations/Notes
// * `tinymce` be defined in the global scope.
// * `ignoreUpdatesWhenFocused` - sometimes TinyMCE has issues with cursor placement. This component tries very
//     hard to avoid such issues, but if the come up, this prop might help. Set it to true and the component
//     will only update the TinyMCE editor from new props when it does not have focus.
// * `onChange` - this is the main event you will want to handle. Note: unlike normal React onChange events,
//     it does not use a SyntheticEvent based event. It simply passes up the changed content.
// * events - the component listens for several events and maps them to something more React-like (ex. blur
//     => onBlur). Any event that changes the content should trigger both the original event plus onChange.
//     The event handler will receive the original tinymce event as a param.
//     [init, activate, deactivate, focus, blur, hide, remove reset, show, submit]
// * level of control - tinymce does not trigger an event on every character change. We could try binding to
//     a keyboard event. However, we have found that, in practice, getting changes in TinyMCE time is good enoug.
//     If you are trying to write a control that need per-character eventing, ex. a component that allows
//     multiple editors to work on the input at the same time, tinymce may not be right for you.

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIRECT_PASSTHROUGH_EVENTS = ['Activate', 'Deactivate', 'Focus', 'Hide', 'Init', 'Remove', 'Reset', 'Show', 'Submit', 'Click'];
var PSEUDO_HIDDEN = { position: 'absolute', left: -200, top: -200, height: 0 };

var TinyMCEInput = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(TinyMCEInput, _React$Component);

  function TinyMCEInput() {
    (0, _classCallCheck3.default)(this, TinyMCEInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TinyMCEInput.__proto__ || (0, _getPrototypeOf2.default)(TinyMCEInput)).call(this));

    _this.setupPassthroughEvents = _this.setupPassthroughEvents.bind(_this);
    _this.setupEditor = _this.setupEditor.bind(_this);
    _this.createMCEContextForComponent = _this.createMCEContextForComponent.bind(_this);
    _this.initTinyMCE = _this.initTinyMCE.bind(_this);
    _this.clearDropOverride = _this.clearDropOverride.bind(_this);
    _this.flagDropOverride = _this.flagDropOverride.bind(_this);
    _this.isDropOverrideFlagged = _this.isDropOverrideFlagged.bind(_this);
    _this.syncChange = _this.syncChange.bind(_this);
    _this.triggerEventHandler = _this.triggerEventHandler.bind(_this);
    _this.checkForChanges = _this.checkForChanges.bind(_this);
    _this.onTinyMCEChange = _this.onTinyMCEChange.bind(_this);
    _this.onTinyMCEBlur = _this.onTinyMCEBlur.bind(_this);
    _this.onTinyMCEUndo = _this.onTinyMCEUndo.bind(_this);
    _this.onTinyMCERedo = _this.onTinyMCERedo.bind(_this);
    _this.onTinyMCEDrop = _this.onTinyMCEDrop.bind(_this);
    _this.onTextareaChange = _this.onTextareaChange.bind(_this);
    _this.getContainerID = _this.getContainerID.bind(_this);
    _this.setRef = _this.setRef.bind(_this);
    _this.state = {
      id: (0, _uuid2.default)()
    };
    _this.component = null;
    _this.componentId = null;
    return _this;
  }

  (0, _createClass3.default)(TinyMCEInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ value: this.props.value || '' });
      this.initStartTime = Date.now();
      if (typeof tinymce !== 'undefined') {
        this.initTinyMCE();
      } else {
        this.initTimeout = setTimeout(this.initTinyMCE, 100);
      }
      this.updateInterval = setInterval(this.checkForChanges, this.props.pollInterval);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.focus) {
        var editor = tinymce.get(this.getComponentID());
        if (editor) {
          editor.focus();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof tinymce !== 'undefined') {
        tinymce.remove(this.getComponentID());
        clearTimeout(this.initTimeout);
        clearInterval(this.updateInterval);
        this.initTimeout = undefined;
        this.initStartTime = undefined;
      }
    }
  }, {
    key: 'onTinyMCEChange',
    value: function onTinyMCEChange(tinyMCEEvent) {
      this.syncChange(tinyMCEEvent.target.getContent());
    }
  }, {
    key: 'onTinyMCEBlur',
    value: function onTinyMCEBlur(tinyMCEEvent) {
      this.triggerEventHandler(this.props.onBlur, tinyMCEEvent);
      if (this.props.ignoreUpdatesWhenFocused) {
        // if we have been ignoring updates while focused (to preserve cursor position)
        // sync them now that we no longer have focus.
        tinyMCEEvent.target.setContent(this.state.value);
      }
    }
  }, {
    key: 'onTinyMCEUndo',
    value: function onTinyMCEUndo(tinyMCEEvent) {
      this.triggerEventHandler(this.props.onUndo, tinyMCEEvent);
      this.syncChange(tinyMCEEvent.target.getContent());
    }
  }, {
    key: 'onTinyMCERedo',
    value: function onTinyMCERedo(tinyMCEEvent) {
      this.triggerEventHandler(this.props.onRedo, tinyMCEEvent);
      this.syncChange(tinyMCEEvent.target.getContent());
    }
  }, {
    key: 'onTinyMCEDrop',
    value: function onTinyMCEDrop() {
      // We want to process updates just after a drop, even if processUpdatesWhenFocused
      // is false. The processUpdatesWhenFocused flag exists to keep the cursor from
      // jumping around, and we do not cares so much if the cursor jumps after dropping
      // an image because that is a mouse event. However, ignoring updates right after a
      // drop means that anything that relies on knowing the content has changed is
      // won't actually know.
      this.flagDropOverride();
    }
  }, {
    key: 'onTextareaChange',
    value: function onTextareaChange(e) {
      // should only be called when tinymce failed to load and we are getting changes directly in the textarea (fallback mode?)
      this.syncChange(e.target.value);
    }
  }, {
    key: 'getComponentID',
    value: function getComponentID() {
      /* eslint-disable-next-line */
      return this.componentId || (this.componentId = this.component.getAttribute('id'));
    }
  }, {
    key: 'getContainerID',
    value: function getContainerID() {
      return this.props.id || this.state.id;
    }

    /* eslint-disable-next-line */

  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value) {
        if (typeof tinymce !== 'undefined') {
          var editor = tinymce.get(this.getComponentID());
          if (editor) {
            if (!this.props.ignoreUpdatesWhenFocused || tinymce.focusedEditor !== editor || this.isDropOverrideFlagged()) {
              var bookmark = editor.selection.getBookmark(2, true);
              editor.setContent(nextProps.value);
              editor.selection.moveToBookmark(bookmark);
            }
          }
          this.setState({ value: nextProps.value });
        }
      }
    }
  }, {
    key: 'createMCEContextForComponent',
    value: function createMCEContextForComponent() {
      var tinymceConfig = (0, _assign2.default)({}, this.props.tinymceConfig, {
        target: this.component,
        setup: this.setupEditor
      });
      tinymce.init(tinymceConfig);
    }
  }, {
    key: 'initTinyMCE',
    value: function initTinyMCE() {
      var currentTime = Date.now();
      if (typeof tinymce === 'undefined') {
        if (currentTime - this.initStartTime > this.props.maxInitWaitTime) {
          this.initTimeout = undefined;
        } else {
          this.initTimeout = setTimeout(this.initTinyMCE, 100);
        }
      } else {
        this.createMCEContextForComponent();
        this.initTimeout = undefined;
      }
    }
  }, {
    key: 'clearDropOverride',
    value: function clearDropOverride() {
      this._tempDropOverride = undefined;
      var editor = tinymce.get(this.getComponentID());
      if (editor) {
        this.syncChange(editor.getContent());
      }
    }
  }, {
    key: 'flagDropOverride',
    value: function flagDropOverride() {
      this._tempDropOverride = true;
      if (this._tempDropOverrideTimeout) {
        clearTimeout(this.clearDropOverride);
      }
      this._tempDropOverrideTimeout = setTimeout(this.clearDropOverride, 250);
    }
  }, {
    key: 'isDropOverrideFlagged',
    value: function isDropOverrideFlagged() {
      return this._tempDropOverride;
    }
  }, {
    key: 'syncChange',
    value: function syncChange(newValue) {
      if (newValue !== this.state.value) {
        if (this.props.onChange) {
          this.props.onChange(newValue);
        }
        this.setState({ value: newValue });
      }
    }
  }, {
    key: 'triggerEventHandler',
    value: function triggerEventHandler(handler, event) {
      if (handler) {
        handler(event);
      }
    }
  }, {
    key: 'checkForChanges',
    value: function checkForChanges() {
      if (typeof tinymce !== 'undefined') {
        var editor = tinymce.get(this.getComponentID());
        if (tinymce.focusedEditor === editor) {
          var content = editor.getContent();
          if (content !== this.state.value) {
            this.syncChange(content);
          }
        }
      }
    }
  }, {
    key: 'setupPassthroughEvents',
    value: function setupPassthroughEvents(editor) {
      var _this2 = this;

      DIRECT_PASSTHROUGH_EVENTS.map(function (event) {
        editor.on(event.toLowerCase(), function (tinyMCEEvent) {
          var handler = _this2.props['on' + event];
          if (typeof handler === 'function') {
            handler(tinyMCEEvent);
          }
        });
        return null;
      });

      var handlers = this.props.otherEventHandlers;
      (0, _keys2.default)(handlers).map(function (key, index) {
        editor.on(index, key);
        return null;
      });
    }
  }, {
    key: 'setupEditor',
    value: function setupEditor(editor) {
      editor.on('change', this.onTinyMCEChange);
      editor.on('blur', this.onTinyMCEBlur);
      editor.on('drop', this.onTinyMCEDrop);
      editor.on('undo', this.onTinyMCEUndo);
      editor.on('redo', this.onTinyMCERedo);
      this.setupPassthroughEvents(editor);

      if (this.props.onSetupEditor) {
        this.props.onSetupEditor(editor);
      }

      if (this.props.focus) {
        editor.focus();
      }
      this.initTimeout = undefined;
    }
  }, {
    key: 'setRef',
    value: function setRef(ref) {
      this.component = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      // the textarea is controlled by tinymce... and react, neither of which agree on the value
      // solution: keep a separate input element, controlled by just react, that will actually be submitted
      var Component = this.props.component;

      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: this.props.style },
        _react2.default.createElement('input', { key: 0, type: 'hidden', name: this.props.name, defaultValue: this.state.value, readOnly: true }),
        _react2.default.createElement(Component, (0, _extends3.default)({
          key: 1
          // id={this.getContainerID()}
          , defaultValue: this.state.value,
          onChange: this.onTextareaChange,
          rows: this.props.rows,
          style: this.props.tinymceConfig.inline ? {} : PSEUDO_HIDDEN
        }, this.props.textareaProps, {
          ref: this.setRef
        }))
      );
    }
  }]);
  return TinyMCEInput;
}(_react2.default.Component), _class.defaultProps = {
  tinymceConfig: {},
  maxInitWaitTime: 20000,
  pollInterval: 1000,
  textareaProps: {},
  otherEventHandlers: {},
  onChange: function onChange() {},
  component: 'textarea'

}, _temp);
exports.default = TinyMCEInput;