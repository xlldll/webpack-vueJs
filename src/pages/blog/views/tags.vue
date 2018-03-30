<template>
	<div>
		<!--所有标签页面-->
		<div class = "top">
			<p>{{ config.tags.length }} tags in total</p>
			<h1>All Tags</h1>
		</div>
		<div class = "tags">
			<div class = "content images" v-if = "config.tags">
				<router-link
					v-for = "tag in config.tags"
					:key = "tag.id"
					:to = "`/tags/${tag.id}`"
					:style = "`background-image: url(https://unsplash.it/270/374/?gravity=east&random=${tag.id})`"
				>
					<h4>{{ tag.name }}</h4>
					<p>{{ tag.count }} {{ tag.count > 1 ? 'Posts' : 'Post' }}</p>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name    : 'tags',
		created() {
			document.title = `All Tags - ${this.config.title}`
		},
		computed: {
			...mapGetters(['config'])
		}
	}

</script>

<style lang = "postcss">
	@import "../css/images.scss";
</style>
