// TODO-es6：将对象o转换为字符串，再从中解析出JSON对象
// see http://blog.csdn.net/wangxiaohu__/article/details/7254598
export function clone (o) {
  return JSON.parse(JSON.stringify(o))
}
