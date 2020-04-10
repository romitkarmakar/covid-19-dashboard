require('dotenv').config()

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/server$/));
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};
