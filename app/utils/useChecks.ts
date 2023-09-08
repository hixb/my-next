/**
 * check if it is a function
 * @param {unknown} arg parameter
 */
export function isFunction(arg: unknown): arg is () => void {
  return typeof arg === 'function'
}
