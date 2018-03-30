<template>
	<!--菜单栏-->
	<div v-if = "config.menu" class = "menu" :class = "menu ? 'active' : ''">
		<router-link
			v-for = "(value, key) in config.menu"
			:key = "value"
			:to = "value"
		>{{ key }}
		</router-link>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name    : 'menu',
		watch   : {
			$route() {
				// console.log(`$route`);
				// console.log(this.$route);
				this.setMenu(false)
			}
		},
		computed: {
			...mapGetters(['config', 'menu'])
		},
		methods : {
			...mapActions(['setMenu'])
		}
	}

</script>

<style lang = "postcss">
	/*菜单栏*/
	.menu {
		position: absolute;
		z-index: 10;
		
		width: 100%;
		
		background: #3e3e3e;
		text-align: center;
		
		/*通过transform隐藏菜单栏*/
		transform: translateY(-100%);
		transition: transform .3s ease;
		box-shadow: inset 0px -1px 2px 0px rgba(0, 0, 0, 0.75);
		
		&.active {
			transform: translateY(0);
			
			& + .main {
				padding-top: 100px;
			}
		}
		
		& a {
			display: inline-block;
			
			margin: 5px 10px;
			
			color: #ddd;
			font-size: 15px;
			
			&:first-letter {
				text-transform: uppercase;
			}
			
			&:hover {
				color: #fff;
			}
		}
	}

</style>
