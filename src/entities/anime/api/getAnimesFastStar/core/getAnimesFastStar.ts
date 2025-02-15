import { API_URL } from '@shared/static'

import { IGetAnimesFastStarResponse } from '../types/IGetAnimesFastStarResponse'

const getAnimesFastStar = async (): Promise<IGetAnimesFastStarResponse[]> => {
  const url = new URL(`/anime/fastStar`, API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`getAnimesFastStar: ${response.statusText}`)

  return response.json()
}

export { getAnimesFastStar }
