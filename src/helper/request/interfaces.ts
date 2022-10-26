/** 接口文件 */

/**
 * 基础配置
 */
export interface BaseConfig {

}

/**
 * 拦截器
 */
export interface HttpInterceptors {
  use(): void;
}

/**
 * 错误处理逻辑
 */
export interface ExceptionHandler {
  execute(): void;
}

/**
 * 适配器扩展
 */
export interface AdapterExtensions {

}