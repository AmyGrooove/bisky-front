import { ENV } from '@shared/static'

import { ISubscribeToUserRequest } from '../types/ISubscribeToUserRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const subscribeToUser = async (
  body: ISubscribeToUserRequest,
): Promise<true> => {
  const url = new URL(`/account/subscribeToUser`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=user`)

  const result = await response.json()

  if (!response.ok) {
    errorToast({
      message: `Не удалось подписаться на пользователя: ${result.message}`,
    })

    throw new Error(`subscribeToUser: ${result.message}`)
  }

  successToast({ message: 'Успешно подписан на пользователя', Icon: UserIcon })

  return result
}

export { subscribeToUser }
