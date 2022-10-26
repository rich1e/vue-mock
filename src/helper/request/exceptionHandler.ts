import type { AxiosError } from "axios";
import { injectable } from "inversify";

import { ExceptionHandler } from "./interfaces"

@injectable()
export class RequestExceptionHandler implements ExceptionHandler {
  private _err: AxiosError;

  constructor(error: AxiosError) {
    this._err = error;
  }

  execute () {
    return Promise.reject(this._err)
  }
}

@injectable()
export class ResponseExceptionHandler implements ExceptionHandler {
  private _err: AxiosError;

  constructor(error: AxiosError) {
    this._err = error;
  }

  execute () {
    return Promise.reject(this._err)
  }
}