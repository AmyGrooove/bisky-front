import { ENV } from '@shared/static'

import { ISetAnimeScoreRequest } from '../types/ISetAnimeScoreRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { StarIcon, StarOffIcon } from '@shared/icons'

const setAnimeScore = async (body: ISetAnimeScoreRequest): Promise<true> => {
  const url = new URL(`/animeEstimate/score`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=anime&tag=history&tag=fast`)

  const result = await response.json()

  if (!response.ok) {
    errorToast({ message: `Не удалось изменить оценку: ${result.message}` })

    throw new Error(`setAnimeScore: ${result.message}`)
  }

  successToast({
    message: 'Оценка успешно изменена',
    Icon: body.score === 0 ? StarOffIcon : StarIcon,
  })

  return result
}

export { setAnimeScore }
