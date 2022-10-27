import "reflect-metadata";
import { injectable, inject } from "inversify";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { TYPES } from "./types";
import { RequestInterceptors, ResponsetInterceptors } from "./httpInterceptors";
import { AxiosHttpClient } from "./interfaces";

/**
 * axios & inversify
 * @see https://github.com/vbenjs/vue-vben-admin/blob/main/src/utils/http/axios/Axios.ts
 * @see https://doc.inversify.cloud/zh_cn/
 */

interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  // transform?: AxiosTransform;
  // requestOptions?: RequestOptions;
}

@injectable()
class CustomAxiosHttpClient implements AxiosHttpClient {
  private axiosInstance: AxiosInstance;
  // private readonly options: CreateAxiosOptions;
  
  private _requestInterceptors: RequestInterceptors;
  private _responsetInterceptors: ResponsetInterceptors;

  constructor(
    // options: CreateAxiosOptions,
    /**
     * Property has no initializer and is not definitely assigned in the constructor.
     * @see https://github.com/inversify/InversifyJS/blob/master/wiki/property_injection.md
     * @see https://bobbyhadz.com/blog/typescript-property-has-no-initializer
     * @see https://www.angularjswiki.com/angular/property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructor/
     */
    @inject(TYPES.RequestInterceptors) requestInterceptors: RequestInterceptors,
    @inject(TYPES.ResponsetInterceptors) responsetInterceptors: ResponsetInterceptors
  ) {
    console.log('constructor#:', CustomAxiosHttpClient)
    // this.options = options || {};
    this._requestInterceptors = requestInterceptors;
    this._responsetInterceptors = responsetInterceptors;

    this.axiosInstance = axios.create();
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this._requestInterceptors.use(this.axiosInstance)
    this._responsetInterceptors.use(this.axiosInstance)
  }

  create() {
    return this.axiosInstance
  }
}

export default CustomAxiosHttpClient;