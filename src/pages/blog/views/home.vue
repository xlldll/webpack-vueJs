<template>
	<div>
		<div class = "top">
			<p>{{ config.description }}</p>
			<h1>{{ config.title }}</h1>
			<p>{{ tested }}</p>
			<p>mystr{{ mystr }}</p>
			<p>mystrr{{ mystrr() }}</p>
		</div>
		<div class = "home content">
			<!--所有文章列表页/5条-->
			<Posts :posts = "items"></Posts>
			<!--页码器-->
			<div class = "nav">
				<button :disabled = "moniClk()">模拟</button>
				<button :disabled = "moniClk2">模拟2</button>
				<button
					@click = "prevClk()"
					:disabled = "disabledprevClk"
				>{{ previousStr }}
				</button>
				<button
					@click = "nextClk()"
					:disabled = "disablednextClk()"
				>{{ nextStr }}
				</button>
						<span>{{ page }} / {{ total }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import Posts from '../components/posts/posts.vue'
	import { clone } from '../assist/utils'
	//	import axios from 'axios'
	export default {
		name      : 'home',
		components: {
			Posts
		},
		data() {
			return {
				// 初始翻页按钮不禁用
				isdisabled: false,
			  count:1
			}
		},
		beforeCreate(){
			console.log('beforeCreate，创建之前事件')
		},
		created() {
			console.log('created，创建之后事件');
			/*
			 * posts:{} 文章ID列表
			 * page:1 当前页码
			 * total:2 总页码
			 * title: 'Recordum' 网页标题以及当前标题
			 */
			const {
				      posts,
				      page,
				      total,
				      config: {title}
			      } = this
			document.title = title
			if (page > total) {
				return this.$router.replace('/')
			}
			// _posts={}
			const _posts = clone(posts)
			//	如果页面文章列表已经存在,则返回
			if (posts[page]) {
				console.log('created->文章列表已经存在');
				return
			}
			//	const _posts={}
			//	const page=1
			// 加载页面文章列表
			// this.posts = {1:[{},{}...]}
			this.$load(`page/${page}`).then((res) => {
				console.log('created->异步加载完成');
				_posts[page] = res
				this.setPosts(_posts)
			})
		},
		beforeMount(){
			console.log('beforeMount，插入之前事件');
		},
		mounted(){
			console.log('mounted，插入之后事件');
		},
		beforeUpdate(){
			console.log('beforeUpdate，更新之前事件');
		},
		updated(){
			console.log('updated，更新之后事件');
		},
		watch     : {
			page() {
				console.log(`watch->page()，监听watch事件`);
				this.getPosts()
			},
		  'count'(){
					  console.log(`watch->count()，监听watch事件`);
		  }
		},
		computed  : {
			// 获得数据
			...mapGetters(['posts', 'config']),
			// 计算当前页码
			page() {
				console.log(`computed->page，当前页码`);
				return +this.$route.params.page || 1
			},
			// 计算总页码
			total() {
				console.log(`computed->total，总页码，`, this.posts, `。显示posts文章列表`);
				/*
				  'posts': [
				   210285498,
				   205319771,
				   196350551,
				   126817142,
				   71470122,
				   71329290
				   ],	所有文章的ID列表
				  'per_page': 5, 每页指定显示5条文章
				*/
				const {
					      posts,
					      per_page
				      } = this.config
				if (per_page === 0 || posts.length === 0) {
					return 1
				}
				// 2
				return Math.ceil(posts.length / per_page)
			},
			// 返回该页所含的文章列表详情
			items() {
				const {
					      posts,
					      page,
					      config: {per_page}
				      } = this
				console.log(`computed->items，该页所含的文章列表详情`, posts, `。显示posts文章列表`)
				return posts[page] || []
			},
			// TEST:mapActions的触发会不会重新触发computed中的相关函数
			tested(){
				console.log(`computed->tested，computed的测试函数`, this.posts, `。显示posts文章列表`)
				return 'computed->tested，computed的测试函数'
			},
			previousStr(){
				console.log(`computed->previousStr，上一页的文本`, this.posts, `。显示posts文章列表`)
				return `previou ${this.$route.params.page}`;
			},
			mystr(){
				console.log(`computed->mystr，computed的测试函数`)
				return 'computed->mystr，computed的测试函数';
			},
			disabledprevClk(){
				console.log(`computed->disabledprevClk()，禁止上一页`)
				return this.page <= 1 || this.isdisabled;
			},
			nextStr(){
				console.log(`computed->nextStr，下一页的文本`)
				return `next ${this.$route.params.page}`;
			},
			moniClk2(){
				console.log(`computed->moniClk2()，模拟不禁止`)
				return false;
			},
		},
		methods   : {
			...mapActions(['setPosts']),
			prevClk(){
				console.log(`methods->prevClk()，点击上一页时`)
				return this.$router.push(this.page == 2 ? '/' : `/page/${this.page - 1}`);
			},
			nextClk(){
				console.log(`methods->nextClk()，点击下一页时`)
				return this.$router.push(`/page/${this.page + 1}`);
			},
			disablednextClk(){
				console.log(`methods->disablednextClk()，禁止下一页`)
				return this.page >= this.total || this.isdisabled;
			},
			moniClk(){
				console.log(`methods->moniClk()，模拟禁止`)
				return true;
			},
			mystrr(){
				console.log(`methods->mystrr，mehtods的测试函数`)
				return 'methods->mystrr，mehtods的测试函数';
			},
			// 组件自身跳转到自身时，即下一页，重新获取下一页的文章列表
			getPosts() {
				console.log(`methods->getPosts()，重新获取下一页的文章列表`);
				const {
					      config: {per_page},
					      posts,
					      page
				      } = this
				console.log(`methods->getPosts()`,per_page);
				console.log(`methods->getPosts()`,posts);
				console.log(`methods->getPosts()`,page);
				const _posts = clone(posts)
				// 如果第二页的文章列表存在，则返回
				if (posts[page]) {
					return
				}
				this.isdisabled = true
				this.$load(`page/${page}`).then((res) => {
					this.isdisabled = false
					_posts[page] = res
					this.setPosts(_posts)
				})
			}
		}
	}
</script>

<style>
	
	.home {
		max-width: 900px;
	}

</style>
