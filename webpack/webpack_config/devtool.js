/**
 * Created by LinChuQiang.
 */

const option = require('../option')

/** ********
 初始环境
 **********/

const baseSourceMap = ''
module.exports.base = baseSourceMap

/** ********
 开发环境
 **********/

const devSourceMap = '#inline-source-map'
module.exports.dev = devSourceMap

/** ********
 生产环境
 **********/

// cheap-module-eval-source-map is faster for development
const buildSourceMap = option.build.productionSourceMap ? '#cheap-source-map' : false
// const buildSourceMap = '#inline-source-map'
module.exports.build = buildSourceMap

/** ********
 DLL环境
 **********/

const dllSourceMap = '#source-map'
module.exports.dll = dllSourceMap
