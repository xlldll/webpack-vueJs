// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
module.exports = {
	// 开发环境选项
	dev  : {
		dll                 : {
			// DllReferencePlugin为静态资源单独打包
			directory           : 'commonDll/development',
			// jqueryManifest: 'jquery_dll-manifest.json',
			bootstrapCssManifest: 'bootstrapCss_dll-manifest.json',
			vueManifest         : 'vue_dll-manifest.json',
			// AddAssetHtmlPlugin为html-webpack-plugin生成的HTML添加JS或CSS资源路径！
			// jquery: 'jquery_dll.dllBundle.js',
			// bootstrap: 'bootstrap_dll.dllBundle.js',
			bootstrapCss        : 'bootstrapCss_dll.css',
			vue                 : 'vue_dll.js',
			dir                 : '/assets',
			outputPath          : 'lib',  // 生成目录
			publicPath          : 'lib'   // 注入地址
		},
		env                 : require('./dev.env'),
		port                : 4001,
		autoOpenBrowser     : true,
		index               : path.normalize('E:\\wamp64\\www\\VueJs_Demo_Github\\index.html'),
		// assetsRoot 也就是  E:\\wamp64\\www\\VueJs_Demo_Github 目录
		assetsRoot          : process.cwd(),
		assetsSubDirectory  : 'assets',
		assetsJsDir         : 'assets/js/',
		assetsPublicPath    : '/',
		proxyTable          : {
			'/v4': {
				target      : 'http://m.maizuo.com',
				changeOrigin: true,
				pathRewrite : {
					'^/v4': '/v4'
				}
			},
			'/api': {
				target      : 'http://localhost:3009/api',
				changeOrigin: true,
				pathRewrite : {
					'^/api': ''
				}
			}
		},
		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap        : false,
		bundleAnalyzerReport: true
	},
	// 发布环境选项
	build: {
		dll                     : {
			// DllReferencePlugin为静态资源单独打包
			directory           : 'commonDll/production',
			// jqueryManifest: 'jquery_dll-manifest.json',
			bootstrapCssManifest: 'bootstrapCss_dll-manifest.json',
			vueManifest         : 'vue_dll-manifest.json',
			// AddAssetHtmlPlugin为html-webpack-plugin生成的HTML添加JS或CSS资源路径！
			// jquery: 'jquery_dll.dllBundle.js',
			// bootstrap: 'bootstrap_dll.dllBundle.js',
			bootstrapCss        : 'bootstrapCss_dll.css',
			vue                 : 'vue_dll.js',
			dir                 : '/static',
			outputPath          : 'lib',  // 生成目录
			publicPath          : 'lib'   // 注入地址
		},
		// 也可改为 cross-env 控制NODE_ENV
		env                     : require('./prod.env'),
		// 转移到本地PHP+APACHE+SQL服务器文件夹中
		index                   : path.normalize('E:\\wamp64\\www\\Wamp-Webpack2Vue\\index.html'),
		assetsRoot              : path.normalize('E:\\wamp64\\www\\Wamp-Webpack2Vue'),
		assetsSubDirectory      : 'static',
		assetsJsDir             : 'static/js/',
		assetsPublicPath        : '/',
		// devtool.js
		productionSourceMap     : false,
		// 压缩
		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip          : false,
		productionGzipExtensions: ['js', 'css'],
		compressCss             : false,
		compressJs              : false,
		// 打包结果分析
		bundleAnalyzerReport    : false,
		Visualizer              : true
	},
	// DLL环境选项
	dlld : {
		compressJs: false
	},
	dllp : {
		compressJs: false
	}
}

