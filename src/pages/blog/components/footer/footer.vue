<template>
	<div class = "footer">
		<!--页脚-->
		<h4>&copy; {{ (new Date()).getFullYear() }} {{ config.title }}</h4>
		<p>Powered by
			<a target = "_blank" href = "https://github.com/acyortjs/acyort">AcyOrt</a>
		   /
			<a target = "_blank" href = "https://vuejs.org">Vue.js</a>
		   /
			<a target = "_blank" href = "https://unsplash.it">Unsplash It</a>
		</p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'footer',
		computed: {
			...mapGetters(['config'])
		}
	}
</script>

<style lang = "postcss">
	/*页脚*/
	.footer {
		padding: 30px;
		margin-top: 100px;
		
		background: #f5f8fa;
		color: #000;
		letter-spacing: 1px;
		
		& h4 {
			margin-bottom: 20px;
			font-size: 15px;
		}
		
		& p {
			color: #9b9b9b;
			font-size: 13px;
			line-height: 1.6;
		}
		
		& a {
			color: #000;
			
			&:hover {
				text-decoration: underline;
			}
		}
	}
	
	@media screen and (max-width: 600px) {
		.footer {
			padding: 30px 14px;
			margin-top: 50px;
			
			& h4 {
				margin-bottom: 10px;
			}
		}
	}

</style>
