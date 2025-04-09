import { useQuery } from '@tanstack/react-query'

import { getWhoami } from './getWhoami'

const useGetWhoami = () => {
  const query = useQuery({
    queryKey: ['auth', 'whoami'],
    queryFn: ({ signal }) => getWhoami({ signal }),
  })

  return query
}

export { useGetWhoami }
