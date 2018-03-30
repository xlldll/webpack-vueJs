<template>
	<!--警告信息-->
	<div class = "notice" :class = "message ? 'active' : ''">
		<p>{{ message }}</p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name    : 'notice',
		computed: {
			...mapGetters(['message'])
		}
	}
</script>

<style lang = "postcss">
	/*通过z-index来覆盖整个页面，显示警告信息*/
	.notice {
		display: none;
		position: fixed;
		top: 0;
		z-index: 20;
		
		width: 100%;
		height: 100%;
		
		background: #fff;
		text-align: center;
		
		&.active {
			display: block;
		}
		
		&:before {
			display: inline-block;
			content: '';
			height: 100%;
			vertical-align: middle;
		}
		
		& p {
			display: inline-block;
			
			width: 300px;
			padding: 30px 0;
			border-radius: 3px;
			
			color: #333;
			background: #fff;
			
			box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.27);
		}
	}

</style>
