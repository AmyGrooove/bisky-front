import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'
import { IStudioSectionProps } from '../../types/IStudioSectionProps'
import { TResponse } from '@shared/types'
import { useState } from 'react'
import { getAnimesByStudio } from '@entities/studio/api'
import { removeDuplicatesByKey } from '@shared/utils/functions'

const useAnimeCards = (props: IStudioSectionProps) => {
  const {
    data: {
      animes = [],
      studio: { _id },
    },
  } = props

  const [animeCards, setAnimeCards] =
    useState<TResponse<typeof getAnimesByStudio>['animes']>(animes)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [isEnd, setIsEnd] = useState(false)

  const getNewAnimes = async () => {
    if (isLoading) return

    setIsLoading(true)

    getAnimesByStudio(_id, page + 1)
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
