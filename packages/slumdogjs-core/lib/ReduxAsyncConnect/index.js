'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _asyncMatchRoutes = require('../asyncMatchRoutes');

var _asyncMatchRoutes2 = _interopRequireDefault(_asyncMatchRoutes);

var _asyncMap = require('../asyncMap');

var _asyncMap2 = _interopRequireDefault(_asyncMap);

var _src = require('../../../slumdogjs-redial/src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Error'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Unfortunately there has been an irrecoverable error.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'So... well, yeah nothing we can do right now.'
    )
  );
}; /* eslint react/no-unused-state: "off" */

var ReduxAsyncConnect = function (_Component) {
  (0, _inherits3.default)(ReduxAsyncConnect, _Component);

  function ReduxAsyncConnect(props) {
    (0, _classCallCheck3.default)(this, ReduxAsyncConnect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReduxAsyncConnect.__proto__ || (0, _getPrototypeOf2.default)(ReduxAsyncConnect)).call(this, props));

    _this.getAsyncData = _this.getAsyncData.bind(_this);
    _this.state = {
      location: props.location,
      nextLocation: {
        pathname: '',
        search: ''
      },
      inTransition: false,
      authorized: true
    };
    return _this;
  }

  (0, _createClass3.default)(ReduxAsyncConnect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          history = _props.history,
          location = _props.location,
          routes = _props.routes,
          store = _props.store,
          helpers = _props.helpers;

      this.getAsyncData(history, location, routes, store, helpers, false);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.inTransition === false) {
        if (prevState.nextLocation.pathname !== this.state.nextLocation.pathname || prevState.nextLocation.search !== this.state.nextLocation.search) {
          var _props2 = this.props,
              history = _props2.history,
              location = _props2.location,
              routes = _props2.routes,
              store = _props2.store,
              helpers = _props2.helpers;

          this.getAsyncData(history, location, routes, store, helpers, false);
        }
      }
    }
  }, {
    key: 'getAsyncData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(history, location, routes, store, helpers, isUpdate) {
        var _this2 = this;

        var _ref2, components, match, params;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // save the location so we can render the old screen
                _nprogress2.default.start();
                this.setState({ inTransition: true });
                // load data while the old screen remains
                _context3.next = 4;
                return (0, _asyncMatchRoutes2.default)(routes, location.pathname);

              case 4:
                _ref2 = _context3.sent;
                components = _ref2.components;
                match = _ref2.match;
                params = _ref2.params;
                _context3.next = 10;
                return (0, _asyncMap2.default)(components, function (component) {
                  return (0, _src.authorize)('authorized', component, (0, _assign2.default)({}, helpers, {
                    store: store,
                    match: match,
                    params: params,
                    history: history,
                    location: location
                  }));
                }).then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                  var fetchers;
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(isUpdate === false)) {
                            _context2.next = 7;
                            break;
                          }

                          fetchers = function () {
                            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                              return _regenerator2.default.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return (0, _src.trigger)('fetch', components, (0, _assign2.default)({}, helpers, {
                                        store: store,
                                        match: match,
                                        params: params,
                                        history: history,
                                        location: location
                                      }));

                                    case 2:
                                    case 'end':
                                      return _context.stop();
                                  }
                                }
                              }, _callee, _this2);
                            }));

                            return function fetchers() {
                              return _ref4.apply(this, arguments);
                            };
                          }();

                          if (process.env.BUILD_TARGET === 'client') {
                            (0, _src.trigger)('defer', components, (0, _assign2.default)({}, helpers, {
                              store: store,
                              match: match,
                              params: params,
                              history: history,
                              location: location
                            }));
                          }
                          _context2.next = 5;
                          return fetchers();

                        case 5:
                          _context2.next = 8;
                          break;

                        case 7:
                          if (process.env.BUILD_TARGET === 'client') {
                            (0, _src.trigger)('defer', components, (0, _assign2.default)({}, helpers, {
                              store: store,
                              match: match,
                              params: params,
                              history: history,
                              location: location
                            }));
                          }

                        case 8:
                          _this2.setState({ authorized: true });

                        case 9:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this2);
                }))).catch(function () {
                  _this2.setState({ authorized: false });
                });

              case 10:

                // clear previousLocation so the next screen renders
                this.setState({ inTransition: false, location: location });
                _nprogress2.default.done();

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAsyncData(_x, _x2, _x3, _x4, _x5, _x6) {
        return _ref.apply(this, arguments);
      }

      return getAsyncData;
    }()
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var authorized = this.state.authorized;


      if (authorized) {
        return _react2.default.createElement(_reactRouter.Route, { location: this.state.location,
          render: function render() {
            return children;
          } });
      }

      if (this.props.errorPage !== null) {
        var ErrorPage = this.props.errorPage;

        return _react2.default.createElement(_reactRouter.Route, { location: this.state.location,
          render: function render() {
            return _react2.default.createElement(ErrorPage, { error: 'Not authorized' });
          } });
      }

      return _react2.default.createElement(_reactRouter.Route, { location: this.state.location,
        render: function render() {
          return _react2.default.createElement(Error, null);
        } });
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.location.pathname === state.nextLocation.pathname && props.location.search === state.nextLocation.search) {
        return null;
      }

      if (props.location.pathname !== state.location.pathname || props.location.search !== state.location.search) {
        return {
          nextLocation: (0, _assign2.default)({}, props.location)
        };
      }
      return false;
    }
  }]);
  return ReduxAsyncConnect;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(ReduxAsyncConnect);