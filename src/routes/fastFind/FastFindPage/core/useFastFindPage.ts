import { useGetAnimeMiniInfo } from '@entities/anime/api/getAnimeMiniInfo'
import { useGetAnimesFastFind } from '@entities/anime/api/getAnimesFastFind'
import { useAddAnimeToSkip } from '@entities/animeEstimate/api/addAnimeToSkip'
import { useSetAnimeEstimate } from '@entities/animeEstimate/api/setAnimeEstimate'
import { TListStatus } from '@entities/animeEstimate/types'
import { useSession } from '@entities/auth/hooks/useSession'
import { isNil } from '@shared/utils/functions'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const useFastFindPage = () => {
  const { push } = useRouter()

  const { user } = useSession()

  const { data: fastFindList, isLoading: isFastFindLoading } =
    useGetAnimesFastFind()

  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)
  const [previousSelectedStatuses, setPreviousSelectedStatuses] = useState<
    (TListStatus | 'skipped')[]
  >([])
  const [selectedStatus, setSelectedStatus] = useState<
    TListStatus | 'skipped' | null
  >(null)

  const { data = null, isLoading: isAnimeInfoLoading } = useGetAnimeMiniInfo(
    fastFindList?.[currentAnimeIndex]?._id ?? '',
  )

  const { mutateAsync: addAnimeToSkip } = useAddAnimeToSkip(true)
  const { mutateAsync: setAnimeEstimate } = useSetAnimeEstimate(true)

  const animesCount = String(
    Number(fastFindList?.length ?? '?') - currentAnimeIndex,
  )
  const isBackButtonDisabled = currentAnimeIndex === 0

  const currentAnimeHref = `/anime/${data?._id}`

  const setAnimeEstimateHandler = async (
    animeEstimate: TListStatus | 'skipped' | null,
  ) => {
    if (isNil(data) || isNil(animeEstimate)) return

    setSelectedStatus(animeEstimate)

    setTimeout(async () => {
      if (previousSelectedStatuses[currentAnimeIndex] === animeEstimate) return

      if (isNil(previousSelectedStatuses[currentAnimeIndex]))
        setPreviousSelectedStatuses((prev) => [...prev, animeEstimate])
      else {
        const newPreviousStatuses = previousSelectedStatuses
        previousSelectedStatuses[currentAnimeIndex] = animeEstimate
        setPreviousSelectedStatuses(newPreviousStatuses)
      }

      if (animeEstimate === 'added')
        await setAnimeEstimate({
          animeID: data._id,
          isFastFind: true,
          estimateVariant: 'added',
        })

      if (animeEstimate === 'skipped')
        await addAnimeToSkip({ animeID: data._id, isFastFind: true })

      setCurrentAnimeIndex((prev) => prev + 1)
    }, 100)

    setTimeout(() => setSelectedStatus(null), 800)
  }

  const goBack = () => {
    if (currentAnimeIndex <= 0) return

    setCurrentAnimeIndex((prev) => prev - 1)
  }

  const isMiniInfoLoading = isAnimeInfoLoading || selectedStatus !== null
  const previousListStatus = previousSelectedStatuses[currentAnimeIndex] ?? null

  const isFastFindFullLoading =
    isFastFindLoading || currentAnimeIndex === fastFindList?.length

  useEffect(() => {
    if (currentAnimeIndex === fastFindList?.length) {
      push(`/user/${user?.username}/list?fastFind=true`)
    }
  }, [currentAnimeIndex])

  return {
    data,
    isFastFindFullLoading,
    isMiniInfoLoading,
    currentAnimeHref,
    animesCount,
    isBackButtonDisabled,
    selectedStatus,
    setAnimeEstimateHandler,
    goBack,
    previousListStatus,
  }
}

export { useFastFindPage }
