import "reflect-metadata";
import { injectable, inject } from "inversify";
import { HttpInterceptors, HttpRequest } from "./interfaces"
import { TYPES } from "./types";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * @see https://github.com/vbenjs/vue-vben-admin/blob/main/src/utils/http/axios/Axios.ts
 * @see https://doc.inversify.cloud/zh_cn/
 */

/**
 * https://juejin.cn/post/7126869314572910600
 * https://juejin.cn/post/7049717544109752350
 * https://github.com/inversify/InversifyJS/blob/master/src/container/container_module.ts
 * https://juejin.cn/post/6951269906629427236
 * https://doc.inversify.cloud/zh_cn/
 * https://github.com/VanRoey/vue-inversify-plugin#readme
 * https://juejin.cn/post/7041930275458285582
 * https://juejin.cn/post/7034124701761093669
 * https://juejin.cn/post/7103743662315536392
 * https://juejin.cn/post/7119334793854058532#heading-6
 * https://juejin.cn/post/6844903657478029325
 * https://gist.github.com/robertleeplummerjr/a7e196a828f384e54c2cfb2adf7f9d8d
 * https://github.com/yogurt1/vue3-inversify/blob/12ffddaf336fb3f010d4412a52632682247c1c0f/src/App.vue
 * https://class-component.vuejs.org/
 * https://github.com/kaorun343/vue-property-decorator
 * https://github.com/vbenjs/vue-vben-admin/blob/main/src/utils/http/axios/Axios.ts
 */

@injectable()
class RequestInterceptors implements HttpInterceptors {
  constructor() {
    this.use()
  }

  use() {}
}

@injectable()
class ResponsetInterceptors implements HttpInterceptors {
  constructor() {
    this.use()
  }

  use() {}
}

interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  // transform?: AxiosTransform;
  // requestOptions?: RequestOptions;
}

@injectable()
class HttpClient implements HttpRequest {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;
  
  private _requestInterceptors: RequestInterceptors;
  private _responsetInterceptors: ResponsetInterceptors;

  constructor(
    options: CreateAxiosOptions,
    /**
     * Property has no initializer and is not definitely assigned in the constructor.
     * @see https://github.com/inversify/InversifyJS/blob/master/wiki/property_injection.md
     * @see https://bobbyhadz.com/blog/typescript-property-has-no-initializer
     * @see https://www.angularjswiki.com/angular/property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructor/
     */
    @inject(TYPES.RequestInterceptors) requestInterceptors: RequestInterceptors,
    @inject(TYPES.ResponsetInterceptors) responsetInterceptors: ResponsetInterceptors
  ) {
    this.options = options;
    this._requestInterceptors = requestInterceptors;
    this._responsetInterceptors = responsetInterceptors;

    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this._requestInterceptors.use()
    this._responsetInterceptors.use()
  }

  get(): void {
    
  }

  post(): void {
    
  }

  put(): void {
    
  }

  delete(): void {
    
  }
}

export default HttpClient;