import React from 'react';
import {authRestore} from './redux/store/auth';
import PersistServer from './reduxPersist/PersistServer';
import PersistComponent from './reduxPersist/PersistComponent';
import {CookieStorage} from 'redux-persist-cookie-storage';
import localForage from 'localforage';
import {saveAndRestoreCookie, saveAndRestoreLocal} from './redux/store/counter';
import CookiesJS from 'cookies-js';
import initializeStore from './redux/store';
import client, {trigger} from './packages/ultimate/client';
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
      <PersistComponent storage={cookiesStorage} modules={[{counters: saveAndRestoreCookie()}, {auth: authRestore()}]}>
        <PersistComponent storage={localForage} modules={[{counters: saveAndRestoreLocal()}]}>
          {ultimate}
        </PersistComponent>
      </PersistComponent>);
  };

  const awaitRender = ({store}) => {
    const promise = [];
    const restoreState = PersistServer({
      store,
      storage: cookiesStorage,
      modules: [{auth: authRestore()}]
    });
    promise.push(restoreState);
    return Promise.all(promise);
  };

  client(routes, {initializeStore, state, providers}, reduxWrapper, awaitRender);

  if (module.hot) {
    module.hot.accept('./routes', () => {
      const routes = require('./routes').default;
      trigger(routes);
    })
  }

})();

