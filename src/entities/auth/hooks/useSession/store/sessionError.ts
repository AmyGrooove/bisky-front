import { createEvent, createStore } from 'effector'

const setSessionError = createEvent<boolean>()
const resetSessionError = createEvent()

const $sessionError = createStore(false)
  .on(setSessionError, (_, errorStatus) => errorStatus)
  .reset(resetSessionError)

export { $sessionError, setSessionError, resetSessionError }
