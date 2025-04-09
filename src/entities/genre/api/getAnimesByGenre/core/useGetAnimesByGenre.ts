import { useQuery } from '@tanstack/react-query'

import { getAnimesByGenre } from './getAnimesByGenre'

const useGetAnimesByGenre = (genreID: string, page = 1, count = 40) => {
  return useQuery({
    queryKey: ['genre', genreID, 'animes'],
    queryFn: ({ signal }) => getAnimesByGenre(genreID, page, count, { signal }),
  })
}

export { useGetAnimesByGenre }
