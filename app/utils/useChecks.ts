/**
 * check if it is a function
 * @param {unknown} arg parameter
 */
export const isFunction = (arg: unknown): arg is () => void => typeof arg === 'function'

/**
 * check if it is a string
 * @param {unknown} arg parameter
 */
export const isString = (arg: unknown): arg is string => typeof arg == 'string'
