import { useGetAnimesFastSelect } from '@entities/anime/api/getAnimesFastSelect'
import { useSession } from '@entities/auth/hooks/useSession'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { isNil } from '@shared/utils/functions'

import { IStateSnapshot } from '../types/IStateSnapshot'

const useFastSelectPage = () => {
  const { push } = useRouter()

  const { user } = useSession()

  const { data = [], isError, isLoading } = useGetAnimesFastSelect()

  const [leftIndex, setLeftIndex] = useState<number | null>(0)
  const [rightIndex, setRightIndex] = useState<number | null>(1)
  const [nextIndex, setNextIndex] = useState(2)
  const [history, setHistory] = useState<IStateSnapshot[]>([])

  const selectAnime = (side: 'left' | 'right') => {
    setHistory((prev) => [...prev, { leftIndex, rightIndex, nextIndex }])

    if (nextIndex < data.length) {
      if (side === 'left') setRightIndex(nextIndex)
      else setLeftIndex(nextIndex)
      setNextIndex((prevIndex) => prevIndex + 1)
    } else {
      if (side === 'left') setRightIndex(null)
      else setLeftIndex(null)
    }
  }

  const goBackInHistory = () => {
    if (history.length === 0) return

    const prev = history[history.length - 1]

    setHistory(history.slice(0, history.length - 1))
    setLeftIndex(prev.leftIndex)
    setRightIndex(prev.rightIndex)
    setNextIndex(prev.nextIndex)
  }

  const championData = useMemo(
    () =>
      leftIndex === null && rightIndex !== null
        ? data[rightIndex]
        : rightIndex === null && leftIndex !== null
          ? data[leftIndex]
          : null,
    [leftIndex, rightIndex, data],
  )

  useEffect(() => {
    if (isError && !isNil(user)) {
      push(`/user/${user?.username}/list?fastSelect=true`)
    }
  }, [isError])

  return {
    data,
    selectAnime,
    goBackInHistory,
    leftIndex,
    rightIndex,
    nextIndex,
    isLoading,
    championData,
    isError,
  }
}

export { useFastSelectPage }
