const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
  devtool: require('./webpack_config/devtool.js').build,
  entry: require('./webpack_config/entry.js').build,
  output: require('./webpack_config/output.js').build,
  module: {
    rules: require('./webpack_config/module.js').build
  },
  plugins: require('./webpack_config/plugins.js').build
})
console.log('devtool: ', webpackConfig.devtool)
console.log('entry: ', webpackConfig.entry)
console.log('output: ', webpackConfig.output)
console.log('rules: ', webpackConfig.module.rules)
console.log('plugins: ', webpackConfig.plugins)
module.exports = webpackConfig
