import { useQuery } from '@tanstack/react-query'

import { createSignInToken } from './createSignInToken'

const useCreateSignInToken = (isDisabled = false) => {
  const query = useQuery({
    enabled: !isDisabled,
    queryKey: ['auth', 'createSignInToken'],
    queryFn: () => createSignInToken(),
  })

  return query
}

export { useCreateSignInToken }
