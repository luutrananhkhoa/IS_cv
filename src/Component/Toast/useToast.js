import { eventEmitter } from './ToastContainer'
import * as contants from './constants'

/**
 * to useToast
 * @param message string to display
 * @param options has @param time: int miliseconds default is 3000
 * @param options has @param closeOnClick: bool close on click event
 * @param options has @param pauseOnHover: bool pause on hover event
 * @returns return cursor to use function
 */
export default function useToast() {
  const success = (message, options) => {
    eventEmitter.emit('create', contants.SUCCESS, message, options)
  }
  const info = (message, options) => {
    eventEmitter.emit('create', contants.INFO, message, options)
  }
  const warning = (message, options) => {
    eventEmitter.emit('create', contants.WARNING, message, options)
  }
  const error = (message, options) => {
    eventEmitter.emit('create', contants.ERROR, message, options)
  }
  const clear = () => {
    eventEmitter.emit('clear')
  }
  return { success, info, warning, error, clear }
}
