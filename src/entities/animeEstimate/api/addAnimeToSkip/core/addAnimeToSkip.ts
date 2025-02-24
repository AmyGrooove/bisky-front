import { ENV } from '@shared/static'

import { IAddAnimeToSkipRequest } from '../types/IAddAnimeToSkipRequest'
import { errorToast } from '@shared/utils/toast'

const addAnimeToSkip = async (body: IAddAnimeToSkipRequest): Promise<true> => {
  const url = new URL(`/animeEstimate/skipList`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=fast`)

  const result = await response.json()

  if (!response.ok) {
    if (!body.isFastFind)
      errorToast({
        message: `Не удалось добавить аниме в исключаемые: ${result.message}`,
      })

    throw new Error(`addAnimeToSkip: ${result.message}`)
  }

  if (!body.isFastFind)
    errorToast({
      message: `Аниме успешно добавлено в список исключаемых: ${result.message}`,
    })

  return result
}

export { addAnimeToSkip }
