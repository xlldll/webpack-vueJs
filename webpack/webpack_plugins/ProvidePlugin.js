/**
 * Created by LinChuQiang.
 */

const webpack = require('webpack')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(TARGET, `: ProvidePlugin正在自动匹配变量！`)
}

if (TARGET === 'build') {
  console.log(TARGET, `: ProvidePlugin正在自动匹配变量！`)
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}

// provide $, jQuery and window.jQuery to every script
// ProvidePlugin的机制是：当webpack加载到某个js模块里，出现了未定义且名称符合（字符串完全匹配）配置中key的变量时，会自动require配置中value所指定的js模块。
// 例子，当某个老式插件使用了jQuery.fn.extend(object)，那么webpack就会自动引入jquery（此处我是用NPM的版本，我也推荐使用NPM的版本）。
// 地址:https://segmentfault.com/a/1190000006887523#articleHeader3

const provideVar = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  jquery: 'jquery',
  'window.jQuery': 'jquery',
  'window.$': 'jquery',
  'moment': 'moment'
})
module.exports = provideVar
