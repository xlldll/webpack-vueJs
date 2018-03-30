/**
	* Created by LinChuQiang.
	*/
const option = require('../option')
const utils = require('../utils')
const path = require('path')
const vueLoaderConfig = require('../vue-loader.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
/** ********
	初始环境
	**********/

const baseRules = [
	// 将指定js模块export的变量声明为全局变量
	// 有了ProvidePlugin为嘛还需要expose-loader？问得好，如果你所有的jQuery插件都是用webpack来加载的话，的确用ProvidePlugin就足够了；但总有那么些需求是只能用<script>来加载的。
	{
		// 此loader配置项的目标是NPM中的jquery
		// 使用内部的 require() 机制来查找模块的位置，但不会加载模块，只返回解析后的文件名。
		test: require.resolve('jquery'),
		// 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
		use : 'expose-loader?$!expose-loader?jQuery!expose-loader?jquery'
	},
	{
		test: /\.json$/,
		use : 'json-loader'
	},
	// JS加载器
	{
		test   : /\.js$/,
		include: [
			path.join(process.cwd(), './src')
		],
		exclude: function (paths) {
			// 路径中含有 node_modules 的就不去解析。
			var isNpmModule = !!paths.match(/node_modules/)
			return isNpmModule
		},
		use    : [
			{
				loader: 'happypack/loader?id=happypackBabelJs'
			}]
		// loader  : 'babel-loader'
		// loader: 'happypack/loader?id=happypackBabelJs'
	},
	// 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
	// 如下配置，将小于8192byte的图片转成base64码
	{
		test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		use : [
			{
				loader : 'url-loader',
				options: {
					limit: 8192,
					name : utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			}]
	},
	{
		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		use : [
			{
				loader : 'url-loader',
				options: {
					limit: 8192,
					name : utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	{
		test: /\.txt$/,
		use : 'raw-loader'
	}

	// 安装了 html-webpack-template 之后就不能用 html-loader 压缩处理了
	// https://github.com/jaketrent/html-webpack-template
	// https://github.com/webpack-contrib/html-loader
	/* {
		test: /\.html$/,
		include: [path.join(process.cwd(), './src/index.html')],
		use: [{
		loader: 'html-loader?attrs[]=img:src&attrs[]=img:data-src',
		options: {
		minimize: true
		}
		}]
		} */
	// https://github.com/okonet/ejs-loader
	// https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md
	/* {
		test: /\.ejs$/,
		use: [{ loader: 'ejs-loader' }]
		} */
	// mincss
	/* {
		test: /^((?!\.min\.css).)*\.css$/,
		include: [
		path.join(process.cwd(), './src/css')
		],
		use: extractStyleCSS.extract({
		use: {
		loader: 'css-loader',
		options: {
		modules: false,
		minimize: false,
		importLoaders:1,
		sourceMap: false

		}
		},
		fallback: 'style-loader'
		})
		}, */
]
module.exports.base = baseRules
/** ********
	开发环境
	**********/

// const devRules = utils.styleLoaders({ sourceMap: option.dev.cssSourceMap })
const devRules = []
devRules.push(
// vue加载器
// see https://vue-loader.vuejs.org/zh-cn/configurations/extract-css.html
{
	test: /\.vue$/,
	use : [
		{
			loader : 'vue-loader',
			options: {
				loaders: {
					css : [
						'vue-style-loader',
						{
							loader : 'css-loader',
							options: {
								modules  : false,
								minimize : false,
								sourceMap: false
							}
						}
					],
					scss: [
						'vue-style-loader',
						{
							loader : 'css-loader',
							options: {
								modules      : false,
								minimize     : false,
								importLoaders: 1,
								sourceMap    : false
							}
						},
						{
							loader : 'sass-loader',
							options: {
								sourceMap: false
							}
						}
					],
					sass: [
						'vue-style-loader',
						{
							loader : 'css-loader',
							options: {
								modules      : false,
								minimize     : false,
								importLoaders: 1,
								sourceMap    : false
							}
						},
						{
							loader : 'sass-loader',
							options: {
								sourceMap: false,
								indentedSyntax: true
							}
						}
					],
					stylus: [
						'vue-style-loader',
						{
							loader : 'css-loader',
							options: {
								modules      : false,
								minimize     : false,
								importLoaders: 1,
								sourceMap    : false
							}
						},
						{
							loader : 'stylus-loader',
							options: {
								sourceMap: false
							}
						}
					],
					styl: [
						'vue-style-loader',
						{
							loader : 'css-loader',
							options: {
								modules      : false,
								minimize     : false,
								importLoaders: 1,
								sourceMap    : false
							}
						},
						{
							loader : 'stylus-loader',
							options: {
								sourceMap: false
							}
						}
					],
					less: [
						'vue-style-loader',
						{
							loader : 'css-loader',
							options: {
								modules      : false,
								minimize     : false,
								importLoaders: 1,
								sourceMap    : false
							}
						},
						{
							loader : 'less-loader',
							options: {
								sourceMap: false
							}
						}
					]
				}
			}
		}]
},
// CSS加载器
{
	// test: /\.css$/,
	test: /^((?!\.min\.css).)*\.css/,
	use : ['style-loader', 'css-loader']
},
// SCSS加载器
{
	test   : /\.scss$/,
	include: [
		path.join(process.cwd(), './src')
	],
	use    : [
		'style-loader',
		{
			loader : 'css-loader',
			options: {
				modules      : false,
				minimize     : false,
				importLoaders: 1,
				sourceMap    : false
			}
		},
		{
			loader : 'sass-loader',
			options: {
				sourceMap: false
			}
		}
	]
},
// SASS加载器
{
	test   : /\.sass/,
	include: [
		path.join(process.cwd(), './src')
	],
	use    : [
		'style-loader',
		{
			loader : 'css-loader',
			options: {
				modules      : false,
				minimize     : false,
				importLoaders: 1,
				sourceMap    : false
			}
		},
		{
			loader : 'sass-loader',
			options: {
				sourceMap: false,
				indentedSyntax: true
			}
		}
	]
},
// LESS加载器
{
	test: /\.less$/,
	use : [
		'style-loader',
		{
			loader : 'css-loader',
			options: {
				modules      : false,
				minimize     : false,
				importLoaders: 1,
				sourceMap    : false
			}
		},
		{
			loader : 'less-loader',
			options: {
				sourceMap: false
			}
		}
	]
},
// stylus加载器
{
	test: /\.(stylus|styl)$/,
	use : [
		'style-loader',
		{
			loader : 'css-loader',
			options: {
				modules      : false,
				minimize     : false,
				importLoaders: 1,
				sourceMap    : false
			}
		},
		{
			loader : 'stylus-loader',
			options: {
				sourceMap: false
			}
		}
	]
},
/* // stylus加载器
{
	test: /\.styl$/,
	use : [
		'style-loader',
		{
			loader : 'css-loader',
			options: {
				modules      : false,
				minimize     : false,
				importLoaders: 1,
				sourceMap    : false
			}
		},
		{
			loader : 'stylus-loader',
			options: {
				sourceMap: false
			}
		}
	]
}, */
// 已压缩过的.min.css不压缩
{
	test: /\.min\.css/,
	use : ['style-loader', 'css-loader']
}
)
module.exports.dev = devRules
/** ********
	生产环境
	**********/

const buildRules = []
buildRules.push(
// vue加载器
{
	test: /\.vue$/,
	use : [
		{
			loader : 'vue-loader',
			options: {
				loaders: {
					css : ExtractTextPlugin.extract({
						fallback: 'vue-style-loader',
						use     : {
							loader : 'css-loader',
							options: {
								modules  : false,
								minimize : false,
								sourceMap: false
							}
						}
					}),
					scss: ExtractTextPlugin.extract({
						fallback: 'vue-style-loader',
						use     : [
							{
								loader : 'css-loader',
								options: {
									modules      : false,
									minimize     : false,
									importLoaders: 1,
									sourceMap    : false
								}
							},
							{
								loader : 'sass-loader',
								options: {
									sourceMap: false
								}
							}
						]
					}),
					less: ExtractTextPlugin.extract({
						fallback: 'vue-style-loader',
						use     : [
							{
								loader : 'css-loader',
								options: {
									modules      : false,
									minimize     : false,
									importLoaders: 1,
									sourceMap    : false
								}
							},
							{
								loader : 'less-loader',
								options: {
									sourceMap: false
								}
							}
						]
					})
				}
			}
		}]
},
// CSS加载器
{
	// test: /\.css$/,
	test: /^((?!\.min\.css).)*\.css/,
	use : ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
},
// SCSS加载器
{
	test   : /\.scss$/,
	include: [
		path.join(process.cwd(), './src')
	],
	use    : ExtractTextPlugin.extract({
		use     : [
			{
				loader : 'css-loader',
				options: {
					modules      : false,
					minimize     : false,
					importLoaders: 1,
					sourceMap    : false
				}
			},
			{
				loader : 'sass-loader',
				options: {
					sourceMap: false
				}
			}
		],
		fallback: 'style-loader'
	})
},
// LESS加载器
{
	test: /\.less$/,
	use : ExtractTextPlugin.extract({
		use     : [
			{
				loader : 'css-loader',
				options: {
					modules      : false,
					minimize     : false,
					importLoaders: 1,
					sourceMap    : false
				}
			},
			{
				loader : 'less-loader',
				options: {
					sourceMap: false
				}
			}
		],
		fallback: 'style-loader'
	})
},
// 已压缩过的.min.css不压缩
{
	test: /\.min\.css/,
	use : ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use     : [
			{
				loader : 'css-loader',
				options: {
					minimize : false,
					sourceMap: false
				}
			}]
	})
}
)
module.exports.build = buildRules
/** ********
	DLL环境
	**********/

/* const dllRules = utils.styleLoaders({
 sourceMap: false,
 extract: true
 }) */
const dllRules = []
dllRules.push(
// vue加载器
// see https://vue-loader.vuejs.org/zh-cn/configurations/extract-css.html
{
	test: /\.vue$/,
	use : [
		{
			loader : 'vue-loader',
			options: {
				loaders: {
					css : ExtractTextPlugin.extract({
						fallback: 'vue-style-loader',
						use     : {
							loader : 'css-loader',
							options: {
								modules  : false,
								minimize : false,
								sourceMap: false
							}
						}
					}),
					scss: ExtractTextPlugin.extract({
						fallback: 'vue-style-loader',
						use     : [
							{
								loader : 'css-loader',
								options: {
									modules      : false,
									minimize     : false,
									importLoaders: 1,
									sourceMap    : false
								}
							},
							{
								loader : 'sass-loader',
								options: {
									sourceMap: false
								}
							}
						]
					}),
					less: ExtractTextPlugin.extract({
						fallback: 'vue-style-loader',
						use     : [
							{
								loader : 'css-loader',
								options: {
									modules      : false,
									minimize     : false,
									importLoaders: 1,
									sourceMap    : false
								}
							},
							{
								loader : 'less-loader',
								options: {
									sourceMap: false
								}
							}
						]
					})
				}
			}
		}]
},
// CSS加载器
{
	// test: /\.css$/,
	test   : /^((?!\.min\.css).)*\.css/,
	loaders: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
},
// SCSS加载器
{
	test   : /\.scss$/,
	include: [
		path.join(process.cwd(), './src')
	],
	use    : ExtractTextPlugin.extract({
		use     : [
			{
				loader : 'css-loader',
				options: {
					modules      : false,
					minimize     : false,
					importLoaders: 1,
					sourceMap    : false
				}
			},
			{
				loader : 'sass-loader',
				options: {
					sourceMap: false
				}
			}
		],
		fallback: 'style-loader'
	})
},
// LESS加载器
{
	test: /\.less$/,
	use : ExtractTextPlugin.extract({
		use     : [
			{
				loader : 'css-loader',
				options: {
					modules      : false,
					minimize     : false,
					importLoaders: 1,
					sourceMap    : false
				}
			},
			{
				loader : 'less-loader',
				options: {
					sourceMap: false
				}
			}
		],
		fallback: 'style-loader'
	})
},
// 已压缩过的.min.css不压缩
{
	test: /\.min\.css/,
	use : ExtractTextPlugin.extract({
		fallback: 'style-loader',
		// resolve-url-loader may be chained before sass-loader if necessary
		use     : [
			{
				loader : 'css-loader',
				options: {
					minimize : false,
					sourceMap: false
				}
			}]
	})
}
)
module.exports.dll = dllRules
