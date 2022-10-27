import "reflect-metadata";
import { inject, injectable } from "inversify";
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";

import { TYPES } from "./types";
import { HttpInterceptors } from "./interfaces"
import { RequestExceptionHandler, ResponseExceptionHandler } from "./exceptionHandler";

@injectable()
export class RequestInterceptors implements HttpInterceptors {
  // private _ins: AxiosInstance;
  private _requestExceptionHandler: RequestExceptionHandler

  constructor(
    @inject(TYPES.RequestExceptionHandler) requestExceptionHandler: RequestExceptionHandler
  ) {
    this._requestExceptionHandler = requestExceptionHandler;
  }

  RequestInterceptorsError() {
    this._requestExceptionHandler.execute();
  }

  use(instance: AxiosInstance) {
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config;
    }, this.RequestInterceptorsError);
  }
}

@injectable()
export class ResponsetInterceptors implements HttpInterceptors {
  // private _ins: AxiosInstance;
  private _responseExceptionHandler: ResponseExceptionHandler

  constructor(
    // instance: AxiosInstance,
    @inject(TYPES.ResponsetInterceptors) responseExceptionHandler: ResponseExceptionHandler
  ) {
    // this._ins = instance;
    this._responseExceptionHandler = responseExceptionHandler;
  }

  ResponsetInterceptorsError() {
    this._responseExceptionHandler.execute();
  }


  use(instance: AxiosInstance) {
    instance.interceptors.response.use((response: AxiosResponse) => {
      if (response?.status === 200) {
        return response.data;
      }
    }, this.ResponsetInterceptorsError);
  }
}