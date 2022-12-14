const TYPES = {
  CustomAxiosHttpClient: Symbol.for('CustomAxiosHttpClient'),
  
  RequestInterceptors: Symbol.for('RequestInterceptors'),
  ResponsetInterceptors: Symbol.for('ResponsetInterceptors'),

  RequestError: Symbol.for('RequestError'),
  RequestExceptionHandler: Symbol.for('RequestExceptionHandler'),

  ResponseError: Symbol.for('ResponseError'),
  ResponseExceptionHandler: Symbol.for('ResponseExceptionHandler')
}

export { TYPES }