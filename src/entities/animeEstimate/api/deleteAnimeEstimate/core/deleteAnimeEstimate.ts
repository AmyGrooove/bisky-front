import { ENV } from '@shared/static'

import { IDeleteAnimeEstimateRequest } from '../types/IDeleteAnimeEstimateRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { EyeOffIcon } from '@shared/icons'

const deleteAnimeEstimate = async (
  body: IDeleteAnimeEstimateRequest,
): Promise<true> => {
  const url = new URL(`/animeEstimate`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=anime&tag=user&tag=history&tag=fast`)

  const result = await response.json()

  if (!response.ok) {
    if (!body.isFromSkipList)
      errorToast({
        message: `Не удалось изменить статус аниме в списке: ${result.message}`,
      })

    throw new Error(`deleteAnimeEstimate: ${result.message}`)
  }

  if (!body.isFromSkipList)
    successToast({
      message: 'Статус аниме в списке успешно изменен',
      Icon: EyeOffIcon,
    })

  return result
}

export { deleteAnimeEstimate }
