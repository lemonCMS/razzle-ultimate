import multireducer from 'multireducer';
import store from '../../packages/redux/store/reducer';
import routesState from '../../packages/redux/routeState/reducer';
import auth from './auth';
import storage from './storage';
import counters from './counter';

export default function createReducers(asyncReducers) {
  return {
    store,
    routesState,
    auth,
    storage,
    counters: multireducer({
      counterCookie: counters,
      counterLocalStorage: counters,
    }),
    ...asyncReducers,
  };
}
