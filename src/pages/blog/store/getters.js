import * as type from './mutationsTypes'
/* export const config = (state) => {
  return state.config
}
export const archives = (state) => {
  return state.archives
}
export const categories = (state) => {
  return state.categories
}
export const tags = (state) => {
  return state.tags
}
export const posts = (state) => {
  return state.posts
}
export const post = (state) => {
  return state.post
}
export const page = (state) => {
  return state.page
}
export const loading = (state) => {
  return state.loading
}
export const menu = (state) => {
  return state.menu
}
export const message = (state) => {
  return state.message
} */
export default {
	posts (state) {
		console.log(`getters posts`)
		return state.posts
	},
	archives (state) {
		return state.archives
	},
	categories (state) {
		return state.categories
	},
	tags (state) {
		return state.tags
	},
	post (state) {
		return state.post
	},
	page (state) {
		return state.page
	},
	config (state) {
		console.log(`getters config`)
		return state.config
	},
	message (state) {
		return state.message
	},
	menu (state) {
		return state.menu
	},
	loading (state) {
		return state.loading
	}
}
