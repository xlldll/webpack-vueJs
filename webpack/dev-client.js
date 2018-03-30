/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

// 在entry入口中调用
hotClient.subscribe(function (event) {
	// 订阅事件，当 event.action === 'reload' 时执行页面刷新
  if (event.action === 'reload') {
    window.location.reload()
  }
})
