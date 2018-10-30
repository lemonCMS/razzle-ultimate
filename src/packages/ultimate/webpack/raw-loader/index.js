
module.exports = (baseConfig) => {
  const appConfig = Object.assign({}, baseConfig);
  appConfig.module.rules.push({
    test: /\.txt$/,
    use: ['raw-loader'],
  });

  return appConfig;
};
