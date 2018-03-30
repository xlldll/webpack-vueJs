/**
 * Created by LinChuQiang.
 */
const option = require('../option')
const utils = require('../utils')
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'

const webpack = require('webpack')

// 插件列表

// 初始环境
const globalVar = require('../webpack_plugins/DefinePlugin')
const provideVar = require('../webpack_plugins/ProvidePlugin')

// 多线程处理 babel-js
const happyPack = require('../webpack_plugins/HappyPackPlugin')

const html = require('../webpack_plugins/HtmlWebpackPlugin')
const jsCommon = require('../webpack_plugins/CommonsChunkPlugin')

// DLL相关, htmlAsset插入script以及JSLib
const htmlAsset = require('../webpack_plugins/AddAssetHtmlPlugin')
const jsLib = require('../webpack_plugins/DllReferencePlugin')

// 开发环境
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// 生产环境
const compressCss = require('../webpack_plugins/OptimizeCssAssetsPlugin')
const compressJs = require('../webpack_plugins/UglifyJsPlugin')
const copy = require('../webpack_plugins/CopyWebpackPlugin')
const assets = require('../webpack_plugins/AssetsPlugin')
const cssExtract = require('../webpack_plugins/ExtractTextPlugin')

// DLL环境
const dllPlugin = require('../webpack_plugins/DllPlugin')

/**********
 初始环境
 **********/

const basePlugins = [
  // 1.创建一个在编译时可以配置的全局常量
  new webpack.DefinePlugin({
    // NODE_ENV: '"development"'
    // 'process.env': config.dev.env
  })
]

// 注意顺序
// buildPlugins.push(globalVar)
// buildPlugins.push(provideVar)
// devPlugins.push(cssExtract)

basePlugins.push(provideVar)

// 数组中添加第二个数组中的元素
// Equivalent to vegetables.push('celery', 'beetroot');
// Array.prototype.push.apply(vegetables, moreVegs);

Array.prototype.push.apply(basePlugins, happyPack)

Array.prototype.push.apply(basePlugins, html)
Array.prototype.push.apply(basePlugins, jsCommon)

basePlugins.push(htmlAsset)
Array.prototype.push.apply(basePlugins, jsLib)

module.exports.base = basePlugins

/******
 开发环境
 ******/

const devPlugins = [
  // 自动实时刷新页面
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  // hot module replacement is somewhat self-explanatory
  new webpack.HotModuleReplacementPlugin(),
  // no errors is used to handle errors more cleanly
  new webpack.NoEmitOnErrorsPlugin(),
  // 优化错误提示
  new FriendlyErrorsPlugin()
]

// Todo:找不到开发环境的写入目录
// devPlugins.push(copy)

if (option.dev.bundleAnalyzerReport) {
  let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  devPlugins.push(new BundleAnalyzerPlugin())
}

module.exports.dev = devPlugins

/******
生产环境
******/

const buildPlugins = []

buildPlugins.push(copy)
buildPlugins.push(assets)

Array.prototype.push.apply(buildPlugins, cssExtract)

// 压缩 Default：false
if (option.build.compressCss) {
  buildPlugins.push(compressCss)
}
if (option.build.compressJs) {
  buildPlugins.push(compressJs)
}
if (option.build.productionGzip) {
  var GzipCompress = require('../webpack_plugins/CompressionWebpackPlugin')
  buildPlugins.push(GzipCompress)
}

// 使用 webpack-bundle-analyzer 来分析 Webpack 生成的包体组成并且以可视化的方式反馈给开发者
if (option.build.bundleAnalyzerReport) {
  let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  buildPlugins.push(new BundleAnalyzerPlugin())
}

if (option.build.Visualizer) {
  // https://github.com/chrisbateman/webpack-visualizer#plugin-usage
  let Visualizer = require('webpack-visualizer-plugin')
  buildPlugins.push(new Visualizer({
    // 在E:\wamp64\www\Webpack2Vue_Demo 目录下生成
    filename: path.posix.join('Visualizer.html')
  }))
}

module.exports.build = buildPlugins

/**********
 DLL环境
 **********/

const dllPlugins = []

Array.prototype.push.apply(dllPlugins, dllPlugin)
Array.prototype.push.apply(dllPlugins, cssExtract)

// 默认不压缩
if (isProduction) {
  if (option.dllp.compressJs) {
    dllPlugins.push(compressJs)
  }
} else {
  if (option.dlld.compressJs) {
    dllPlugins.push(compressJs)
  }
}

module.exports.dll = dllPlugins
