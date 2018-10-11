import server, {render} from '@wicked_query/ultimatejs/lib/ultimate/server';
import {CookieStorage, NodeCookiesWrapper} from 'redux-persist-cookie-storage';
import PersistServer from '@wicked_query/ultimatejs/lib/persist-component/PersistServer';
import Cookies from 'cookies';
import initializeStore from './redux/store';
import routes from './routes';
import stats from '../build/react-loadable.json';

server.use(Cookies.express());

const dev = process.env.NODE_ENV === 'development';
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
if (dev && devProxy) {
  const proxyMiddleware = require('http-proxy-middleware');
  Object.keys(devProxy).forEach(function (context) {
    server.use(proxyMiddleware(context, devProxy[context]))
  })
}

server.use((req, res, next) => {
  next();
}).get('/*',  async (req, res) => {



  const cookies = new Cookies(req, res);
  const cookieJar = new NodeCookiesWrapper(cookies);
  const cookiesStorage = new CookieStorage(cookieJar, {
    setCookieOptions: {
      path: '/'
    }
  });
  const providers = {
    cookies: cookiesStorage
  };

  const wrapper = (node) => node;
  const awaitRender = ({store}) => {
    const promise = [];

    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    // promise.push(sleep(5000));

    promise.push(PersistServer({
      store,
      storage: cookiesStorage,
      modules: ['auth', 'counters']
    }));

    return Promise.all(promise);
  };
  render({req, res}, stats, routes, {initializeStore, providers}, wrapper, awaitRender);

});

export default server;

