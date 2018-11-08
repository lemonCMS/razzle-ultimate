import App from './containers/App/App';
import Wrap from './components/Wrap';
import Home from './containers/Home/Loadable';
import Dogs from './containers/Dogs/Loadable';
import Counters from './containers/Counters/Loadable';
import CountersCookie from './containers/Counters/Cookie';
import CountersLocal from './containers/Counters/Local';
import Forms from './containers/Forms';
import Laravel from './containers/Laravel';
import LaravelItem from './containers/Laravel/Item';
import CookieBar from './containers/CookieBar';
import CookieBarFullScreen from './containers/CookieBar/FullScreen';
import Sticky from './containers/Sticky';
import StickyStacked from './containers/Sticky/Stack';
import Data from './containers/Data';


const routes = [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true,
      },
      {
        component: Wrap,
        path: '/counters',
        routes: [
          {
            component: CountersCookie,
            path: '/counters/cookie'
          },
          {
            component: CountersLocal,
            path: '/counters/local'
          }, {
            component: Counters,
          }
        ]
      },
      {
        component: Dogs,
        path: '/dogs',
      },
      {
        component: Wrap,
        path: '/laravel',
        routes: [
          {
            path: '/laravel/:id',
            component: LaravelItem
          },
          {
            path: '/laravel/:id/edit',
            component: LaravelItem
          },
          {
            component: Laravel
          }
        ]
      },
      {
        component: Wrap,
        path: '/data',
        routes: [
          {
            component: Data
          }
        ]
      },
      {
        component: Wrap,
        path: '/cookiebar',
        routes: [
          {
            path: '/cookiebar/fullscreen',
            component: CookieBarFullScreen
          },
          {
            component: CookieBar
          }
        ]
      },
      {
        path: '/sticky',
        component: Wrap,
        routes: [
          {
            path: '/sticky/stack',
            component: StickyStacked
          },
          {
            component: Sticky
          }
        ]
      },
      {
        component: Forms.default,
        path: '/forms',
        routes: [
          {
            path: '/forms/register',
            component: Forms.register,
          },
          {component: Forms.login},
        ],
      },
    ],
  },
];

export default routes;
