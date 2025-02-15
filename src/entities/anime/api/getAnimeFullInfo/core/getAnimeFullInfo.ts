import { API_URL } from '@shared/static'

import { IGetAnimeFullInfoResponse } from '../types/IGetAnimeFullInfoResponse'

const getAnimeFullInfo = async (
  animeID: string,
): Promise<IGetAnimeFullInfoResponse> => {
  const url = new URL(`/anime/fullInfo/${animeID}`, API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`getAnimeFullInfo: ${response.statusText}`)

  return response.json()
}

export { getAnimeFullInfo }
