import React from 'react';
import express from 'express';
import {render} from '../afterjs/render';
import apiClient from '../afterjs/apiClient';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import createMemoryHistory from 'history/createMemoryHistory';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {CookieStorage, NodeCookiesWrapper} from '@wicked_query/redux-persist-cookie-storage';
import PersistServer from '@wicked_query/redux-persist-component/lib/PersistServer';
import Cookies from 'cookies';
import initializeStore from '../redux/store';
import routes from '../routes';
import stats from '../../build/react-loadable.json';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const index = express();
index.use(Cookies.express());

const devProxy = {
  '/api': {
    target: process.env.RAZZLE_PROXY_HOST,
    // pathRewrite: {'^/api': '/'},
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
      if (req.cookies && req.cookies.get('token')) {
        proxyReq.setHeader('authorization', `Bearer ${req.cookies.get('token')}`);
      }
    }
  }
};

const dev = process.env.NODE_ENV === 'development';

// if (dev && devProxy) {
const proxyMiddleware = require('http-proxy-middleware');
Object.keys(devProxy).forEach(function (context) {
  index.use(proxyMiddleware(context, devProxy[context]))
});
// }

index.disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const client = apiClient(req);
      const history = createMemoryHistory({initialEntries: [req.originalUrl]});
      const cookies = new Cookies(req, res);
      const cookieJar = new NodeCookiesWrapper(cookies);
      const cookiesStorage = new CookieStorage(cookieJar, {
        setCookieOptions: {
          path: '/'
        }
      });
      const helpers = {
        client,
        history,
        cookies: cookiesStorage
      };

      const store = initializeStore({}, helpers);
      await PersistServer({
        store,
        storage: cookiesStorage,
        modules: ['auth']
      });

      let bundles = [];
      const customRenderer = (node) => {
        const modules = [];
        const App = (
          <Capture report={moduleName => modules.push(moduleName)}>
            <Provider store={store}>{node}</Provider>
          </Capture>
        );
        const Html = renderToString(App);
        bundles = getBundles(stats, modules);

        return {
          html: Html,
          bundles
        };
      };

      const html = await render({
        req,
        res,
        customRenderer,
        routes,
        assets,
        store,
        client
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
      });
      res.send(html);
    } catch (error) {
      res.json(error);
    }
  });


export default index;
