// http://eslint.org/docs/user-guide/configuring
// vue项目配置eslint(附visio studio code配置)
// http://www.jianshu.com/p/c94db34e525b
module.exports = {
	// 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
	root         : true,
	// 对Babel解析器的包装使其与 ESLint 兼容。
	parser       : 'babel-eslint',
	parserOptions: {
		//指定ECMAScript支持的版本
		ecmaVersion: 6
	},
	globals      : {
		// Put things like jQuery, etc
		jQuery: true,
		$     : true,
	},
	//环境的全局变量
	//JavaScript有很多种运行环境，比如常见的有浏览器和Node.js，另外还有很多软件系统使用JavaScript作为其脚本引擎，比如PostgreSQL就支持使用JavaScript来编写存储引擎，而这些运行环境可能并不存在console这个对象。另外在浏览器环境下会有window对象，而Node.js下没有；在Node.js下会有process对象，而浏览器环境下没有。
	env          : {
		browser: true
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	// extends: "airbnb/legacy",
	// 扩展一个流行的风格指南，即 eslint-config-standard
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: [
		'standard'
	],
	// required to lint *.vue files
	// 允许使用第三方插件
	plugins: [
		//npm install --save-dev eslint-plugin-html
		// 此插件用来识别.html 和 .vue文件中的js代码
		'html',
		'vue',
		//让 eslint 支持 Flow Script 的全局注解等语法，同时你也要安装对应的 node 模块
		//http://zhenyong.site/2016/07/05/ESLint-in-Vue/
		'flow-vars',
		// standard风格的依赖包
		'standard',
		// standard风格的依赖包
		'promise'
	],
	// add your custom rules here
	// "规则名称":error级别系数。系数0为不提示(off)、1为警告(warn)、2为错误抛出(error)
	'rules': {
		'linebreak-style': 0,
		'no-new'         : 0,
		'no-tabs'        : 0,
		'key-spacing'    : 0,
		'indent'         : 0,
	}
}
