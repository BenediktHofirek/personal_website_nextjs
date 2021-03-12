module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve("url-loader")
    });

    return config;
  }
};