import { useQuery } from '@tanstack/react-query'

import { getAnimesByStudio } from './getAnimesByStudio'

const useGetAnimesByStudio = (studioID: string, page = 1, count = 40) => {
  return useQuery({
    queryKey: ['studio', studioID, 'animes'],
    queryFn: ({ signal }) =>
      getAnimesByStudio(studioID, page, count, false, signal),
  })
}

export { useGetAnimesByStudio }
