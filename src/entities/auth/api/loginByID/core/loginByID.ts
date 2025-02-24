import { ENV } from '@shared/static'

import { ILoginByIDRequest } from '../types/ILoginByIDRequest'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const loginByID = async (body: ILoginByIDRequest): Promise<true> => {
  const url = new URL(`/auth/loginByID`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=user`)

  const result = await response.json()

  if (!response.ok) {
    throw new Error(`loginByID: ${result.message}`)
  }

  successToast({ message: 'Успешно авторизован', Icon: UserIcon })

  return result
}

export { loginByID }
