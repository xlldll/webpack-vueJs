/**
 * Created by LinChuQiang.
 */

var path = require('path')
var webpack = require('webpack')
var option = require('../option')

const TARGET = process.env.npm_lifecycle_event
const isProduction = process.env.NODE_ENV === 'production'
const outputPath = isProduction ? path.resolve(process.cwd(), 'commonDll/production') : path.resolve(process.cwd(), 'commonDll/development')

var dllPlugin = []

if (TARGET === 'dlld') {
  console.log(`${TARGET}：DllPlugin 正在编译JS文件！`)

  dllPlugin = [new webpack.DllPlugin({
    /**
     * path
     * 定义 manifest 文件生成的位置
     * [name]的部分由entry的名字替换
     * The path to the manifest file which maps between modules included in a bundle and the internal IDs within that bundle
     * 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
     */
    path: path.join(outputPath, '[name]-manifest.json'),
    /**
     * name
     * dll bundle 输出到那个全局变量上
     * 必须和 output.library 一样的值
     * 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下
     */
    name: '[name]'
    // 指定一个路径作为上下文环境，需要与webpack_plugins的DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    // context: process.cwd()
  })]

  // If you use any hashing ([hash] or [chunkhash]), make sure to have a consistent ordering of modules. Use the OccurrenceOrderPlugin or recordsPath.see https://github.com/webpack/docs/wiki/configuration
  /* dllPlugin.push(
   new webpack.optimize.OccurrenceOrderPlugin(true)
   ) */
  module.exports = dllPlugin
}

if (TARGET === 'dllp') {
  console.log(`${TARGET}：DllPlugin 正在编译JS文件！`)
  dllPlugin = [new webpack.DllPlugin({
    path: path.join(outputPath, '[name]-manifest.json'),
    name: '[name]'
  })]
  /* dllPlugin.push(
   new webpack.optimize.OccurrenceOrderPlugin(true)
   ) */
  module.exports = dllPlugin
}
