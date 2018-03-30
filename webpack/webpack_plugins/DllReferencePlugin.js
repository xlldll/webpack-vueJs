/**
 * Created by LinChuQiang.
 */

var option = require('../option')
var webpack = require('webpack')
var path = require('path')

const TARGET = process.env.npm_lifecycle_event
var jsLib
if (TARGET === 'dev') {
  console.log(`${TARGET}: DllReferencePlugin正在为静态资源单独打包！`)
  const DIR = option.dev.dll.directory
  jsLib = [
    /* new webpack.DllReferencePlugin({
      manifest: require(path.resolve(DIR, option.dev.dll.jqueryManifest))
    }), */
    new webpack.DllReferencePlugin({
      // context: process.cwd(),
      manifest: require(path.resolve(DIR, option.dev.dll.bootstrapCssManifest)),
      name: 'bootstrapCss_dll'
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(DIR, option.dev.dll.vueManifest)),
      name: 'vue_dll'
    })
  ]
  module.exports = jsLib
}

if (TARGET === 'build') {
  console.log(`${TARGET}: DllReferencePlugin正在为静态资源单独打包！`)
  const DIR = option.build.dll.directory
  jsLib = [
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(DIR, option.build.dll.bootstrapCssManifest)),
      name: 'bootstrapCss_dll'
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(DIR, option.build.dll.vueManifest)),
      name: 'vue_dll'
    })
  ]
  module.exports = jsLib
}

if (TARGET === 'test') {
  console.log(`${TARGET}: DllReferencePlugin正在为静态资源单独打包！`)
}
