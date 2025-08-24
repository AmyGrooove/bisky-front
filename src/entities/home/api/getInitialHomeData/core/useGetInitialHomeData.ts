import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { IGetInitialHomeDataResponse } from '../types/IGetInitialHomeDataResponse'

import { getInitialHomeData } from './getInitialHomeData'

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
