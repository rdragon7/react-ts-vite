import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import { ZLRequestInterceptors, ZLRequestConfig } from './types'

class ZLRequest {
  instance: AxiosInstance
  interceptors?: ZLRequestInterceptors
  constructor(config: ZLRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截器成功')

        return config
      },
      (error) => {
        console.log('全局请求拦截器失败')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应拦截器成功')
        return res
      },
      (err) => {
        console.log('全局响应拦截器成功')
        return err
      }
    )
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: 'get' })
  }

  post(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: 'post' })
  }

  put(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'PUT' })
  }

  delete(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default ZLRequest
