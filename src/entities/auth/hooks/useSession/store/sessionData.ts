import { getWhoami } from '@entities/auth/api/getWhoami'
import { TResponse } from '@shared/types'
import { createEvent, createStore } from 'effector'

const setUserData = createEvent<TResponse<typeof getWhoami> | null>()
const resetUserData = createEvent()

const $sessionData = createStore<TResponse<typeof getWhoami> | null>(null)
  .on(setUserData, (_, newData) => newData)
  .reset(resetUserData)

export { $sessionData, setUserData, resetUserData }
