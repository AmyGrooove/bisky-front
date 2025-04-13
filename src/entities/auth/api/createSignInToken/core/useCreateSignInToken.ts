import { useQuery } from '@tanstack/react-query'
import { TUseQueryOptions } from '@shared/types'

import { createSignInToken } from './createSignInToken'

const useCreateSignInToken = (
  options: TUseQueryOptions<typeof createSignInToken> = {},
) => {
  return useQuery({
    ...options,
    queryKey: ['auth', 'createSignInToken'],
    queryFn: () => createSignInToken(),
  })
}

export { useCreateSignInToken }
