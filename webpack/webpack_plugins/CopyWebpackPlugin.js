/**
 * Created by LinChuQiang.
 */

const path = require('path')
const option = require('../option')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event

// 复制自定义静态资源
/*
* https://github.com/kevlened/copy-webpack-plugin
*
* path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
* 从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径
* 如果当前工作目录为 /home/myself/node，
* 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
* webpack2_Course/static
* 相对于本目录解析地址
*
* */

if (TARGET === 'dev') {
  console.log(TARGET, `: CopyWebpackPlugin正在复制自定义静态资源文件！`)
  let copy = new CopyWebpackPlugin([
    /* {
      context: path.resolve(process.cwd(), 'commonDll/development/assets/'),
      from: '*',
      to: path.resolve(option.dev.assetsRoot, 'assets')
    }, */
    {from: 'node_modules/bootstrap/dist/css', to: 'http://localhost:3333/development/assets/css/'},
    {from: 'node_modules/bootstrap/dist/fonts', to: 'http://localhost:3333/development/assets/fonts/'}
  ])
  module.exports = copy
}

if (TARGET === 'build') {
  console.log(TARGET, `: CopyWebpackPlugin正在复制自定义静态资源文件！`)
  // 复制 webpack2_Course的 static 文件夹下的资源到 to中的地址
  let copy = new CopyWebpackPlugin([
    {
      context: path.resolve(process.cwd(), 'src/static'),
      from: '**/*',
      // to: E:\\wamp64\\www\\Wamp-Webpack2Vue\\static
      to: path.resolve(option.build.assetsRoot, 'static')
    },
    {
      // static哪里定义的？option:assetsSubDirectory
      context: path.resolve(process.cwd(), 'commonDll/production/static/fonts/'),
      from: '*',
      to: path.resolve(option.build.assetsRoot, 'static', 'fonts')
    },
    {
      context: path.resolve(process.cwd(), 'commonDll/production/static/img/'),
      from: '*',
      to: path.resolve(option.build.assetsRoot, 'static', 'img')
    }
  ])
  module.exports = copy
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}
