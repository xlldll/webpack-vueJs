/**
 * Created by LinChuQiang.
 */
const option = require('../option')
const path = require('path')
const utils = require('../utils')

// 环境变量 https://doc.webpack-china.org/guides/production-build/
const isProduction = process.env.NODE_ENV === 'production'

//  assetsJsDir: 'assets/js/'
const ASSETSJS = option.dev.assetsJsDir

/** ********
 初始环境
 **********/

module.exports.base = {
  //  都是根目录下 '/'
  publicPath: isProduction ? option.build.assetsPublicPath : option.dev.assetsPublicPath,
}

/** ********
 开发环境
 **********/

module.exports.dev = {
  // path 指定绝对路径，存放编译后生成的所有代码、资源（图片、字体等）
  path: path.resolve(process.cwd(), 'development'),
  // path: path.resolve(__dirname, '../../dist/static'),
  // publicPath: 'static/',
  // pathinfo: true,
  
  // filename 命名从入口文件打包的名称及路径
  // [name]从entry的key中获得
  filename: path.posix.join(ASSETSJS, '[name].outputSync.js'),
  // filename: '[name].[hash].js',
  // filename: '[name].outputSync.js',
  // filename: '[name].js',
  
  // chunkFilename命名入口文件中require.ensure的异步js
  // 单独输出一个包，并不会跟filename中的内容打包到一起，比如有些文件你并不想打包到主文件中，或者减轻首页负担，只在引入的时候才加载
  // 怎么理解webpack中的output.filename 和output.chunkFilename ?
  // http://react-china.org/t/webpack-output-filename-output-chunkfilename/2256/2
  chunkFilename: path.posix.join(ASSETSJS, '[name].outputAsyn.js'),
}

/** ********
 生产环境
 **********/

module.exports.build = {
  path         : option.build.assetsRoot,
  filename     : utils.assetsPath('js/[name].outputSync.js'),
  chunkFilename: utils.assetsPath('js/[name].outputAsyn.js'),
}

/** ********
 DLL环境
 **********/

const isDev = process.env.NODE_ENV === 'development'
const outputPath = isProduction ? path.resolve(process.cwd(), 'commonDll/production') : path.resolve(process.cwd(), 'commonDll/development')

module.exports.dll = {
  path    : outputPath,
  filename: '[name].js',
  /*
   * output.library
   * [name]_[hash]将会定义为 window.moment_1ab8e7beaa7091def553
   * 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与插件DllPlugin的name参数保持一致
   */
  library : '[name]',
}
