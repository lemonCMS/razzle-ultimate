import {routerReducer} from 'react-router-redux';
import store from '@wicked_query/ultimatejs/lib/redux/store/reducer';
import routesState from '@wicked_query/ultimatejs/lib/redux/routeState/reducer';
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
