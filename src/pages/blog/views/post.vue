<template>
	<div class = "post">
		<!--文章详情页-->
		<!--详情头部-->
		<div class = "top">
			<!--文章分类以及发布时间-->
			<p v-if = "page.updated">
				<template v-if = "page.category">
					<router-link :to = "`/categories/${page.category.id}`">{{ page.category.name }}</router-link>
				</template>
				/ {{ page.updated | timeFormat }}
			</p>
			<!--文章标题-->
			<h2>{{ page.title }}</h2>
			<!--文章作者及其头像-->
			<div v-if = "page.author" class = "author">
				<p>{{ page.author.name }}</p>
				<img :src = "page.author.avatar" />
			</div>
		</div>
		<!--文章内容-->
		<div class = "content markdown-body" v-html = "page.content"></div>
		<!--文章标签-->
		<div v-if = "page.tags" class = "post-tags content">
			<router-link
				v-for = "tag in page.tags"
				:key = "tag.id"
				:to = "`/tags/${tag.id}`"
			>{{ tag.name }}
			</router-link>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import { clone } from '../assist/utils'
	// 路由 /posts/${post.id}
	export default {
		name    : 'post',
		created() {
			console.log('created，创建之后事件');
			this.getPost()
		},
		watch   : {
			$route() {
				console.log('watch->$route');
				this.getPost()
			}
		},
		computed: {
			...mapGetters(['post', 'config']),
			page() {
				console.log('computed->page');
				const {
					      post,
					      $route: {
						      params: {id}
					      }
				      } = this
				console.log('computed->page', post);
				console.log('computed->page', id);
				return post[id] || {}
			}
		},
		methods : {
			...mapActions(['setPost']),
			getPost() {
				const {
					      $route: {
						      params: {id}
					      },
					      config: {title},
					      post
				      } = this
				const _post = clone(post)
				if (post[id]) {
					return document.title = `${post[id].title} = ${title}`
				}
				this.$load(`posts/${id}`).then((res) => {
					_post[id] = res
					this.setPost(_post)
					document.title = `${res.title} - ${title}`
				})
			}
		}
	}

</script>

<style lang = "postcss">
	/*todo-css：markdown的CSS样式*/
	@import "../css/content.css";
	@import "../css/code.scss";
	/*详情头部*/
	.top {
		min-height: 100px;
		padding-top: 120px;
		background: #f5f8fa;
		color: #000;
		text-align: center;
		
		& > p {
			margin-bottom: 10px;
			color: #a8a8a8;
			font-size: 12px;
			letter-spacing: 2px;

		}
		
		& a {
			color: inherit;
			
			&:hover {
				color: #000;
			}
		}
		
		& h2 {
			font-size: 30px;
			line-height: 1.4;
		}
		
		& h1 {
			font-size: 30px;
			padding-bottom: 120px;
		}
	}
	
	.author {
		margin-top: 70px;
		
		& p {
			font-size: 12px;
		}
		
		& img {
			display: inline-block;
		
			width: 80px;
			height: 80px;
			margin: 10px 0 -40px 0;
			border: 2px solid #fff;
			border-radius: 50%;
		}
	}
	/*文章标签*/
	.post-tags {
		margin: 40px auto 0;
		
		& a {
			display: inline-block;
			margin: 5px 14px 5px 0;
			color: #666;
			font-size: 13px;
			text-decoration: underline;
			
			&:hover {
				color: #333;
			}
		}
	}
	
	@media screen and (max-width: 600px) {
		.top {
			padding-top: 90px;
			
			& h1 {
				padding-bottom: 90px;
				font-size: 26px;
			}
			
			& h2 {
				font-size: 26px;
				margin: 0 10px;
			}
		}
		
		.author {
			margin-top: 50px;
			
			& img {
				width: 60px;
				height: 60px;
				margin-bottom: -30px;
			}
		}
	}

</style>
