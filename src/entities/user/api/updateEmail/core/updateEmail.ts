import { ENV } from '@shared/static'

import { IUpdateEmailRequest } from '../types/IUpdateEmailRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const updateEmail = async (body: IUpdateEmailRequest): Promise<true> => {
  const url = new URL(`/account/updateEmail`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=user`)

  const result = await response.json()

  if (!response.ok) {
    errorToast({ message: `Не удалось изменить почту: ${result.message}` })

    throw new Error(`updateEmail: ${result.message}`)
  }

  successToast({ message: 'Почта успешно изменена', Icon: UserIcon })

  return result
}

export { updateEmail }
