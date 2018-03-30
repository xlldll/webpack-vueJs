const hosts = ''
const path = 'blog/mock'

// dev-server.js中设置假数据
export default function api (url) {
  return `${hosts}/${path}/${url}`
}
