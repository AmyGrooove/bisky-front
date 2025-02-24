import { ENV } from '@shared/static'

import { ISetAnimeEstimateRequest } from '../types/ISetAnimeEstimateRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { CassetteTapeIcon } from '@shared/icons'

const setAnimeEstimate = async (
  body: ISetAnimeEstimateRequest,
): Promise<true> => {
  const url = new URL(`/animeEstimate`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  await fetch(`/api/revalidate?tag=anime&tag=user&tag=history&tag=fast`)

  const result = await response.json()

  if (!response.ok) {
    if (!body.isFastFind)
      errorToast({
        message: `Не удалось изменить статус аниме в списке: ${result.message}`,
      })

    throw new Error(`setAnimeEstimate: ${result.message}`)
  }

  if (!body.isFastFind)
    successToast({
      message: 'Статус аниме в списке успешно изменен',
      Icon: CassetteTapeIcon,
    })

  return result
}

export { setAnimeEstimate }
