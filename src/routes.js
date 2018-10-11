
import App from './containers/App/App';
import Home from './containers/Home/Loadable';
import Counters from './containers/Counters/Loadable';


const routes = [{
  component: App,
  routes: [
    {
      component: Home,
      path: '/',
      exact: true
    },
    {
      component: Counters,
      path: '/counters'
    }
  ]
}];

export default routes;
