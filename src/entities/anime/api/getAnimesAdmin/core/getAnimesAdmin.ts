'use server'

import { ENV } from '@shared/static'

import { IGetAnimesAdminResponse } from '../types/IGetAnimesAdminResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getAnimesAdmin = async (): Promise<IGetAnimesAdminResponse[]> => {
  const url = new URL(`/anime/allAnimes`, ENV.API_URL)

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

  if (!response.ok) throw new Error(`getAnimesAdmin: ${response.statusText}`)

  return response.json()
}

export { getAnimesAdmin }
