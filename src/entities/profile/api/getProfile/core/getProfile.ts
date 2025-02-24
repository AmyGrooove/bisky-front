'use server'

import { ENV } from '@shared/static'

import { IGetProfileResponse } from '../types/IGetProfileResponse'
import { getNormalCookieHeader } from '@shared/utils/functions'
import { cookies } from 'next/headers'

const getProfile = async (username: string): Promise<IGetProfileResponse> => {
  const url = new URL(`/profile/${username}`, ENV.API_URL)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: await getNormalCookieHeader(cookies),
    },
    credentials: 'include',
    next: { tags: ['user'], revalidate: 300 },
  })

  if (!response.ok) throw new Error(`getProfile: ${response.statusText}`)

  return response.json()
}

export { getProfile }
