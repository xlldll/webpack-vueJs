var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

// http://www.fx114.net/qa-74-162757.aspx 配置真实以及测试接口
// 把 prod.env 能用的合并到 dev 里面去，其实就是一种配置继承，这样写可以方便修改和管理配置
module.exports = merge(prodEnv, {
  // NODE_ENV: '"development"',
  API_ROOT: '"//127.0.0.1:80/"'
})
