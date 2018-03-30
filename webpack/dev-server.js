require('./check-versions')()

// NodeJS
const opn = require('opn')
const path = require('path')
const fs = require('fs')

// Express
const express = require('express')
const app = express()

// Webpack
const glob = require('glob')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev.conf')
const option = require('./option')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(option.dev.env.NODE_ENV)
}
const proxyMiddleware = require('http-proxy-middleware')

// 调用配置,生成 compiler instance
const compiler = webpack(webpackConfig)
// https://webpack.js.org/guides/development/#webpack-dev-middleware
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  // Same as `output.filename` in most cases.
  filename: webpackConfig.output.filename,
  // filename: 'gajsfias',
  // isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  // '/'
  // Same as `output.publicPath` in most cases.
  publicPath: webpackConfig.output.publicPath,
  // publicPath:"/memory",
  compress: false,
  quiet: false,
  stats: {
    colors: true,
    chunks: false
  },
  overlay: {
    warnings: true,
    errors: true
  }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  noInfo: false,
  quiet: false
})

// default port where dev server listens for incoming traffic
// 3000
const port = process.env.PORT || option.dev.port
// automatically open browser, if not set will be false
// true
const autoOpenBrowser = !!option.dev.autoOpenBrowser

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
// {}
const proxyTable = option.dev.proxyTable

// force page reload when html-webpack-plugin template changes
// 监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
		// 发布事件 reload,这个事件会在dev-client.js中接受到，然后刷新
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var conf = proxyTable[ context ]
  if (typeof conf === 'string') {
    conf = { target: conf }
  }
  app.use(proxyMiddleware(conf.filter || context, conf))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output 注册中间件
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets 使用静态资源
// http://www.expressjs.com.cn/starter/static-files.html
//  path.posix.join('/','development') = '/development'
const staticPath = path.posix.join(option.dev.assetsPublicPath, option.dev.assetsSubDirectory)
// 不可以通过带有 "/static" 前缀的地址来访问 /static 目录下面的文件?
app.use(staticPath, express.static('public'))

// vuespa - components - News.vue
var mockDir = path.resolve(process.cwd(), 'src/mock')
fs.readdirSync(mockDir).forEach(function (file) {
  let mock = require(path.resolve(mockDir, file))
  app.use(mock.api, mock.response)
})

// src/pages/blog/plugin/api.js
// see http://www.expressjs.com.cn/4x/api.html#app.use
var mockBlogJson = glob.sync(path.resolve(process.cwd(), 'src/pages/blog/mock/**/*/*.js'))
// console.log(mockBlogJson);
mockBlogJson.forEach(function (file) {
  // console.log(file);
  let mock = require(file)
  app.use(mock.api, mock.response)
})



const url = 'http://localhost:' + port

var _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> 开发服务器创建中...')

devMiddleware.waitUntilValid(() => {
  console.log('devMiddleware 监听地址为 ' + url + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(url)
  }
  _resolve()
})

const server = app.listen(port, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('server 监听地址为 http://%s:%s', host, port)
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
