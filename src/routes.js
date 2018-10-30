import App from './containers/App/App';
import Home from './containers/Home/Loadable';
import Dogs from './containers/Dogs/Loadable';
import Counters from './containers/Counters/Loadable';
import Forms from './containers/Forms';
import CookieBar from './containers/CookieBar';
import CookieBarCompact from './containers/CookieBar/Compact';
import CookieBarFullScreen from './containers/CookieBar/FullScreen';

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
        component: Counters,
        path: '/counters',
      },
      {
        component: Dogs,
        path: '/dogs',
      },
      {
        component: CookieBar,
        path: '/cookiebar',
        routes: [
          {
            path: '/cookiebar/compact',
            component: CookieBarCompact
          },
          {
            path: '/cookiebar/fullscreen',
            component: CookieBarFullScreen
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
          { component: Forms.login },
        ],
      },
    ],
  },
];

export default routes;
