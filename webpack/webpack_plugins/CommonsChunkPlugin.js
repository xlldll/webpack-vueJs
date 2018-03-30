/**
 * Created by LinChuQiang.
 */

const glob = require('glob')
var path = require('path')
var webpack = require('webpack')
var option = require('../option')

const TARGET = process.env.npm_lifecycle_event
const DEVJSDIR = option.dev.assetsJsDir
const BUILDJSDIR = option.build.assetsJsDir

var jsCommon = []
var match = glob.sync(path.resolve(process.cwd(), 'src/pages/**/*/app.ejs'))
// console.log(match.length)

/*
  提取公共JS模块
  官方关于此插件的说明：https: doc.webpack-china.org/plugins/commons-chunk-plugin/
  官方关于缓存的说明：https: doc.webpack-china.org/guides/caching/
  建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。

  设置 minChunks 函数将所有 node_modules 中的模块公共部分提取到一个通用的 chunk 中
  参考：https: segmentfault.com/a/1190000007891318?utm_source=tuicool&utm_medium=referral

  如果没有设置filename选项，最终公共文件的绝对路径是由webpack配置中的output.filename决定的
  如果设置了filename选项，最终公共文件的绝对路径是根据webpack配置中的ouput.path和CommonsChunkPlugin的filename参数，拼接而成的

  chunks 选项表示需要在哪些 chunk（也可以理解为webpack配置中entry的每一项）里寻找公共代码进行打包。不设置此参数则默认提取范围为所有的chunk。

  name 选项与HtmlWebpackPlugin中的 chunks 选项相对应
  */

if (TARGET === 'dev') {
  console.log(`${TARGET}：CommonsChunkPlugin 正在提取公共JS文件！`)
  jsCommon = [
    // Todo: pages/cnode 的异步公共模块打包问题
    /* new webpack.optimize.CommonsChunkPlugin({
      async: 'cnode-in-lazy',
      children: true,
      // chunks:['pages/cnode']
    }), */
    // 所有 node_modules中的js 公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'node_modules.commonChunk',
      filename: path.posix.join(DEVJSDIR, '[name].js'),
      // 如果模块是一个路径，而且在路径中有 ".js" 这个结尾文件出现，并且是 node_modules 目录下的文件，那请将它拆分到一个 node_modules.commonChunk.js 中
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(process.cwd(), 'node_modules')
          ) === 0
        )
      }
    }),
    // 所有 入口主页的 公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'entry.commonChunk',
      filename: path.posix.join(DEVJSDIR, '[name].js'),
      minChunks: match.length + 1
    })
  ]
  module.exports = jsCommon
}

if (TARGET === 'build') {
  console.log(`${TARGET}：CommonsChunkPlugin 正在提取公共JS文件！`)
  jsCommon = [

    new webpack.optimize.CommonsChunkPlugin({
      name: 'node_modules.commonChunk',
      filename: path.posix.join(BUILDJSDIR, '[name].js'),
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(process.cwd(), 'node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'entry.commonChunk',
      filename: path.posix.join(BUILDJSDIR, '[name].js'),
      minChunks: match.length + 1
    })
  ]
  module.exports = jsCommon
}

if (TARGET === 'test') {
  console.log(`${TARGET}：CommonsChunkPlugin 正在提取公共JS文件！`)
}
