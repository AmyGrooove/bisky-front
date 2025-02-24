import { ENV } from '@shared/static'

import { IUpdateUsernameRequest } from '../types/IUpdateUsernameRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const updateUsername = async (body: IUpdateUsernameRequest): Promise<true> => {
  const url = new URL(`/account/updateUsername`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=user`)

  const result = await response.json()

  if (!response.ok) {
    errorToast({ message: `Не удалось изменить логин: ${result.message}` })

    throw new Error(`updateUsername: ${result.message}`)
  }

  successToast({ message: 'Логин успешно изменен', Icon: UserIcon })

  return result
}

export { updateUsername }
