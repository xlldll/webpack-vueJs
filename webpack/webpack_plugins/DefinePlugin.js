/**
 * Created by LinChuQiang.
 */

var webpack = require('webpack')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(`Running the pretest task!`)
}

if (TARGET === 'build') {
  console.log(`DefinePlugin正在设置 webpack 全局公共变量！`)
  // 4.1 全局公共变量
  // http://vuejs.github.io/vue-loader/en/workflow/production.html
  var globalVar = new webpack.DefinePlugin({
    // 'process.env': config.build.env
  })
  module.exports = globalVar
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}
