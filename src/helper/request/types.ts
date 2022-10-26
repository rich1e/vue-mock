const TYPES = {
  RequestInterceptors: Symbol.for('RequestInterceptors'),
  ResponsetInterceptors: Symbol.for('ResponsetInterceptors'),
  RequestExceptionHandler: Symbol.for('RequestExceptionHandler'),
  ResponseExceptionHandler: Symbol.for('ResponseExceptionHandler')
}

export { TYPES }