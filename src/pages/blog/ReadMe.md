##Vue JSON 博客(AcyOrt/Vue/Vuex/Webpack)
- [Issues](https://github.com/LoeiFy/Recordum/issues/18)
- [Source](https://github.com/acyortjs/aksdj4)
- [Demo](http://aksdj4.am0200.com/)

####项目简介
> 个人博客项目，采用的数据是自定义JS导出的，API通过webpack的express组合来达到Axois去加载博客数据。

####需求以及文件结构
* 博客主要分为菜单栏、复合响应式按钮、标题栏、文章列表页、文章详情页以及页脚
* 菜单栏分为所有文章列表页、文章分类页、文章标签页以及关于页
* 文章列表页中还设置了分页器，多页显示文章
* 文章详情页可通向文章分类页以及文章标签页

####技术栈
> vue + vue-router + vuex + axois + express + nodeJs(glob.sync)

####技术亮点
1. 通过webpack->dev-server->express，一一Mock本地JS文件，返回API接口以及数据
2. views + components 的文件分类结构
 - views 储存路由加载的页面
 - components 存储页面中的可复用组件
3. 响应式按钮，控制菜单栏的显示和隐藏以及回到主页导航
4. 分页器的设计

####Css
1. 通过 transform: translateY(-100%) 隐藏菜单栏
2. markdown的CSS样式

####Js
1. [rest-参数 ...](http://es6.ruanyifeng.com/#docs/function#rest-参数)

####vue
1. 监控数据变化 [watch](https://cn.vuejs.org/v2/api/#watch)
2. header.vue 中，toggle(e)，使用e来判断原生状态，比如 e.target.tagName != 'A' 时
3. 设置 Vue.config.devtools = true 来启动Chrome-F12-Vue调试
4. v-if 和 v-show 的[区别](https://cn.vuejs.org/v2/guide/conditional.html#lt-template-gt-中-v-if-条件组)

####vue-router
1. 滚动行为 [scrollBehavior](https://github.com/vuejs/vue-router/blob/next/examples/scroll-behavior/app.js) 
2. transition + router-view，通过transition使得路由页面的转场效果更加顺滑，要配合自定义的CSS过度样式来使用
3. 通过router-link直接跳转页面

####vuex
1. 此DEMO只做了简单的使用
2. 本地的JSON数据异步填充到Vuex-State

####Axois
1. 通过 Vue.use(plugin) 全局注册了 Vue.prototype.$load 实例方法，可直接全局调用 this.$load
2. [用 axios.all 同时处理多个并发请求](https://github.com/mzabriskie/axios)

####Issues
1. 从主站跳转到分站时，URL指向不合理
