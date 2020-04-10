const result = require('dotenv').config()

module.exports = {
  env: result.parsed,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/server$/));
    return config;
  },
};
