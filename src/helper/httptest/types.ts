const TYPES = {
  CustomAxiosHttpClient: Symbol.for('CustomAxiosHttpClient'),
  
  RequestInterceptors: Symbol.for('RequestInterceptors'),
  ResponsetInterceptors: Symbol.for('ResponsetInterceptors'),

  RequestError: Symbol.for('RequestError'),
  RequestExceptionError: Symbol.for('RequestExceptionError'),
  RequestExceptionHandler: Symbol.for('RequestExceptionHandler'),

  ResponseError: Symbol.for('ResponseError'),
  ResponseExceptionError: Symbol.for('ResponseExceptionError'),
  ResponseExceptionHandler: Symbol.for('ResponseExceptionHandler')
}

export { TYPES }