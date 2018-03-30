var option = require('../option')
var path = require('path')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event

/*
  为html-webpack-plugin生成的HTML添加JS或CSS资源路径
  官方关于此插件的说明：https://www.npmjs.com/package/add-asset-html-webpack-plugin

  filepath :The absolute path of the file you want to add to the compilation, and resulting HTML file.
  includeSourcemap :If true, will add filepath + '.map' to the compilation as well.
  hash :?5aeaaf2149bd220e3dd4
  outputPath :在服务器上的目录 assets/lib
  publicPath :在HTML页面为 script or link tag 注入的地址，默认与outputPath相同
  includeSourcemap default: true
  hash default: false
  typeOfAsset default: js
*/

var htmlAsset
if (TARGET === 'dev') {
  console.log(`${TARGET}: AddAssetHtmlPlugin正在为html-webpack-plugin生成的HTML添加JS或CSS资源路径！`)
  const FILE_PATH = option.dev.dll.directory
  // '\assets\lib'
  const SERVER_PATH = path.join(option.dev.dll.dir, option.dev.dll.publicPath)
  // '/assets/lib'
  const HTML_SRC = path.posix.join(option.dev.dll.dir, option.dev.dll.publicPath)

  htmlAsset = new AddAssetHtmlPlugin([
    {
      filepath: path.resolve(process.cwd(), FILE_PATH, option.dev.dll.bootstrapCss),
      // Todo: 用 filter 选项来指定多个入口的 bootstrapCss_dll.css 失败
      // 看源码解决，filter 的选项应该替换为 files
      files: ['index.html', 'pages/data/app.html', 'pages/rubychina/app.html'],
      outputPath: SERVER_PATH,
      publicPath: HTML_SRC,
      includeSourcemap: false,
      typeOfAsset: 'css'
    },
    /* {
      filepath: path.resolve(process.cwd(), FILE_PATH, option.build.dll.jquery),
      outputPath: SERVER_PATH,
      publicPath: HTML_SRC,
      includeSourcemap: true
    },
    {
      filepath: path.resolve(process.cwd(), FILE_PATH, option.build.dll.bootstrap),
      outputPath: SERVER_PATH,
      publicPath: HTML_SRC,
      includeSourcemap: true
    }, */
    {
      filepath: path.resolve(process.cwd(), FILE_PATH, option.dev.dll.vue),
      outputPath: SERVER_PATH,
      publicPath: HTML_SRC,
      includeSourcemap: false
    }
  ])
  module.exports = htmlAsset
}

if (TARGET === 'build') {
  console.log(`${TARGET}: AddAssetHtmlPlugin正在为html-webpack-plugin生成的HTML添加JS或CSS资源路径！`)
  const FILE_PATH = option.build.dll.directory
  const SERVER_PATH = path.join(option.build.dll.dir, option.build.dll.publicPath)
  const HTML_SRC = path.posix.join(option.build.dll.dir, option.build.dll.publicPath)
  htmlAsset = new AddAssetHtmlPlugin([
    {
      filepath: path.resolve(process.cwd(), FILE_PATH, option.build.dll.bootstrapCss),
      files: ['index.html', 'pages/data/app.html'],
      includeSourcemap: false,
      hash: false,
      outputPath: SERVER_PATH,
      publicPath: HTML_SRC,
      typeOfAsset: 'css'
    },
    {
      filepath: path.resolve(process.cwd(), FILE_PATH, option.build.dll.vue),
      includeSourcemap: false,
      hash: false,
      outputPath: SERVER_PATH,
      publicPath: HTML_SRC
    }
  ])
  module.exports = htmlAsset
}

if (TARGET === 'test') {
  console.log(`${TARGET}: AddAssetHtmlPlugin正在为html-webpack-plugin生成的HTML添加JS或CSS资源路径！`)
}
