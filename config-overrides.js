const webpack = require('webpack')
const rewireAliases = require('react-app-rewire-aliases')
const path = require('path')

module.exports = function override(config, env) {
  // Object.assign(fallback, {
  //   crypto: require.resolve('crypto-browserify'),
  //   stream: require.resolve('stream-browserify'),
  //   assert: require.resolve('assert'),
  //   http: require.resolve('stream-http'),
  //   https: require.resolve('https-browserify'),
  //   os: require.resolve('os-browserify'),
  //   url: require.resolve('url'),
  // })
  config = rewireAliases.aliasesOptions({
    '@asset': path.resolve(__dirname, 'src/Asset'),
    '@component': path.resolve(__dirname, 'src/Component'),
    '@page': path.resolve(__dirname, 'src/Page'),
    '@context': path.resolve(__dirname, 'src/Context'),
    '@api': path.resolve(__dirname, 'src/Api'),
    '@middleware': path.resolve(__dirname, 'src/Middleware'),
    '@layout': path.resolve(__dirname, 'src/Layout'),
    '@constant': path.resolve(__dirname, 'src/Constant'),
    '@style': path.resolve(__dirname, 'src/Style'),
    '@locale': path.resolve(__dirname, 'src/Locale'),
    '@': path.resolve(__dirname, 'src'),
  })(config, env)
  // config.resolve.fallback = fallback
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
  }
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ])
  config.ignoreWarnings = [/Failed to parse source map/]
  return config
}
