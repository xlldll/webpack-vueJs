require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var webpackConfig = require('./webpack.build.conf')
var option = require('./option')

var spinner = ora('正在构建上线...')

spinner.start()

rm(path.join(option.build.assetsRoot, option.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('线上文件生成完毕.\n'))
    console.log(chalk.yellow(
      '  提示: 线上文件需要Apache服务器的根目录下预览.\n' +
      '  本地打开index.html文件可能不起作用.\n'
    ))
  })
})
