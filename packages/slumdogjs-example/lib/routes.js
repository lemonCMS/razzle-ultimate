'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('./containers/App/App');

var _App2 = _interopRequireDefault(_App);

var _Wrap = require('./components/Wrap');

var _Wrap2 = _interopRequireDefault(_Wrap);

var _Loadable = require('./containers/Home/Loadable');

var _Loadable2 = _interopRequireDefault(_Loadable);

var _Loadable3 = require('./containers/Dogs/Loadable');

var _Loadable4 = _interopRequireDefault(_Loadable3);

var _Loadable5 = require('./containers/Counters/Loadable');

var _Loadable6 = _interopRequireDefault(_Loadable5);

var _Cookie = require('./containers/Counters/Cookie');

var _Cookie2 = _interopRequireDefault(_Cookie);

var _Local = require('./containers/Counters/Local');

var _Local2 = _interopRequireDefault(_Local);

var _Forms = require('./containers/Forms');

var _Forms2 = _interopRequireDefault(_Forms);

var _Laravel = require('./containers/Laravel');

var _Laravel2 = _interopRequireDefault(_Laravel);

var _Item = require('./containers/Laravel/Item');

var _Item2 = _interopRequireDefault(_Item);

var _CookieBar = require('./containers/CookieBar');

var _CookieBar2 = _interopRequireDefault(_CookieBar);

var _FullScreen = require('./containers/CookieBar/FullScreen');

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _Sticky = require('./containers/Sticky');

var _Sticky2 = _interopRequireDefault(_Sticky);

var _Stack = require('./containers/Sticky/Stack');

var _Stack2 = _interopRequireDefault(_Stack);

var _Data = require('./containers/Data');

var _Data2 = _interopRequireDefault(_Data);

var _Fetch = require('./containers/Data/Fetch');

var _Fetch2 = _interopRequireDefault(_Fetch);

var _Defer = require('./containers/Data/Defer');

var _Defer2 = _interopRequireDefault(_Defer);

var _Authorize = require('./containers/Data/Authorize');

var _Authorize2 = _interopRequireDefault(_Authorize);

var _NeedsToken = require('./containers/Data/Authorize/NeedsToken');

var _NeedsToken2 = _interopRequireDefault(_NeedsToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  component: _App2.default,
  routes: [{
    component: _Loadable2.default,
    path: '/',
    exact: true
  }, {
    component: _Wrap2.default,
    path: '/counters',
    routes: [{
      component: _Cookie2.default,
      path: '/counters/cookie'
    }, {
      component: _Local2.default,
      path: '/counters/local'
    }, {
      component: _Loadable6.default
    }]
  }, {
    component: _Loadable4.default,
    path: '/dogs'
  }, {
    component: _Wrap2.default,
    path: '/laravel',
    routes: [{
      path: '/laravel/:id',
      component: _Item2.default
    }, {
      path: '/laravel/:id/edit',
      component: _Item2.default
    }, {
      component: _Laravel2.default
    }]
  }, {
    component: _Wrap2.default,
    path: '/data',
    routes: [{
      path: '/data/fetch',
      component: _Fetch2.default
    }, {
      path: '/data/defer',
      component: _Defer2.default
    }, {
      path: '/data/authorize',
      component: _Wrap2.default,
      routes: [{
        path: '/data/authorize/needstoken',
        component: _NeedsToken2.default
      }, {
        component: _Authorize2.default
      }]
    }, {
      component: _Data2.default
    }]
  }, {
    component: _Wrap2.default,
    path: '/cookiebar',
    routes: [{
      path: '/cookiebar/fullscreen',
      component: _FullScreen2.default
    }, {
      component: _CookieBar2.default
    }]
  }, {
    path: '/sticky',
    component: _Wrap2.default,
    routes: [{
      path: '/sticky/stack',
      component: _Stack2.default
    }, {
      component: _Sticky2.default
    }]
  }, {
    component: _Forms2.default.default,
    path: '/forms',
    routes: [{
      path: '/forms/register',
      component: _Forms2.default.register
    }, { component: _Forms2.default.login }]
  }]
}];

exports.default = routes;