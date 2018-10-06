import Home from './Home';
import Loadable from './Loadable';

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Loadable,
    path: '/about'
  }
];
