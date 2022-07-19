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
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/Components'),
    '@page': path.resolve(__dirname, 'src/Page'),
    '@context': path.resolve(__dirname, 'src/Context'),
    '@api': path.resolve(__dirname, 'src/Api'),
    '@middleware': path.resolve(__dirname, 'src/Middleware'),
    '@layout': path.resolve(__dirname, 'src/Layout'),
    // '@store': path.resolve(__dirname, 'src/redux'),
    // '@styles': path.resolve(__dirname, 'src/@core/scss'),
    // '@configs': path.resolve(__dirname, 'src/configs'),
    // '@utils': path.resolve(__dirname, 'src/utility/Utils'),
    // '@hooks': path.resolve(__dirname, 'src/utility/hooks'),
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
