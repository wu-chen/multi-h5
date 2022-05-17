import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV)
const instance = axios.create({
  timeout: 10000,
  // baseURL: '/',
  // baseURL: IS_PROD ? 'https://app.yeco.live/' : '/',
  // baseURL: 'https://app.yeco.live/',
  baseURL: 'http://192.168.2.80:5800/',
})
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // 统一设置请求地址
    // console.log(store.state.uid)
    // config.headers.uid = store.state.uid
    return config
  },
  function (error) {
    Toast(error.toString() || '请求失败')
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Toast.clear()
    // if (response.data.code === 301 || response.data.code === 302) {
    // token 失效需重新登录
    // Toast(response.data.message || '登录信息不全')
    // appCommunicate('tokenFailure', 'success')
    // }
    if (response.data.code !== 200) {
      Toast.fail(response.data.message)
    }
    return response.data
  },
  function (error) {
    Toast.clear()
    Toast(error.toString() || '请求失败')
    return Promise.reject(error)
  }
)
function install (vue) {
  vue.prototype.axios = instance
}

export default { install, instance }
