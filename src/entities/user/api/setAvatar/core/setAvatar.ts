import { ImageIcon } from '@shared/icons'
import { ENV } from '@shared/static'
import { errorToast, successToast } from '@shared/utils/toast'

const setAvatar = async (file: FormData): Promise<true> => {
  const url = new URL(`/account/avatar`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PATCH',
    body: file,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=user`)

  const result = await response.json()

  if (!response.ok) {
    errorToast({ message: `Не удалось изменить аватар: ${result.message}` })

    throw new Error(`setAvatar: ${result.message}`)
  }

  successToast({ message: 'Аватар успешно изменен', Icon: ImageIcon })

  return result
}

export { setAvatar }
