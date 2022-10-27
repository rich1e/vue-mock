/** 接口文件 */

import type { AxiosError, AxiosInstance, CreateAxiosDefaults } from "axios";

export interface AxiosHttpClient {
  create(config?: CreateAxiosDefaults): AxiosInstance;
}

/**
 * 基础配置
 */
export interface BaseConfig {
  baseURL: string;
  headers: string;
  withCredentials: boolean;
  timeout: number;
}

/**
 * 拦截器
 */
export interface HttpInterceptors {
  use(instance: AxiosInstance): void;
}

/**
 * 错误处理逻辑
 */
export interface ExceptionHandler {
  execute(): void;
}

/**
 * 错误信息
 */
export interface ExceptionError {
  throw(): AxiosError;
}

/**
 * 适配器扩展
 */
export interface AdapterExtensions {

}