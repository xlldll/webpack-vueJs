/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'

/*
export const CONFIG = (state, config) => {
  state.config = config
}
export const ARCHIVES = (state, archives) => {
  state.archives = archives
}
export const CATEGORIES = (state, categories) => {
  state.categories = categories
}
export const TAGS = (state, tags) => {
  state.tags = tags
}
export const POSTS = (state, posts) => {
  state.posts = posts
}
export const POST = (state, post) => {
  state.post = post
}
export const PAGE = (state, page) => {
  state.page = page
}
export const LOADING = (state, loading) => {
  state.loading = loading
}
export const MENU = (state, menu) => {
  state.menu = menu
}
export const MESSAGE = (state, message) => {
  state.message = message
} */

export default {
  POSTS (state, posts) {
    state.posts = posts
  },
  ARCHIVES (state, archives) {
    state.archives = archives
  },
  CATEGORIES (state, categories) {
    state.categories = categories
  },
  TAGS (state, tags) {
    state.tags = tags
  },
  POST (state, post) {
    state.post = post
  },
  PAGE (state, page) {
    state.page = page
  },
  CONFIG (state, config) {
    state.config = config
  },
  MENU (state, mode) {
    state.menu = mode
  },
  MESSAGE (state, message) {
    state.message = message
  },
  LOADING (state, mode) {
    state.loading = mode
  }
}
