import { ENV } from '@shared/static'

import { ISetAnimeFavoriteRequest } from '../types/ISetAnimeFavoriteRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { HeartIcon, HeartOffIcon } from '@shared/icons'

const setAnimeFavorite = async (
  body: ISetAnimeFavoriteRequest,
): Promise<true> => {
  const url = new URL(`/animeEstimate/favorite`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=anime&tag=history&tag=fast`)

  const result = await response.json()

  if (!response.ok) {
    const errorText = body.isFavorite
      ? 'Не удалось добавить аниме в избранное'
      : 'Не удалось удалить аниме из избранного'
    errorToast({ message: `${errorText}: ${result.message}` })

    throw new Error(`setAnimeFavorite: ${result.message}`)
  }

  const successText = body.isFavorite
    ? 'Аниме успешно добавлено в избранное'
    : 'Аниме успешно удалено из избранного'
  successToast({
    message: successText,
    Icon: body.isFavorite ? HeartIcon : HeartOffIcon,
  })

  return result
}

export { setAnimeFavorite }
