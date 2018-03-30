import Vue from 'vue'
import VueRouter from 'vue-router'
// TODO-vueRouter:没有进行异步读取组件
import Home from '../views/home.vue'
import Post from '../views/post.vue'
import Category from '../views/category.vue'
import Tag from '../views/tag.vue'
import Archives from '../views/archives.vue'
import Categories from '../views/categories.vue'
import Tags from '../views/tags.vue'
import Page from '../views/page.vue'

const routes = [
	{path: '/', component: Home, name: 'home'},
	{path: '/page/:page', component: Home, name: 'homePage'},
	{path: '/posts/:id', component: Post, name: 'post'},
	{
		path     : '/categories/:id',
		component: Category,
		name     : 'category',
		children : [
			{path: ':page', component: Category}
		]
	},
	{
		path     : '/tags/:id',
		component: Tag,
		name     : 'tag',
		children : [
			{path: ':page', component: Tag}
		]
	},
	// 主页面导航 menu.vue
	{path: '/archives', component: Archives, name: 'archives'},
	{path: '/archives/:page', component: Archives, name: 'archivesPage'},
	{path: '/categories', component: Categories, name: 'categories'},
	{path: '/tags', component: Tags, name: 'tags'},
	{path: '/pages/:name', component: Page, name: 'page'},
	{path: '*', redirect: '/'}
]
// TODO-vuerouter:scrollBehavior 记录路由跳转前的位置
const scrollBehavior = (to, from, savedPosition) => {
	// console.log('scrollBehavior')
	// console.log(to)
	// console.log(from)
	// console.log(savedPosition)
	if (savedPosition) {
		return savedPosition
	} else {
		return {x: 0, y: 0}
	}
}
Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	scrollBehavior,
	routes
})
