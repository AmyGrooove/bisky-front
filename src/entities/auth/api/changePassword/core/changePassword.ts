import { ENV } from '@shared/static'

import { IChangePasswordRequest } from '../types/IChangePasswordRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const changePassword = async (body: IChangePasswordRequest): Promise<true> => {
  const url = new URL(`/auth/changePassword`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=user`)

  const result = await response.json()

  if (!response.ok) {
    errorToast({ message: `Не удалось изменить пароль: ${result.message}` })

    throw new Error(`changePassword: ${result.message}`)
  }

  successToast({ message: 'Пароль успешно изменен', Icon: UserIcon })

  return result
}

export { changePassword }
