'use server'

import { ENV } from '@shared/static'

import { IGetAnimesFastStarResponse } from '../types/IGetAnimesFastStarResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getAnimesFastStar = async (): Promise<IGetAnimesFastStarResponse[]> => {
  const url = new URL(`/anime/fastStar`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['anime', 'fast'], revalidate: 300 },
  })

  if (!response.ok) throw new Error(`getAnimesFastStar: ${response.statusText}`)

  return response.json()
}

export { getAnimesFastStar }
