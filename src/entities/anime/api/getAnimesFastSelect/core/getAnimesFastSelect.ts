import { API_URL } from '@shared/static'

import { IGetAnimesFastSelectResponse } from '../types/IGetAnimesFastSelectResponse'

const getAnimesFastSelect = async (): Promise<
  IGetAnimesFastSelectResponse[]
> => {
  const url = new URL(`/anime/fastSelect`, API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok)
    throw new Error(`getAnimesFastSelect: ${response.statusText}`)

  return response.json()
}

export { getAnimesFastSelect }
