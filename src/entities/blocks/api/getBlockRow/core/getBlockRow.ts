import { API_URL } from '@shared/static'

import { IGetBlockRowResponse } from '../types/IGetBlockRowResponse'

const getBlockRow = async (
  excludedGenreIDs: string[] = [],
): Promise<IGetBlockRowResponse> => {
  const url = new URL(`/blocks/row`, API_URL)
  excludedGenreIDs.forEach((id) =>
    url.searchParams.append('excludedGenreIDs', id),
  )

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include',
  })

  if (!response.ok) throw new Error(`getBlockRow: ${response.statusText}`)

  return response.json()
}

export { getBlockRow }
