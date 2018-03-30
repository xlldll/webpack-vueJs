var utils = require('./utils')
var option = require('./option')

var isProduction = process.env.NODE_ENV === 'production'

// 参考地址：https://vue-loader.vuejs.org/zh-cn/configurations/pre-processors.html
module.exports = {
  loaders: utils.vueCssLoaders({
    sourceMap: isProduction ? option.build.productionSourceMap : option.dev.cssSourceMap,
    // extract: isProduction
    extract: isProduction
  })
  /*
  loaders: {
    scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
    postcss: {
     plugins: [...], // list of plugins
     options: {
      parser: sugarss // use sugarss parser
     }
    }
  }
  */
}

	/* 解析.vue文件内的各种css格式
	loaders:{
	 css     : [
		{loader  : 'vue-style-loader',},
		{loader  : 'css-loader',
		 options : {
			 minimize  : process.env.NODE_ENV === 'production',
			 sourceMap : options.sourceMap
		 }
		}
	 ],
	 postcss : generateLoaders(),
	 less    : generateLoaders( 'less' ),
	 sass    : generateLoaders( 'sass',{ indentedSyntax : true } ),
	 scss    : [
		{loader  : 'vue-style-loader',}
		{loader  : 'css-loader',
		 options : {
				minimize  : process.env.NODE_ENV === 'production',
				sourceMap : options.sourceMap
		 }
		},
		{loader  : 'sass-loader',
		 options :{options.sourceMap}
	  }
	 ],
	 stylus  : generateLoaders( 'stylus' ),
	 styl    : generateLoaders( 'stylus' )
	}
	* */
