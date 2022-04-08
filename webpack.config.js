const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    mode: "development",
    optimization: {
      ...config.optimization,
      runtimeChunk: false
    },
    module: {
      ...config.module,
      rules: [...config.module.rules, {
        test: /\.worker\.ts$/,
        use: { loader: "worker-loader" },
      }],
    },
    plugins: [...config.plugins],
  };
};
