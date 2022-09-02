import ZLRequest from './request'
import { BASE_URL, TIMEOUT } from './config'

const zlRequest = new ZLRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor(config) {
      console.log('请求拦截器成功')
      return config
    },
    requestInterceptorCatch(error) {
      console.log('请求拦截器失败')
      return error
    },
    responseInterceptor(config) {
      console.log('相应拦截器成功')
      return config
    },
    responseInterceptorCatch(error) {
      console.log('响应来节气失败')
      return error
    }
  }
})

export default zlRequest
