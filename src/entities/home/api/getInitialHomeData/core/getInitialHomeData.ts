import { TUseQueryOptions } from '@shared/types'
import { createGetFetcher } from '@shared/utils/functions'
import { useQuery } from '@tanstack/react-query'

import { IGetInitialHomeDataResponse } from '../types/IGetInitialHomeDataResponse'

const getInitialHomeData =
  createGetFetcher<IGetInitialHomeDataResponse>('/home')

const useGetInitialHomeData = (
  options: TUseQueryOptions<typeof getInitialHomeData> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['home'],
    queryFn: ({ signal }) => getInitialHomeData({ optionsGet: { signal } }),
  })
}

export { useGetInitialHomeData }
