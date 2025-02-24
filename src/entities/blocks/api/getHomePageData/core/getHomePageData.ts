'use server'

import { ENV } from '@shared/static'

import { IGetHomePageDataResponse } from '../types/IGetHomePageDataResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getHomePageData = async (): Promise<IGetHomePageDataResponse> => {
  const url = new URL(`/blocks`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['anime', 'studio', 'genre', 'franchise'], revalidate: 300 },
  })

  if (!response.ok) throw new Error(`getHomePageData: ${response.statusText}`)

  return response.json()
}

export { getHomePageData }
