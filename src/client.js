import React from 'react';
import {CookieStorage} from 'redux-persist-cookie-storage';
import localForage from 'localforage';
import CookiesJS from 'cookies-js';
import {authRestore} from './redux/store/auth';
import PersistServer from './packages/persist-component/PersistServer';
import PersistComponent from './packages/persist-component/PersistComponent';
import {
  saveAndRestoreCookie,
  saveAndRestoreLocal,
} from './redux/store/counter';
import initializeStore from './redux/store';
import client, {trigger} from './packages/ultimate/client';
import routes from './routes';
import ErrorPage from './containers/Error';

const cookiesStorage = new CookieStorage(CookiesJS, {
  setCookieOptions: {
    path: '/',
  },
});

(async () => {
  const providers = {cookies: cookiesStorage};
  const state = window.__PRELOADED_STATE__ || {};

  const reduxWrapper = ultimate => (
    <PersistComponent
      storage={cookiesStorage}
      modules={[{counters: saveAndRestoreCookie()}, {auth: authRestore()}]}
    >
      <PersistComponent
        storage={localForage}
        modules={[{counters: saveAndRestoreLocal()}]}
      >
        {ultimate}
      </PersistComponent>
    </PersistComponent>
  );

  const awaitRender = ({store}) => {
    const promise = [];
    const restoreState = PersistServer({
      store,
      storage: cookiesStorage,
      modules: [{auth: authRestore()}],
    });
    promise.push(restoreState);
    return Promise.all(promise);
  };

  client(
    routes,
    {initializeStore, state, providers},
    reduxWrapper,
    awaitRender,
    ErrorPage
  );

  if (module.hot) {
    module.hot.accept('./routes', () => {
      /* eslint-disable-next-line */
      const _routes = require('./routes').default;
      trigger(_routes);
    });
  }
})();
