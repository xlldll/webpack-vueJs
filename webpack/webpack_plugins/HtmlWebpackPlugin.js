/**
 * Created by LinChuQiang.
 */

const glob = require('glob')
const path = require('path')
const option = require('../option')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// https://www.npmjs.com/package/html-webpack-exclude-assets-plugin
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
// https://www.npmjs.com/package/html-webpack-include-assets-plugin
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const TARGET = process.env.npm_lifecycle_event

// 插件说明
/*
 * 生成HTML
 * see https://github.com/ampedandwired/html-webpack-plugin
 *
 * filename: The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html).
 * 渲染输出html文件名，与 output.path 结合生成该HTML的输出位置，绝对路径
 * filename: 'pages/data/app.html'
 *
 * inject: true
 * 向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同。
 * 1、true或者body：所有JavaScript资源插入到body元素的底部
 * 2、head: 所有JavaScript资源插入到head元素中
 * 3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
 *
 * template 可以前置加载器，告知要渲染的模版文件
 * template: 'html-loader?attrs[]=img:src&attrs[]=img:data-src!' + path.resolve(process.cwd(), 'src/index.ejs')
 *
 * 为html传参
 * https://github.com/jaketrent/html-webpack-template
 *
 * HTMLminify more options:
 * https://github.com/kangax/html-minifier#options-quick-reference
 *
 * 允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中
 * 在配置多个页面时，每个页面注入的thunk应该是不相同的，需要通过该配置为不同页面注入不同的thunk
 * 从CommonsChunkPlugin选项的 name 以及 entry 入口的 key 打包（output）出来的文件（[name].outputSync.js）中选取需要加载的公共模块
 * chunks: ['entry.commonChunk','bootstrapLib','bootstrap.commonChunk','index']
 *
 *
 * necessary to consistently work with multiple chunks via CommonsChunkPlugin
 * Allows to control how chunks should be sorted before they are included to the html.
 * chunksSortMode: 'dependency'
 * 关于公共模块的加载顺序解决方案
 * 参考 https://github.com/jantimon/html-webpack-plugin/issues/481
 * chunksSortMode: function (chunk1, chunk2) {
 // 自定义JS排序
 var order = ['bootstrapLib','bootstrap.commonChunk','entry.commonChunk','index',];
 var order1 = order.indexOf(chunk1.names[0]);
 var order2 = order.indexOf(chunk2.names[0]);
 // 若 order1 小于 order2，在排序后的数组中 order1 应该出现在 order2 之前
 return order1 - order2;
 * },
 */

var html = []
// 自动生成 pages/**/* 的入口路径
var htmlConf
var match = glob.sync(path.resolve(process.cwd(), 'src/pages/**/*/app.ejs'))
// match:  [ 'E:/wamp64/www/VueJs_Demo_Github/src/pages/data/app.ejs' ]
// console.log('match: ', match)
var chunks = []
//指定前半个路径
const entryPath = 'C:/My/webpack-vueJs/src/'

match.forEach(path => {
  var chunk = path.split(entryPath)[1].split('/app.ejs')[0]
  chunks.push(chunk)
})
// console.log('chunks: ', chunks)

if (TARGET === 'dev') {
  console.log(TARGET, `: HtmlWebpackPlugin正在生成HTML！`)
  html = [
    // 生成根目录下的入口HTML
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(process.cwd(), 'src/index.ejs'),
      inject: true,
      minify: false,
      excludeChunks: chunks,
      title: '根目录下的入口HTML',
      mobile: true,
      links: [
        'https://fonts.googleapis.com/css?family=Roboto',
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        }
      ],
      googleAnalytics: {
        trackingId: 'UA-XXXX-XX',
        pageViewOnLoad: true
      },
      devServer: 3000,
      appMountId: 'container',
      window: {
        env: {
          apiHost: 'http://myapi.com/api/v1'
        }
      }
    })
    /* new HtmlWebpackPlugin({
     title: 'app入口文件',
     filename: 'pages/data/app.html',
     template: path.resolve(process.cwd(), 'src/pages/data/app.ejs'),
     inject: true,
     showErrors: true,
     minify: false,
     excludeChunks:['index']
     }) */
  ]

  chunks.forEach(chunk => {
    const filename = chunk + '/app.html'
    // pages/data
    // console.log('filename: ', chunk)
    const excludeIndex = ['index']
    const ck = chunks.filter(x => x !== chunk)
    const excludechunks = excludeIndex.concat(ck)
    // console.log(excludechunks);
    htmlConf = {
      title: filename,
      filename: filename,
      template: path.resolve(process.cwd(), 'src', chunk, 'app.ejs'),
      inject: true,
      showErrors: true,
      minify: false,
      excludeChunks: excludechunks,
      hash: process.env.NODE_ENV === 'production'
      // Todo:excludeAssets 无效
      // excludeAssets: [/bootstrapCss_dll.css/]
      // excludeAssets: ['/assets/lib/bootstrapCss_dll.css']
    }
    html.push(new HtmlWebpackPlugin(htmlConf))
  })
  // html.push(new HtmlWebpackExcludeAssetsPlugin())
  // Todo:includeAssets 无效
  /* html.push( new HtmlWebpackIncludeAssetsPlugin({
    files: [path.resolve(process.cwd(), 'src/index.html')],
    assets: ['/assets/lib/bootstrapCss_dll.css'],
    append: true
  })) */
  module.exports = html
}
if (TARGET === 'build') {
  console.log(TARGET, `: HtmlWebpackPlugin正在生成HTML！`)
  html = [
    // 生成根目录下的入口HTML
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(process.cwd(), 'src/index.ejs'),
      inject: true,
      minify: false,
      excludeChunks: chunks,
      title: '根目录下的入口HTML',
      mobile: true,
      links: [
        'https://fonts.googleapis.com/css?family=Roboto',
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        }
      ],
      googleAnalytics: {
        trackingId: 'UA-XXXX-XX',
        pageViewOnLoad: true
      },
      devServer: 3000,
      appMountId: 'container',
      window: {
        env: {
          apiHost: 'http://myapi.com/api/v1'
        }
      }
    })
  ]
  chunks.forEach(chunk => {
    const filename = chunk + '/app.html'
    const excludeIndex = ['index']
    const ck = chunks.filter(x => x !== chunk)
    const excludechunks = excludeIndex.concat(ck)
    // console.log(excludechunks);
    htmlConf = {
      title: filename,
      filename: filename,
      template: path.resolve(process.cwd(), 'src', chunk, 'app.ejs'),
      inject: true,
      showErrors: true,
      minify: false,
      excludeChunks: excludechunks,
      hash: process.env.NODE_ENV === 'production'
    }
    html.push(new HtmlWebpackPlugin(htmlConf))
  })

  module.exports = html
}

if (TARGET === 'test') {
  console.log(TARGET, `: HtmlWebpackPlugin正在生成HTML！`)
}
