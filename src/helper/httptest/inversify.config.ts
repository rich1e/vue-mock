import type { AxiosError } from "axios";
import { Container } from "inversify";

import { TYPES } from "./types";
import { AxiosHttpClient, HttpInterceptors, ExceptionHandler } from "./interfaces";
import { RequestInterceptors, ResponsetInterceptors } from "./httpInterceptors";
import { RequestExceptionHandler, ResponseExceptionHandler } from "./exceptionHandler";
import CustomAxiosHttpClient from "./CustomAxiosHttpClient";

const defHttp = new Container();

defHttp.bind<ExceptionHandler>(TYPES.RequestExceptionHandler).to(RequestExceptionHandler)
defHttp.bind<ExceptionHandler>(TYPES.ResponseExceptionHandler).to(ResponseExceptionHandler)

defHttp.bind<HttpInterceptors>(TYPES.RequestInterceptors).to(RequestInterceptors)
defHttp.bind<HttpInterceptors>(TYPES.ResponsetInterceptors).to(ResponsetInterceptors)

defHttp.bind<AxiosHttpClient>(TYPES.CustomAxiosHttpClient).to(CustomAxiosHttpClient)

export {defHttp}
