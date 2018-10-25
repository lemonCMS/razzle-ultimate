import App from './containers/App/App';
import Home from './containers/Home/Loadable';
import Counters from './containers/Counters/Loadable';
import Forms from './containers/Forms';

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
