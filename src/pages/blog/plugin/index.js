/**
 * Created by LinChuQiang.
 */
import api from './api'
import axios from 'axios'
export default {
	install (Vue, options) {
		// 添加 $load 实例方法
		// TODO-ES6: rest-参数 ... 将参数整合进一个数组urls
		Vue.prototype.$load = function (...urls) {
			// ["page/1"]
			// console.log(urls)
			const args = urls.map(url => axios({method: 'get', url: api(url)}))
			this.$store.dispatch('setLoading', true)
			// TODO-server：处理多个并发的请求
			return axios.all(args).then(
			axios.spread((...res) => {
				setTimeout(() => {
					this.$store.dispatch('setLoading', false)
				}, 3000)
				if (res.length == 1) {
					return res[0].data
				}
				return res.map(r => r.data)
			})
			).catch((err) => {
				this.$store.dispatch('setMessage', '网络错误 | Network Error | 404')
				return Promise.reject(err)
			})
		}
		// 时间格式化
		Vue.filter('timeFormat', time => {
			if (!time) {
				return ''
			}
			return new Date(time).toString().split(' ').filter((t, i) => i >= 1 && i <= 3).map((t, i) => i == 1 ? `${t},` : t).join(' ')
		})
	}
}
