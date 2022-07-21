const webpack = require('webpack')
const rewireAliases = require('react-app-rewire-aliases')
const path = require('path')

module.exports = function override(config, env) {
  const fallback = config.resolve.fallback || {}
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
  })
  config = rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, 'src'),
    '@asset': path.resolve(__dirname, 'src/Asset'),
    '@component': path.resolve(__dirname, 'src/Component'),
    '@page': path.resolve(__dirname, 'src/Page'),
    '@context': path.resolve(__dirname, 'src/Context'),
    '@api': path.resolve(__dirname, 'src/Api'),
    '@middleware': path.resolve(__dirname, 'src/Middleware'),
    '@layout': path.resolve(__dirname, 'src/Layout'),
    '@constant': path.resolve(__dirname, 'src/Constant'),
  })(config, env)
  config.resolve.fallback = fallback
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ])
  config.ignoreWarnings = [/Failed to parse source map/]
  return config
}
