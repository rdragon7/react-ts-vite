import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZLRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface ZLRequestConfig extends AxiosRequestConfig {
  interceptors?: ZLRequestInterceptors
}
