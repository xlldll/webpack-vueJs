<template>
	<div class = "container">
		<!--菜单栏-->
		<AMenu></AMenu>
		<div class = "main">
			<!--控制菜单显示以及回到首页-->
			<Aheader></Aheader>
			<transition name = "slide-fade" mode = "out-in">
				<router-view class = "view"></router-view>
			</transition>
			<Afooter></Afooter>
		</div>
		<Notice></Notice>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	// 菜单栏
	import AMenu from './components/menu/menu.vue'
	// 控制菜单显示以及回到首页
	import Aheader from './components/header/header.vue'
	// 页脚
	import Afooter from './components/footer/footer.vue'
	// 警告信息
	import Notice from './components/notice/notice.vue'
	export default {
		name      : 'app',
		components: {
			Aheader,
			AMenu,
			Afooter,
			Notice
		},
		data() {
			return {
				//  todo-vue：this.config.title -> Cannot read property 'title' of undefined
				//  解决：将this.config.title 改为 this.$store.getters.config.title
				//  ttl:this.$store.getters.config.title
			}
		},
		watch     : {
			// todo-vue：config()会在create在之前被触发，但并不会执行config函数体内的内容
			/*config() {
				console.log(`app.vue->this.config.title`);
				console.log(this.config.title)
				if (this.config.title) {
					setTimeout(() => {
						document.documentElement.classList.remove('loading')
					}, 1500)
				}
			}*/
		},
		computed  : {
			// ...mapGetters(['config'])
		}
	}

</script>

<style>
	@import './css/common.css';
	
	.container {
		position: relative;
	}
	
	.main {
		position: relative;
		padding: 30px;
		transition: padding .3s ease;
	}
	
	.content {
		width: 96%;
		max-width: 800px;
		margin: 50px auto 0;
	}
	
	@media screen and (max-width: 600px) {
		.main {
			padding: 10px;
		}
		
		.content {
			margin-top: 20px;
		}
	}
	
	.view {
		min-height: 600px;
	}
	
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-active {
		transform: translateX(10px);
		opacity: 0;
	}

</style>
