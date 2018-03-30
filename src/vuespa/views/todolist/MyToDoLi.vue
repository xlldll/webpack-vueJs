/**
* Created by v_chqlin on 2018/3/30.
* this.$emit(...) is not a function，已解决
*/
<template>
	<li :class="[{'is-fin':todoobj.isfin}]">
		<label :for=getID_m(todoobj)></label>
		<input :id=getID_m(todoobj) type="checkbox" :checked="todoobj.isfin" @change="chkfin_m({ischkfin:!todoobj.isfin})">
		<span v-if="!isEditing" @dblclick="isEditing = true">{{todoobj.content}}</span>
		<input v-if="isEditing" type="text" class="todo-edit" :autofoucus="isEditing" :value="todoobj.content" @keyup.enter="doneEdit_m(todoobj,$event)" @keyup.esc="cancelEdit_m(todoobj,$event)" @blur="doneEdit_m(todoobj,$event)">
		<div class="todo-del" @click="delTodo(todoobj)">X</div>
	</li>
</template>
<style scoped="true" lang="scss">
	li {
		position: relative;
		box-sizing: inherit;
		display: flex;
		align-items: center;
		margin: 10px 0;
		span {
			display: inline-block;
			width: 80%;
			height: 42px;
			line-height: 42px;
			padding: 0 10px;
			margin: 0 10px;
			border: 1px solid gold;
			border-radius: 5%;
			font-size: 14px;
			color: black;
			background-color: #00a2ed;
		}
		label {
			display: inline-block;
			width: 20px;
			height: 20px;
			margin: 0;
			background-color: whitesmoke;
			position: absolute;
			top: 50%;
			left: -25px;
			-webkit-transform: translateY(-50%);
			-moz-transform: translateY(-50%);
			-ms-transform: translateY(-50%);
			-o-transform: translateY(-50%);
			transform: translateY(-50%);
			
			&.is-chk {
				& {
					background-color: yellowgreen;
				}
				&:before {
					content: "√";
					display: inline-block;
					width: 50%;
					height: 50%;
					position: absolute;
					top: 25%;
					left: 50%;
					color: #9B59B6;
					-webkit-transform: translateY(-50%) translateX(-50%);
					transform: translateY(-50%) translateX(-50%);
				}
			}
			
		}
		/*&.is-editing {*/
		/*.todo-edit {*/
		/*display: block;*/
		/*}*/
		/*.todo-del {*/
		/*display: block;*/
		/*}*/
		/*}*/
		&.is-fin {
			span {
				border: 2px solid green;
				text-decoration-color: red;
				text-decoration-line: line-through;
				background-color: antiquewhite;
			}
		}
		
	}
	
	.todo {
		&-edit {
			/*position: absolute;*/
			/*top: 50%;*/
			/*left: 22px;*/
			display: inline-block;
			width: 80%;
			height: 42px;
			line-height: 42px;
			padding: 0 10px;
			margin: 0 10px;
			font-size: 14px;
			color: black;
		}
		&-del {
			box-sizing: content-box;
			width: 15px;
			height: 15px;
			padding: 3px 0;
			font-size: 15px;
			line-height: 15px;
			text-align: center;
			color: white;
			background-color: red;
		}
	}
</style>
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex';
	
	export default {
		name      : 'MyToDoLi',
		data() {
			return {
				isEditing: false,
			};
		},
		props     : ['todoobj'],
		components: {},
		beforeRouteEnter(to, from, next) {
			next();
		},
		beforeRouteUpdate(to, from, next) {
			next();
		},
		beforeRouteLeave(to, from, next) {
			next();
		},
		beforeCreate() {},
		created() {},
		beforeMount() {},
		mounted() {},
		beforeUpdate() {},
		updated() {},
		activated() {},
		deactivated() {},
		beforeDestroy() {},
		destroyed() {},
		watch     : {},
		computed  : {},
		methods   : {
			delTodo(todoobj) {
				// console.log(`this:`, this);
				this.$emit('deleteTodo', todoobj);
			},
			
			doneEdit_m(obj, e) {
				// console.log(`obj:`, obj)
				//			    console.log(`props:`, this.$props.todoobj)
				const newval = e.target.value.trim();
				if (!newval) {
					this.delTodo(obj.id);
				} else if (this.isEditing) {
					//					this.todoobj[obj.id].content = newval;
					this.isEditing = false;
				}
			},
			cancelEdit_m(obj, e) {
				e.target.value = obj.content;
				this.isEditing = false;
			},
			getID_m(todoobj) {
				return 'chk-' + todoobj.id;
			},
			chkfin_m({ischkfin}) {
				this.$props.todoobj.isfin = ischkfin;
			},
		},
		filters   : {},
	};
</script>

