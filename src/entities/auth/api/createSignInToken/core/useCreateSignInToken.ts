import { useQuery } from '@tanstack/react-query'
import { createSignInToken } from './createSignInToken'

const useCreateSignInToken = (isDisabled = false) => {
  const query = useQuery({
    enabled: !isDisabled,
    queryKey: ['auth', 'createSignInToken'],
    queryFn: ({ signal }) => createSignInToken(false, signal),
  })

  return query
}

export { useCreateSignInToken }
