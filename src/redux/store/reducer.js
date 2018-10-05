import {routerReducer} from 'react-router-redux';
import store from '../../packages/redux/store/reducer';
import routesState from '../../packages/redux/routeState/reducer';
import auth from './auth';
import storage from './storage';

export default function createReducers(asyncReducers) {
  return {
    routing: routerReducer,
    store,
    routesState,
    auth,
    storage,
    ...asyncReducers
  };
}
