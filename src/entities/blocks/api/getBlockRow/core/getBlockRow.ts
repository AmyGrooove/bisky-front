'use server'

import { ENV } from '@shared/static'

import { IGetBlockRowResponse } from '../types/IGetBlockRowResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getBlockRow = async (
  excludedGenreIDs: string[] = [],
): Promise<IGetBlockRowResponse> => {
  const url = new URL(`/blocks/row`, ENV.API_URL)
  excludedGenreIDs.forEach((id) =>
    url.searchParams.append('excludedGenreIDs', id),
  )

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

  if (!response.ok) throw new Error(`getBlockRow: ${response.statusText}`)

  return response.json()
}

export { getBlockRow }
