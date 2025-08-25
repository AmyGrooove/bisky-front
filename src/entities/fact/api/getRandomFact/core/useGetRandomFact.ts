import { TUseQueryOptions } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

import { getRandomFact } from './getRandomFact'

const useGetRandomFact = (
  options: TUseQueryOptions<typeof getRandomFact> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['fact', 'random'],
    queryFn: ({ signal }) =>
      getRandomFact({
        optionsGet: { signal },
      }),
  })
}

export { useGetRandomFact }
