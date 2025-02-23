import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'
import { IGenreSectionProps } from '../../types/IGenreSectionProps'
import { TResponse } from '@shared/types'
import { useState } from 'react'
import { getAnimesByGenre } from '@entities/genre/api'
import { removeDuplicatesByKey } from '@shared/utils/functions'

const useAnimeCards = (props: IGenreSectionProps) => {
  const {
    data: {
      animes = [],
      genre: { _id },
    },
  } = props

  const [animeCards, setAnimeCards] =
    useState<TResponse<typeof getAnimesByGenre>['animes']>(animes)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [isEnd, setIsEnd] = useState(false)

  const getNewAnimes = async () => {
    if (isLoading) return

    setIsLoading(true)

    getAnimesByGenre(_id, page + 1)
      .then((response) => {
        setAnimeCards((prevData) =>
          removeDuplicatesByKey([...prevData, ...response.animes], '_id'),
        )
        setPage((prevPage) => prevPage + 1)
      })
      .catch(() => setIsEnd(true))
      .finally(() => setIsLoading(false))
  }

  const loadingRef = useInfiniteScroll(getNewAnimes)

  return { animeCards, isEnd, loadingRef }
}

export { useAnimeCards }
