import { createGetFetcher } from '@shared/utils/functions'

import { IGetCollectionAnimeListResponse } from '../types/IGetCollectionAnimeListResponse'

const getCollectionAnimeList =
  createGetFetcher<IGetCollectionAnimeListResponse>(
    '/collection/{ID}/animeList',
  )

export { getCollectionAnimeList }
