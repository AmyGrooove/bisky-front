import { useInfiniteScroll } from '@shared/utils/hooks/useInfiniteScroll'
import { IFranchiseSectionProps } from '../../types/IFranchiseSectionProps'
import { TResponse } from '@shared/types'
import { useState } from 'react'
import { getAnimesByFranchise } from '@entities/franchise/api'
import { removeDuplicatesByKey } from '@shared/utils/functions'

const useAnimeCards = (props: IFranchiseSectionProps) => {
  const {
    data: {
      animes = [],
      franchise: { _id },
    },
  } = props

  const [animeCards, setAnimeCards] =
    useState<TResponse<typeof getAnimesByFranchise>['animes']>(animes)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [isEnd, setIsEnd] = useState(false)

  const getNewAnimes = async () => {
    if (isLoading) return

    setIsLoading(true)

    getAnimesByFranchise(_id, page + 1)
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
