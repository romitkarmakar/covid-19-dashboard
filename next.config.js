module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(new webpack.IgnorePlugin(/^\.\/server$/))
      return config
    }
  }