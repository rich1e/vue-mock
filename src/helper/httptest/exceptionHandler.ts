import "reflect-metadata";
import type { AxiosError } from "axios";
import { injectable, inject } from "inversify";

import { TYPES } from "./types";
import { ExceptionError, ExceptionHandler } from "./interfaces"

// @injectable()
// export class RequestExceptionError implements ExceptionError {
//   private _error: AxiosError

//   constructor(
//     @inject(TYPES.RequestError) error: AxiosError
//   ) {
//     this._error = error;
//   }

//   public throw() {
//     return this._error;
//   }
// }


// @injectable()
// export class ResponseExceptionError implements ExceptionError {
//   private _error: AxiosError

//   constructor(
//     @inject(TYPES.ResponseError) error: AxiosError
//   ) {
//     this._error = error;
//   }

//   public throw() {
//     return this._error;
//   }
// }

@injectable()
export class RequestExceptionHandler implements ExceptionHandler {
  private _err: AxiosError;

  constructor(
    @inject(TYPES.RequestError) error: AxiosError
  ) {
    this._err = error;
  }

  execute () {
    return Promise.reject(this._err)
  }
}

@injectable()
export class ResponseExceptionHandler implements ExceptionHandler {
  private _err: AxiosError;

  constructor(
    @inject(TYPES.ResponseExceptionError) error: AxiosError
  ) {
    this._err = error;
  }

  execute () {
    return Promise.reject(this._err)
  }
}