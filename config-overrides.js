const path = require('path');
const { override, babelInclude } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = override(
  (config, env) => (rewireReactHotLoader(config, env)),
  (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react-dom': '@hot-loader/react-dom',
      },
    },
  }),

  (config) => ({ ...config, resolve: { ...config.resolve, symlinks: false } }),

  babelInclude([
    path.resolve('src'),
  ]),
);
