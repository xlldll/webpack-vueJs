/**
 * Created by LinChuQiang.
 */

var utils = require('../utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
const TARGET = process.env.npm_lifecycle_event

// 4.3 分离CSS
/*
 https://www.npmjs.com/package/extract-text-webpack-plugin
 It moves all the require("style.css")s in entry chunks into a separate single CSS file. So your styles are no longer inlined into the JS bundle, but separate in a CSS bundle file (styles.css).
 */

if (TARGET === 'dev') {
  console.log(`${TARGET}: ExtractTextPlugin正在分离CSS文件！`)
  let extractVueCSS = new ExtractTextPlugin({
    filename: utils.assetsPath('assets', 'css/[name].VueCSS.css'),
    allChunks: true
  })
  let extractVueSCSS = new ExtractTextPlugin({
    filename: utils.assetsPath('assets', 'css/[name].VueSCSS.css'),
    allChunks: false
  })
  let extractStyleCSS = new ExtractTextPlugin({
    filename: path.posix.join('assets', 'css/[name].StyleCSS.css'),
    allChunks: false
  })
  let extractStyleSCSS = new ExtractTextPlugin({
    filename: path.posix.join('assets', 'css/[name].StyleSCSS.css'),
    allChunks: false
  })
  var cssExtract = [
    new ExtractTextPlugin('assets/css/[name].css')
  ]
  module.exports = cssExtract
}

if (TARGET === 'build') {
  console.log(`${TARGET}: ExtractTextPlugin正在分离CSS文件！`)

  let cssExtract = [
    new ExtractTextPlugin('static/css/[name].css')
  ]
  module.exports = cssExtract
}

if (TARGET === 'dlld') {
  console.log(`${TARGET}: ExtractTextPlugin正在分离CSS文件！`)
  let cssExtract = [
    new ExtractTextPlugin('[name].css')
  ]
  module.exports = cssExtract
}

if (TARGET === 'dllp') {
  console.log(`${TARGET}: ExtractTextPlugin正在分离CSS文件！`)

  let cssExtract = [
    new ExtractTextPlugin('[name].css')
  ]
  module.exports = cssExtract
}
