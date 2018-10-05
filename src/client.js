import React from 'react';
import PersistServer from './packages/persist-component/PersistServer';
import PersistComponent from './packages/persist-component/PersistComponent';
import {CookieStorage} from 'redux-persist-cookie-storage';
import CookiesJS from 'cookies-js';
import initializeStore from './redux/store';
import client from './packages/ultimate/client';
import routes from './routes';

const cookiesStorage = new CookieStorage(CookiesJS, {
  setCookieOptions: {
    path: '/'
  }
});

(async () => {
  const providers = {cookies: cookiesStorage};
  const state = window.__PRELOADED_STATE__ || {};

  const reduxWrapper = (ultimate, store) => {
    return (
      <PersistComponent storage={cookiesStorage} modules={{auth: state => ({token: state.token, loggedIn: state.loggedIn})}}>
        {ultimate}
      </PersistComponent>);
  };

  const awaitRender = ({store}) => {
    const promise = [];
    const restoreState = PersistServer({
      store,
      storage: cookiesStorage,
      modules: ['auth']
    });
    promise.push(restoreState);
    return Promise.all(promise);
  };

  client(routes, {initializeStore, state, providers}, reduxWrapper, awaitRender);
})();

