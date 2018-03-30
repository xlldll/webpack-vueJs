var path = require('path')
var option = require('./option')
/*
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractVueCSS = new ExtractTextPlugin();
const extractStyleCSS = new ExtractTextPlugin();
*/
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractVueCSS = new ExtractTextPlugin({})
const extractStyleCSS = new ExtractTextPlugin({})

const isProduction = process.env.NODE_ENV === 'production'

exports.rootpath = function (dir) {
  return path.join(__dirname, '..', dir)
}
// see https://github.com/vuejs-templates/webpack/blob/master/template/build/utils.js
// 生成 E:\wamp64\www\Webpack2Vue_Demo\static\_path 形式的目录
exports.assetsPath = function (_path) {
  // 都是'static'
  var assetsSubDirectory = isProduction ? option.build.assetsSubDirectory : option.dev.assetsSubDirectory
  // posix线程机制
  return path.posix.join(assetsSubDirectory, _path)
}

// 解析.vue文件内的各种css格式
exports.vueCssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      modules: false,
      minimize: isProduction,
      sourceMap: options.sourceMap
    }
  }

  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]

    loaders.push({loader: 'postcss-loader'})

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    if (options.extract) {
      return extractVueCSS.extract({
        fallback: 'vue-style-loader',
        use: loaders
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  return {
    css: generateLoaders(),
    scss: generateLoaders('sass')
    // https://vue-loader.vuejs.org/zh-cn/features/postcss.html
    /* postcss: {
     options: {
     // use sugarss parser
     parser: 'sugarss',
     map   : 'inline'
     },
     plugins: [
     //https://www.npmjs.com/package/autoprefixer
     require('autoprefixer')({
     'browserslist': [
     'not ie <= 8'
     ]
     })
     ]
     } */
  }
}

// 解析.vue文件外的各种css格式
exports.cssLoaders = function (options) {
  /*
   *{
   * sourceMap: isProduction ? true : false,
   * extract: isProduction}
   */
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      modules: false,
      minimize: isProduction,
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    /* 对数组进行对象属性的解构
     let arr = [1, 2, 3];
     let {0 : first, [arr.length - 1] : last} = arr;
     first // 1 last // 3
     */
    var loaders = [cssLoader]

    loaders.push({
      loader: 'postcss-loader'
      /* options: {
       map:'inline',
       plugins: () => [
         require('autoprefixer')({
           'browserslist': [
           'not ie <= 8'
           ]
         })
       ]
       } */
    })

    /*
     loaders=[{
     loader  : 'css-loader',
     options : {
     minimize  : process.env.NODE_ENV === 'production',
     sourceMap : options.sourceMap
     },
     {loader: 'postcss-loader'}
     ]
     * */
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    /*
     loaders=[
     {loader: 'vue-style-loader'},
     {
     loader  : 'css-loader',
     options : {
     minimize  : process.env.NODE_ENV === 'production',
     sourceMap : options.sourceMap
     },
     {loader: 'postcss-loader'},
     {
     loader  : 'sass-loader',
     options :{options.sourceMap}
     }
     ]
     */

    // Extract CSS when that option is specified
    // (which is the case during production build)

    if (options.extract) {
      return ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: loaders
      })
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {indentedSyntax: true}),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
// options={ sourceMap:config.dev.cssSourceMap }={ sourceMap:false }
// 生成标准cssWebpack格式

/*
//无分离
{
 test: /\.scss$/,
 use: [
   'style-loader',
   {loader: 'css-loader', options: { importLoaders: 2 }},
   {loader: 'postcss-loader', options: { plugins: () => [ require('autoprefixer') ] }}
   'sass-loader'
 ]
}
//有分离
use:ExtractTextPlugin.extract({
 fallback: 'style-loader',
 use     : [
   {loader: 'css-loader', options: { importLoaders: 2 }},
   {loader: 'postcss-loader', options: { plugins: () => [ require('autoprefixer') ] }},
   'sass-loader'
 ]
})

 */

exports.styleLoaders = function (options) {
  var output = []

  var loaders = exports.cssLoaders(options)

  for (var extension in loaders) {
    var loader = loaders[extension]
    if (extension === 'css') {
      output.push({
        // 没压缩过的.css压缩
        test: /^((?!\.min\.css).)*\.css/,
        use: loader
      })
    } else {
      output.push({
        test: new RegExp('\\.' + extension + '$'),
        use: loader
      })
    }
  }
  output.push({
    // 已压缩过的.min.css不压缩
    test: /\.min\.css/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      // resolve-url-loader may be chained before sass-loader if necessary
      use: [ {
        loader: 'css-loader',
        options: {
          minimize: false,
          sourceMap: false
        }
      }]
    })
    /* use     : [
      {
        loader : 'style-loader',
      },
      {
        loader : 'css-loader',
        options: {
          minimize     : false,
          sourceMap    : false
        }
      }
    ] */
  })
  return output
}
