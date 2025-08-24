import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetCollectionMainInfoResponse } from '../types/IGetCollectionMainInfoResponse'

import { getCollectionMainInfo } from './getCollectionMainInfo'

const useGetCollectionMainInfo = (
  collectionID: string,
  options: TUseQueryOptions<typeof getCollectionMainInfo> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['collection', collectionID],
    queryFn: ({ signal }) =>
      getCollectionMainInfo({
        params: { ID: collectionID },
        optionsGet: { signal },
      }),
  })
}

export { useGetCollectionMainInfo }
