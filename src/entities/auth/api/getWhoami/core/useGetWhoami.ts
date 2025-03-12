import { useQuery } from '@tanstack/react-query'
import { getWhoami } from './getWhoami'
import { useEffect } from 'react'

const useGetWhoami = () => {
  const query = useQuery({
    queryKey: ['auth', 'whoami'],
    queryFn: ({ signal }) => getWhoami(false, signal),
  })

  useEffect(() => {
    if (query.error) window.location.reload()
  }, [query.error])

  return query
}

export { useGetWhoami }
