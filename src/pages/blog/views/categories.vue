<template>
	<div>
		<!--所有类别-->
		<div class = "top">
			<p>{{ config.categories.length }} categories in total</p>
			<h1>All Categories</h1>
		</div>
		
		<div class = "categories">
			<div class = "content images" v-if = "config.categories">
				<router-link
					v-for = "category in config.categories"
					:key = "category.id"
					:to = "`/categories/${category.id}`"
					:style = "`background-image: url(https://unsplash.it/270/374/?gravity=east&random=${category.id})`"
				>
					<h4>{{ category.name }}</h4>
					<p>{{ category.count }} {{ category.count > 1 ? 'Posts' : 'Post' }}</p>
				</router-link>
			</div>
		</div>
	
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name    : 'categories',
		created() {
			document.title = `All Categories - ${this.config.title}`
		},
		computed: {
			...mapGetters(['config'])
		}
	}
</script>

<style>
	@import "../css/images.scss";
</style>
