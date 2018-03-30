/**
 * Created by LinChuQiang.
 */

import Vue from 'vue'
import Vuex from 'vuex'

// 导入Store
/*
 以下导入方式不可取
 import * as state from './state'
 import * as getters from './getters'
 import * as mutations from './mutations'
 import * as actions from './actions' */

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// import plugins from './plugins'

// console.log(state);
// console.log(getters);
// console.log(actions);
// console.log(mutations);

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: false
})
