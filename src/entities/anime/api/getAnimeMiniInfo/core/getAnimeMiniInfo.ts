'use server'

import { ENV } from '@shared/static'

import { IGetAnimeMiniInfoResponse } from '../types/IGetAnimeMiniInfoResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getAnimeMiniInfo = async (
  animeID: string,
): Promise<IGetAnimeMiniInfoResponse> => {
  const url = new URL(`/anime/miniInfo/${animeID}`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['anime'], revalidate: 3000 },
  })

  if (!response.ok) throw new Error(`getAnimeMiniInfo: ${response.statusText}`)

  return response.json()
}

export { getAnimeMiniInfo }
