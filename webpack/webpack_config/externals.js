/**
 * Created by LinChuQiang.
 */
const option = require('../option')
const utils = require('../utils')

const isProduction = process.env.NODE_ENV === 'production'

module.exports.base = {
  // 当某个js模块显式地调用var $ = require('jquery')的时候，就会把window.jQuery返回给它。
  /* 'jquery': 'window.jQuery', */
}
module.exports.dev = {}
module.exports.build = {}
