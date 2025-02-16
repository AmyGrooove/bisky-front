import { createEffect, createStore } from 'effector'

import { TResponse } from '@shared/types'
import { getWhoami } from '@entities/auth/api'

const fetchSessionData = createEffect(getWhoami)

const $user = createStore<TResponse<typeof getWhoami> | null>(null)
  .on(fetchSessionData.doneData, (_, userData) => userData)
  .reset(fetchSessionData.failData)

const $isLoading = createStore<boolean>(true)
  .on(fetchSessionData.doneData, () => false)
  .on(fetchSessionData.failData, () => false)

export { fetchSessionData, $user, $isLoading }
