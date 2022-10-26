import { Container } from "inversify";
import { TYPES } from "./types";
import { HttpInterceptors, ExceptionHandler } from "./interfaces";
import HttpClient from "./httpClient";

const defHttp = new Container();
// defHttp.bind<HttpInterceptors>(TYPES.RequestInterceptors).to(HttpClient)

export {defHttp}