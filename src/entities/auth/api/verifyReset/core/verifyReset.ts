import { ENV } from '@shared/static'

import { IVerifyResetRequest } from '../types/IVerifyResetRequest'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const verifyReset = async (body: IVerifyResetRequest): Promise<true> => {
  const url = new URL(`/auth/verifyReset`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=user`)

  const result = await response.json()

  if (!response.ok) {
    throw new Error(`verifyReset: ${result.message}`)
  }

  successToast({ message: 'Успешно сброшен', Icon: UserIcon })

  return result
}

export { verifyReset }
