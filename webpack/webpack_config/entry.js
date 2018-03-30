/**
 * Created by LinChuQiang.
 */

const path = require('path')
const glob = require('glob')

const match = glob.sync(path.resolve(process.cwd(), 'src/pages/**/*/app.js'))

//console.log(`match:`, match)
//每个单页面的绝对路径入口
//match: [ 'C:/My/webpack2-VueJs/src/pages/blog/app.js','C:/My/webpack2-VueJs/src/pages/blogE/app.js',]

const chunks = []
//指定前半个路径
//const entryPath='E:/wamp64/www/VueJs_Demo_Github/src/'
const entryPath = 'C:/My/webpack-vueJs/src/'

//得到目录名
match.forEach(path => {
  const chunk = path.split(entryPath)[1].split('/app.js')[0]
  chunks.push(chunk)
})

//每个单页面的目录名
//console.log(`chunks:`, chunks)
//chunks: [ 'pages/blog','pages/blogE']

const entry = []
chunks.forEach((chunk, index) => {
  entry[chunk] = match[index]
})

//console.log(entry);
//[ 'pages/blog': 'C:/My/webpack2-VueJs/src/pages/blog/app.js','pages/blogE': 'C:/My/webpack2-VueJs/src/pages/blogE/app.js']

/** ********
 初始环境
 **********/

const baseEntry = {}

// Todo:整合entry入口
// app: ['webpack-hot-middleware/client?noInfo=true&reload=true','./src/main.js')]
// baseEntry.app = './src/main.js'

module.exports.base = baseEntry

/** ********
 开发环境
 **********/

const devEntry = {}

// entry节点对象的Key是别名，是与output中filename属性[name]关联的，因此想要生成什么样的路径，应该在entry的key中配置
// devEntry['bootstrapLib'] = ['jquery', './src/js/vendor/bootstrap/dist/js/bootstrap.min.js']

devEntry['index'] = './src/index.js'

//拼接各个单页面的路径
//devEntry['pages/data'] = path.resolve(process.cwd(), 'src/pages/data/app.js')
//devEntry['pages/blog'] = path.resolve(process.cwd(), 'src/pages/blog/app.js')
//devEntry['pages/cnode'] = path.resolve(process.cwd(), 'src/pages/cnode/app.js')
chunks.forEach((chunk, index) => {
  devEntry[chunk] = path.resolve(process.cwd(), 'src', chunk, 'app.js')
})
//console.log(`devEntry:`, devEntry)
//devEntry: { index: './src/index.js',
//  'pages/blog': 'C:\\My\\webpack2-VueJs\\src\\pages\\blog\\app.js',
//  'pages/blogE': 'C:\\My\\webpack2-VueJs\\src\\pages\\blogE\\app.js',]


// add hot-reload related code to entry chunks 热刷新
Object.keys(devEntry).forEach(function (name) {
  // 'pages/blog' : ["./webpack/dev-client", 'C:\\My\\webpack2-VueJs\\src\\pages\\blog\\app.js']
  devEntry[name] = ['./webpack/dev-client'].concat(devEntry[name])
})

//console.log(`devEntry:`, devEntry)
//devEntry: { index: [ './webpack/dev-client', './src/index.js' ],
//  'pages/blog':
//   [ './webpack/dev-client',
//     'C:\\My\\webpack2-VueJs\\src\\pages\\blog\\app.js' ]}

module.exports.dev = devEntry


/** ********
 生产环境
 **********/

const buildEntry = {}
buildEntry['index'] = './src/index.js'

chunks.forEach((chunk, index) => {
  'use strict'
  buildEntry[chunk] = path.resolve(process.cwd(), 'src', chunk, 'app.js')
})

module.exports.build = buildEntry

/** ********
 DLL环境
 **********/

const dllEntry = {
  // 1.通过dll/vue_dll.js中的import/from来读取指定插件
  /*
   import Vue from 'vue/dist/vue.esm.js'
   import VueRouter from 'vue-router'
   import VueResource from 'vue-resource'
   import Vuex from 'vuex/dist/vuex.esm.js';
   */
  // vue_dll: [path.join(process.cwd(), "dll", "vue_dll.js")],
  // 2.注意config中的reslove已经指定vue以及vuex特定版本
  vue_dll         : ['vue', 'vue-resource', 'vue-router', 'vuex'],
  // vue_dll: ['vue/dist/vue.runtime.esm.js', 'vue-resource', 'vue-router', 'vuex'],
  // bootstrap_dll: ['./src/js/vendor/bootstrap/dist/js/bootstrap.js', './src/js/vendor/bootstrap/dist/css/bootstrap.css']
  bootstrapCss_dll: ['bootstrap/dist/css/bootstrap.min.css'],
  // jquery_dll: ['jquery'],
}
module.exports.dll = dllEntry
