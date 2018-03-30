/**
 * Created by LinChuQiang.
 */

/*
 * 1.dll预编译出来的模块可以作为静态资源链接库可被重复使用
 * 2.dll资源能有效地解决资源循环依赖的问题
 * 3.由于externals的配置项需要对每个依赖库进行逐个定制，所以每次增加一个组件都需要手动修改，略微繁琐，而通过dllPlugin则能完全通过配置读取，减少维护的成本
 * 4.配置dllPlugin对应资源表并编译文件
 * 5. Dynamically Linked Library https://robertknight.github.io/posts/webpack-dll-plugins/
 * */
const webpackConfig = {
  devtool: require('./webpack_config/devtool.js').dll,
  entry: require('./webpack_config/entry.js').dll,
  output: require('./webpack_config/output.js').dll,
  module: {
    rules: require('./webpack_config/module.js').dll
  },
  plugins: require('./webpack_config/plugins.js').dll
}

webpackConfig.entry = require('./webpack_config/entry.js').dll

console.log('devtool: ', webpackConfig.devtool)
console.log('entry: ', webpackConfig.entry)
console.log('output: ', webpackConfig.output)
console.log('rules: ', webpackConfig.module.rules)
console.log('plugins: ', webpackConfig.plugins)

module.exports = webpackConfig
