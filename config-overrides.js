/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
  );
  // 装饰器
  config = injectBabelPlugin(
    [
      require('@babel/plugin-proposal-decorators').default,
      { legacy: true },
    ],
    config,
  );

  return config;
};