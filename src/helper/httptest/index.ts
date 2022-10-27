/**
 * 1. 封装基础配置（baseURL，headers，withCredentials，timeout等）
 * 2. 重写拦截器（request，response）
 * 3. 重写错误处理逻辑（规范错误code，统一响应数据格式）
 * 4. 通过适配器扩展功能（cache，请求token，超时重试等）
 * 
 * 尽量保持 axios 原有的使用方式，即传参和返回格式保持一致，不会阉割原有功能。
 * 
 * @see https://juejin.cn/post/7103743662315536392
 * @see https://juejin.cn/post/7119334793854058532
 */

import { defHttp } from "./inversify.config";
import { TYPES } from "./types";
import { AxiosHttpClient } from "./interfaces";

/**
 * Inversify and Axios Example
 * @see https://gist.github.com/robertleeplummerjr/a7e196a828f384e54c2cfb2adf7f9d8d
 */

/**
 * axios 实现超时重试
 * @see https://github.com/axios/axios/issues/164#issuecomment-327837467
 * @see https://cloud.tencent.com/developer/article/1751882?cps_key=1d358d18a7a17b4a6df8d67a62fd3d3d
 * @see https://www.zhangwenbing.com/blog/nodejs/rka_kpVlX
 */

/**
 * axios 其他封装方式📦
 * @see https://juejin.cn/post/7041930275458285582
 * @see https://juejin.cn/post/6844903657478029325
 */

/**
 * axios adapter
 * @see https://www.xiabingbao.com/post/request/axios-self-adapter.html
 */

const httpClient = defHttp.get<AxiosHttpClient>(TYPES.CustomAxiosHttpClient)

export default httpClient;