// https://github.com/michael-ciniawsky/postcss-load-config
// When using a function (postcss.config.js or .postcssrc.js), it is possible to pass context to postcss-load-config, which will be evaluated while loading your config.
// By default ctx.env (process.env.NODE_ENV) and ctx.cwd (process.cwd()) are available.

// 第一个参数为Context (ctx)，它有三个属性 env='development' file=loader.resourcePath	 options={}
// https://www.npmjs.com/package/postcss-loader
module.exports = ({ env, file, options }) => ({
  sourceMap: env === 'development' ? 'inline' : false,
  plugins: [
    // https://www.npmjs.com/package/postcss-svgo
    // Optimise inline SVG with PostCSS.
    require('postcss-svgo')({
      plugins: [{
        removeDoctype: false
      }, {
        removeComments: false
      }, {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      }, {
        convertColors: {
          names2hex: false,
          rgb2hex: false
        }
      }]
    }),
    // https://www.npmjs.com/package/autoprefixer
    /*require('autoprefixer')({
      'browserslist': [
        'not ie <= 8'
      ]
    }),*/
    require('postcss-import')(),
    require('postcss-cssnext')()

  ]
})
