'use server'

import { ENV } from '@shared/static'

import { IGetAnimeFullInfoResponse } from '../types/IGetAnimeFullInfoResponse'
import { cookies } from 'next/headers'
import { getNormalCookieHeader } from '@shared/utils/functions'

const getAnimeFullInfo = async (
  animeID: string,
): Promise<IGetAnimeFullInfoResponse> => {
  const url = new URL(`/anime/fullInfo/${animeID}`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['anime'], revalidate: 300 },
  })

  if (!response.ok) throw new Error(`getAnimeFullInfo: ${response.statusText}`)

  return response.json()
}

export { getAnimeFullInfo }
