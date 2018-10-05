import 'babel-polyfill';
import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {BrowserRouter} from 'react-router-dom';
import Loadable from 'react-loadable';
import createBrowserHistory from 'history/createBrowserHistory';
import apiClient from '../apiClient';
import ReduxAsyncConnect from '../ReduxAsyncConnect';
import Ultimate from '../Ultimate';


export default function client(routes, {initializeStore, state, providers}, wrapper, awaitRender) {

  (async () => {
    providers.client = apiClient();
    providers.history = createBrowserHistory();
    const store = initializeStore(state, providers);


    console.log(providers);

    const rehydrate = async (_routes, {store, providers}, wrapper) => {
      const ultimate = <Ultimate routes={_routes} />;
      console.log('HYDRATE');;
      hydrate(
        <Provider store={store}>
          <BrowserRouter>
            <ConnectedRouter history={providers.history}>
              <ReduxAsyncConnect routes={_routes} store={store} helpers={providers}>
                {wrapper(ultimate, {store, providers})}
              </ReduxAsyncConnect>
            </ConnectedRouter>
          </BrowserRouter>
        </Provider>
        ,
        document.getElementById('root')
      );
    };


    await Loadable.preloadReady();

    if (typeof awaitRender === 'function') {
      awaitRender({store, providers}).then(() => {
        rehydrate(routes, {store, providers}, wrapper);
      });
    } else {
      rehydrate(routes, {store, providers}, wrapper);
    }



    if (module.hot) {
      module.hot.accept(routes, () => {
        rehydrate(routes, store, wrapper);
      })
    }


  })();
};



