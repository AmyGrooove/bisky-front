import { useQuery } from '@tanstack/react-query'
import { searchAnimeAndUsers } from './searchAnimeAndUsers'

const useSearchAnimeAndUsers = (searchValue: string) => {
  return useQuery({
    queryKey: ['search', searchValue],
    queryFn: ({ signal }) => searchAnimeAndUsers(searchValue, false, signal),
    enabled: searchValue !== '',
  })
}

export { useSearchAnimeAndUsers }
