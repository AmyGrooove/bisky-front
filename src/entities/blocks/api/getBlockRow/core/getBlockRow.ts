import { ENV } from '@shared/static'

import { IGetBlockRowResponse } from '../types/IGetBlockRowResponse'

const getBlockRow = async (
  excludedGenreIDs: string[] = [],
  skipAuth = false,
  signal?: AbortSignal,
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
      'X-Skip-Auth': String(skipAuth),
    },
    credentials: 'include',
    signal,
  })

  if (!response.ok) throw new Error(`getBlockRow: ${response.statusText}`)

  return response.json()
}

export { getBlockRow }
