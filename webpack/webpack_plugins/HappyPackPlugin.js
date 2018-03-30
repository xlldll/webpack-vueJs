/**
 * Created by LinChuQiang.
 */

const os = require('os')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})

const TARGET = process.env.npm_lifecycle_event

// .babelrc http://babeljs.io/docs/plugins/#pluginprese ts-options
// HappyPack https://zach.codes/three-webpack-2-speed-improvements/
var happyPack = [
  new HappyPack({
    id: 'happypackBabelJs',
    loaders: [
      {
        loader: 'babel-loader',
        options: {
          'cacheDirectory': true
        }
      }
    ],
    threads: 4,
    threadPool: happyThreadPool,
    debug: true,
    cache: true,
    verbose: true
  })
]
if (TARGET === 'dev') {
  console.log(`${TARGET}: HappyPack多线程处理！`)
}

if (TARGET === 'build') {
  console.log(`${TARGET}: HappyPack多线程处理！`)
}

if (TARGET === 'test') {
  console.log(`${TARGET}: HappyPack多线程处理！`)
}

module.exports = happyPack
