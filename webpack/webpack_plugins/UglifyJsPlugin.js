/**
 * Created by LinChuQiang.
 */

const UglifyJsParallelPlugin = require('webpack-parallel-uglify-plugin')
const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(TARGET, `: UglifyJsParallelPlugin正在压缩JS文件！`)
}

if (TARGET === 'build') {
  console.log(TARGET, `: UglifyJsParallelPlugin正在压缩JS文件！`)
  var compressJs = new UglifyJsParallelPlugin({
    cacheDir: '.UglifyJsCache/',
    uglifyJS: {
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }
  })
  module.exports = compressJs
}

if (TARGET === 'dlld') {
  console.log(TARGET, `: UglifyJsParallelPlugin正在压缩JS文件！`)
  let compressJs = new UglifyJsParallelPlugin({
    cacheDir: '.UglifyJsCache/',
    uglifyJS: {
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }
  })
  module.exports = compressJs
}

if (TARGET === 'dllp') {
  console.log(TARGET, `: UglifyJsParallelPlugin正在压缩JS文件！`)
  let compressJs = new UglifyJsParallelPlugin({
    cacheDir: '.UglifyJsCache/',
    uglifyJS: {
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }
  })
  module.exports = compressJs
}
