'use server'

import { ENV } from '@shared/static'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getUserID = async (): Promise<string> => {
  const url = new URL('/account/getUserID', ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['user'], revalidate: 3000 },
  })

  if (!response.ok) throw new Error(`getUserID: ${response.statusText}`)

  return response.json()
}

export { getUserID }
