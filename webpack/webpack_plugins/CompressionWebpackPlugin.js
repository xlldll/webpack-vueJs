/**
 * Created by LinChuQiang.
 */

const option = require('../option')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(`Running the pretest task!`)
}

if (TARGET === 'build') {
  console.log(`CompressionWebpackPlugin正在将.js|.css文件压缩为.gz文件！`)
  // 4.9 将资源文件压缩为.gz文件，并且根据客户端的需求按需加载
  var GzipCompress = new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: new RegExp(
      '\\.(' +
      option.build.productionGzipExtensions.join('|') +
      ')$'
    ),
    threshold: 10240,
    minRatio: 0.8
  })
  module.exports = GzipCompress
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}
