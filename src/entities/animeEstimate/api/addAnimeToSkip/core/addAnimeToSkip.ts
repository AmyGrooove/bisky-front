import { API_URL } from '@shared/static'

import { IAddAnimeToSkipRequest } from '../types/IAddAnimeToSkipRequest'

const addAnimeToSkip = async (body: IAddAnimeToSkipRequest): Promise<true> => {
  const url = new URL(`/animeEstimate/skipList`, API_URL)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`addAnimeToSkip: ${response.statusText}`)

  return response.json()
}

export { addAnimeToSkip }
