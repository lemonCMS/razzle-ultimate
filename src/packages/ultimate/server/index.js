import React from 'react';
import express from 'express';
import {render as ultimateRender} from '../render';
import apiClient from '../apiClient';
import Loadable from 'react-loadable';
import {getBundles} from 'react-loadable/webpack';
import createMemoryHistory from 'history/createMemoryHistory';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const index = express();

index.disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR));

export default index;

export const render = ({req, res}, stats, routes, {initializeStore, providers}, wrapper, awaitRender) => {
  (async () => {
    try {
      const history = createMemoryHistory({initialEntries: [req.originalUrl]});
      providers.client = apiClient();
      providers.history = history;
      const store = initializeStore({}, providers);

      let bundles = [];
      const customRenderer = (node) => {
        const modules = [];
        const App = (
          <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <Provider store={store}>
              {typeof wrapper === 'function' ? wrapper(node) : node}
            </Provider>
          </Loadable.Capture>
        );
        const Html = renderToString(App);
        bundles = getBundles(stats, modules);

        return {
          html: Html,
          bundles
        };
      };

      if (typeof awaitRender === 'function') {
        await awaitRender({store, providers, req, res});
      }
      await Loadable.preloadReady();

      const html = await ultimateRender({
        req,
        res,
        customRenderer,
        routes,
        assets,
        store,
        client: providers.client
      });
      res.send(html);
    } catch (error) {
      console.log('error', error);
      res.json(error);
    }
  })();
};
