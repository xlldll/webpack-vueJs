
import createLogger from '../../common/logger'

const STORAGE_KEY = 'todos-vuejs'

const localStoragePlugin = store => {
//  注册监听 根store 的 mutation。handler 会在每个 mutation 完成后调用，接收 mutation 和经过 mutation 后的状态作为参数：
  console.log(store)
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
