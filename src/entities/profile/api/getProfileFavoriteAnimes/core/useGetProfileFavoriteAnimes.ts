import { useQuery } from '@tanstack/react-query'
import { getProfileFavoriteAnimes } from './getProfileFavoriteAnimes'

const useGetProfileFavoriteAnimes = (
  username: string,
  page = 1,
  count = 20,
) => {
  return useQuery({
    queryKey: ['anime', 'user', username, page, count],
    queryFn: ({ signal }) =>
      getProfileFavoriteAnimes(username, page, count, false, signal),
  })
}

export { useGetProfileFavoriteAnimes }
