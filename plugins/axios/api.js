import axios from 'axios'
import qs from 'qs'
const ax = axios.create({
  baseURL: process.env.baseUrl
})
ax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截
ax.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    console.log('发起数据请求了', config)
    return config
  },
  err => {
    console.log(err)
  }
)

// 响应拦截
ax.interceptors.response.use(
  data => {
    console.log('获取数据了')
    return data
  },
  err => {
    console.log('错误', err)
  }
)

export default {
  get: (url, params) => {
    return ax.get(url, { params })
  },

  put: (url, data) => {
    return ax.put(url, data)
  },

  post: (url, data) => {
    return ax.post(url, data)
  },

  delete: (url, params) => {
    return ax.delete(url, { params })
  }
}