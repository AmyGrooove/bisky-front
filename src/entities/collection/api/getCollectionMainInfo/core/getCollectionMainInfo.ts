import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetCollectionMainInfoResponse } from '../types/IGetCollectionMainInfoResponse'

const getCollectionMainInfo =
  createGetFetcher<IGetCollectionMainInfoResponse>('/collection/{ID}')

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
