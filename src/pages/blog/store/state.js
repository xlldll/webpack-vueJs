/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'
import axios from 'axios'

// 异步加载state的config以及colors尝试

/*
 1.直接加载JSON文件
 see https://stackoverflow.com/questions/42691523/vue-vuex-load-state-from-json-file
 import fs from 'fs'
 var configJson = null
 fs.readFile('/json/config.json', 'utf8', (err, data) => {
 if (err) throw err;
 console.log(data);
 configJson = data;
 }) */

/*
 2.axios异步加载
 var config = axios.get('/blog/mock/config').then(function (response) {
  console.log(response.data[0])
  return response.data[0]
 }).catch(function (error) {
  console.log(error)
  return undefined
 })
 console.log(config) */

/*
 3.promise
 export const config = new Promise((resolve, reject) => {
    axios.get('/blog/mock/config').then(function (response) {
     console.log(response.data[0])
     resolve(response.data[0])
    }).catch(function (error) {
     reject(error)
    })
 }); */

/*
 4.async
 async function config() {
  const data = await axios.get('/blog/mock/config').then(function (response) {
    return response.data[0]
  }).catch(function (error) {
    console.log(error)
    return undefined
  })
 } */

// 直接读取
import configJson from '../json/config.json'
import colorsJson from '../json/colors.json'

/*
以下导入方式不可取
export const config = configJson
export const archives = {}
export const categories = {}
export const tags = {}
export const posts = {}
export const post = {}
export const page = {}
export const loading = false
export const menu = false
export const message = ''
export const colors = colorsJson
*/

export default {
  posts: {},
  archives: {},
  categories: {},
  tags: {},
  post: {},
  page: {},
  config: configJson,
  loading: false,
  menu: false,
  message: '',
  colors: colorsJson
}
