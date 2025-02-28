import { useGetAnimeMiniInfo } from '@entities/anime/api/getAnimeMiniInfo'
import { useGetAnimesFastFind } from '@entities/anime/api/getAnimesFastFind'
import { useAddAnimeToSkip } from '@entities/animeEstimate/api/addAnimeToSkip'
import { useSetAnimeEstimate } from '@entities/animeEstimate/api/setAnimeEstimate'
import { TListStatus } from '@entities/animeEstimate/types'
import { isNil } from '@shared/utils/functions'
import { useState } from 'react'

const useFastFindPage = () => {
  const { data: fastFindList, isLoading: isFastFindLoading } =
    useGetAnimesFastFind()

  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)
  const [selectedStatus, setSelectedStatus] = useState<
    TListStatus | 'skipped' | null
  >(null)

  const { data = null, isLoading: isAnimeInfoLoading } = useGetAnimeMiniInfo(
    fastFindList?.[currentAnimeIndex]._id ?? '',
  )

  const { mutateAsync: addAnimeToSkip } = useAddAnimeToSkip(true)
  const { mutateAsync: setAnimeEstimate } = useSetAnimeEstimate(true)

  const animesCount = String(
    Number(fastFindList?.length ?? '?') - currentAnimeIndex,
  )
  const isBackButtonDisabled = currentAnimeIndex === 0

  const currentAnimeHref = `/anime/${data?._id}`

  const setAnimeEstimateHandler = async (animeEstimate: TListStatus) => {
    if (isNil(data)) return

    setSelectedStatus(animeEstimate)

    setTimeout(async () => {
      await setAnimeEstimate({
        animeID: data._id,
        isFastFind: true,
        estimateVariant: animeEstimate,
      })
      setCurrentAnimeIndex((prev) => prev + 1)
    }, 100)

    setTimeout(() => setSelectedStatus(null), 800)
  }

  const addAnimeToSkipHandler = async () => {
    if (isNil(data)) return

    setSelectedStatus('skipped')

    setTimeout(async () => {
      await addAnimeToSkip({ animeID: data._id, isFastFind: true })
      setCurrentAnimeIndex((prev) => prev + 1)
    }, 100)

    setTimeout(() => setSelectedStatus(null), 800)
  }

  const isMiniInfoLoading = isAnimeInfoLoading || selectedStatus !== null

  return {
    data,
    isFastFindLoading,
    isMiniInfoLoading,
    currentAnimeHref,
    animesCount,
    isBackButtonDisabled,
    selectedStatus,
    addAnimeToSkipHandler,
    setAnimeEstimateHandler,
  }
}

export { useFastFindPage }
