/**
 * Created by LinChuQiang.
 */

const path = require('path')
const option = require('../option')
const AssetsPlugin = require('assets-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(`Running the pretest task!`)
}

if (TARGET === 'build') {
  console.log(`AssetsPlugin正在从 webpack 编译统计中获取文件名！`)
  // 4.8 从 webpack 编译统计中获取文件名
  // https://www.npmjs.com/package/assets-webpack-plugin
  var assets = new AssetsPlugin({
    filename: 'assets-map.json',
    fullPath: true,
    includeManifest: 'manifest',
    path: path.join(__dirname, '../assetsFileMap'),
    // update:true代表不会覆盖，而是更新
    update: false,
    prettyPrint: true
    /* processOutput  : function (assets) {
      return '{' + JSON.stringify('window.staticMap') + ':' + JSON.stringify(assets) + '}'
    } */
  })
  module.exports = assets
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}
