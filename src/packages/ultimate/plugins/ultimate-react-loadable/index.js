const {ReactLoadablePlugin} = require('react-loadable/webpack');

module.exports =  (baseConfig, {dev, target}) => {
  const appConfig = Object.assign({}, baseConfig);
  if (target === 'web') {
    appConfig.plugins.push(new ReactLoadablePlugin({
      filename: './build/react-loadable.json',
    }));
  }

  appConfig.plugins = appConfig.plugins.map(plugin => {
    if (plugin.constructor.name === 'WatchIgnorePlugin') {
      console.log(process.cwd() + '/src/client.js');
      plugin.paths.push(process.cwd() + '/build/react-loadable.json');
      plugin.paths.push(process.cwd() + '/src/index.js');
      plugin.paths.push(process.cwd() + '/src/server.js');
      plugin.paths.push(process.cwd() + '/src/client.js');
      plugin.paths.push(process.cwd() + '/src/routes.js');
    }
    return plugin;
  });

  return appConfig;
};
