'use server'

import { ENV } from '@shared/static'

import { IGetAnimesFastFindResponse } from '../types/IGetAnimesFastFindResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getAnimesFastFind = async (): Promise<IGetAnimesFastFindResponse[]> => {
  const url = new URL(`/anime/fastFind`, ENV.API_URL)

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

  if (!response.ok) throw new Error(`getAnimesFastFind: ${response.statusText}`)

  return response.json()
}

export { getAnimesFastFind }
