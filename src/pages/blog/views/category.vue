<template>
	<div>
		<!--单个类别-->
		<div class = "top">
			<p>总共有 {{ sum }} 文章</p>
			<h1>category {{ category.name }}</h1>
		</div>
		
		<div class = "category content">
			<Posts :posts = "posts"></Posts>
			<div class = "nav">
				<button
					@click = "$router.push(page == 2 ? `/categories/${id}` : `/categories/${id}/${page - 1}`)"
					:disabled = "page <= 1 || isdisabled"
				>Previous
				</button>
				<button
					@click = "$router.push(`/categories/${id}/${page + 1}`)"
					:disabled = "page >= total || isdisabled"
				>Next
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
	export default {
		name      : 'category',
		components: {
			Posts
		},
		data() {
			return {
				isdisabled: false,
				sum       : ''
			}
		},
		created() {
			const {
				      config: {
					      title,
					      categories
				      },
				      id,
				      page,
				      total
			      } = this
			const {name, count} = categories.find(category => category.id == id)
			document.title = `${name} - ${title}`
			if (page > total) {
				return this.$router.replace(`/categories/${id}`)
			}
			this.sum = count
			this.getPosts()
		},
		watch     : {
			page() {
				this.getPosts()
			}
		},
		computed  : {
			// Posts组件的参数
			posts() {
				const {
					      category,
					      page,
					      config: {per_page}
				      } = this
				if (!category.posts) {
					return []
				}
				return category.posts[page] || []
			},
			// 目录
			category() {
				const {
					      id,
					      categories
				      } = this
				return categories[id] || {}
			},
			// 路由ID
			id() {
				return +this.$route.params.id
			},
			// 路由页码
			page() {
				return +this.$route.params.page || 1
			},
			// 总页码
			total() {
				const {
					      config: {
						      categories,
						      per_page,
					      },
					      id
				      } = this
				if (per_page === 0) {
					return 1
				}
				const {count} = categories.filter(category => category.id == id)[0]
				return Math.ceil(count / per_page)
			},
			...mapGetters(['config', 'categories'])
		},
		methods   : {
			getPosts() {
				const {
					      id,
					      config: {per_page},
					      categories,
					      page
				      } = this
				const _categories = clone(categories)
				console.log(`methods->getPosts()`)
				console.log(categories)
				//	如果该类不存在，第一次加载，读取该类之后即止
				if (!categories[id]) {
					console.log(`methods->getPosts()->categories[id]`)
					return this.loadPosts().then((res) => {
						const {name, posts} = res
						_categories[id] = {id, name, posts: {}}
						_categories[id].posts[page] = posts
						this.setCategories(_categories)
					})
				}
				// 如果该类存在，则是第二次加载，读取该类的第二页内容即止
				if (!categories[id].posts[page]) {
					console.log(`methods->getPosts()->categories[id].posts[page]`)
					this.loadPosts().then((res) => {
						_categories[id].posts[page] = res.posts
						this.setCategories(_categories)
					})
				}
			},
		    // 根据类别ID以及页码，返回类别内容
			loadPosts() {
				const {
					      id,
					      page
				      } = this
				this.isdisabled = true
				return this.$load(`categories/${id}/${page}`).then((res) => {
					this.isdisabled = false
					return res
				})
			},
			...mapActions(['setCategories'])
		}
	}

</script>

<style lang = "postcss">
	
	.category {
		max-width: 900px;
	}

</style>
