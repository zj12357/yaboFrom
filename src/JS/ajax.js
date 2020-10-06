import axios from 'axios'
import vm from '../main'
// import Vue from 'vue'

let http = axios.create({
  baseURL: 'http://api.page.activity.yaboabc.com'
})
// 请求拦截器
http.interceptors.request.use(
  config => {
    // 设置token，Content-Type
    var token = sessionStorage.getItem('UserLoginToken')
    config.headers['token'] = token
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
http.interceptors.response.use(
  res => {
    // token失效，重新登录
    if (res.data.code === 401) {
      //  重新登录
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

function get (url, data) {
  return new Promise((resolve, reject) => {
    http.get(url)
      .then(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

function post (url, data) {
  return new Promise((resolve, reject) => {
    http.post(url, data)
      .then(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

export { get, post }
