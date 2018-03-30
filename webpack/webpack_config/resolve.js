/**
 * Created by LinChuQiang.
 */

const option = require('../option')
const utils = require('../utils')
const isProduction = process.env.NODE_ENV === 'production'
// 配置模块如何解析
module.exports.base = {
	// 自动解析确定的扩展
	extensions: ['.js', '.vue', '.json', '.css', '.less', '.scss', '.sass', '.styl', ' '],
	// alias优先从resolve.modules中的node_modules下寻找
	alias     : {
		vue$ : 'vue/dist/vue.esm.js',
		vuex$: 'vuex/dist/vuex.esm.js',
		'@'  : utils.rootpath('src')
	},
	modules   : [
		'node_modules'
	],
	mainFields: ['browser', 'module', 'main']
}
module.exports.dev = {}
module.exports.build = {}
