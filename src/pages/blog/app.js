import Vue from 'vue'

// 导入路由
import router from './router/index'
// 导入数据
import vuexStore from './store/index'
// 导入插件
import plugin from './plugin/index'

// 导入组件
import app from './app.vue'

// 导入样式
require('./app.css')

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(plugin)

new Vue({
  router,
  store: vuexStore,
  render: h => h(app)
}).$mount('#app')
