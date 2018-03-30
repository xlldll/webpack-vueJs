<template>
	<div class = "header" :class = "className">
		<!--控制菜单显示以及回到首页-->
		<div @click = "toggle" class = "btns">
			<button :disabled = "loading"></button>
			<router-link v-if = "className != 'index'" to = "/">{{ config.title }}</router-link>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	export default {
		name    : 'header',
		data() {
			return {
				className: ''
			}
		},
		created() {
			this.setClass()
		},
		watch   : {
			$route() {
				this.setClass()
			}
		},
		computed: {
			...mapGetters(['config', 'loading', 'menu'])
		},
		methods : {
			toggle(e) {
				// todo-vue fix: Cannot set property menu of #<Object> which has only a getter
				// 已解决：原因是index引入store的方式不当
				// console.log(this.$store);
				// console.log(this.$store.state);
				if (e.target.tagName != 'A') {
					this.setMenu(!this.menu)
				}
			},
			setClass() {
				const {name} = this.$route
				if (name == 'home') {
					return this.className = 'index'
				}
				this.className = ''
			},
			...mapActions([
				'setMenu'
			])
		}
	}
</script>

<style lang = "postcss">
	
	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
	
	.header {
		
		position: relative;
		z-index: 10;
		text-align: center;
	}
	/*todo-css:精致的复合按钮效果，包括两种形态以及返回主页功能*/
	.btns {
		position: absolute;
		left: 20px;
		top: 20px;
		
		background: #000;
		font-size: 0;
		
		box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.27);
		
		/*控制菜单显示按钮*/
		& button {
			display: inline-block;
			box-sizing: border-box;
			position: relative;
			
			width: 17px;
			height: 13px;
			margin: 10px 9px;
			padding: 0;
			border: none;
			border-top: 1px solid #d7d7d7;
			border-bottom: 1px solid #d7d7d7;
			outline: none;
			cursor: pointer;
			
			background: transparent;
			vertical-align: top;
			
			&:before {
				position: absolute;
				top: 5px;
				left: 0;
				
				width: 100%;
				height: 1px;
				content: '';
				
				background: #d7d7d7;
			}
			/*加载期间，按钮禁用样式*/
			&:disabled {
				border: none;
				
				&:before {
					box-sizing: border-box;
					position: absolute;
					top: -2px;
					left: 0;
					
					width: 17px;
					height: 17px;
					border: 2px solid transparent;
					border-top-color: #fff;
					border-bottom-color: #fff;
					border-radius: 50%;
					
					background: transparent;
					
					animation: spinner 1s ease infinite;
				}
			}
		}
		
		& a {
			display: inline-block;
			
			height: 33px;
			padding: 0 14px;
			border-left: 1px solid #4c4c4c;
			
			color: #fff;
			font-family: serif;
			font-size: 14px;
			line-height: 33px;
			vertical-align: top;
			letter-spacing: 1px;
			
		}
	}
	
	@media screen and (max-width: 600px) {
		.btns {
			left: 14px;
			top: 14px;
			box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.27);
		}
	}

</style>
