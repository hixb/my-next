/**
 * check if it is a function
 * @param {unknown} arg parameter
 */
export const isFunction = (arg: unknown): arg is () => void => typeof arg === 'function'
