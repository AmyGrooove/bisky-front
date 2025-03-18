import { useGetAnimesFastStar } from '@entities/anime/api/getAnimesFastStar'
import { useSession } from '@entities/auth/hooks/useSession'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { getCurrentEstimate } from '../utils/getCurrentEstimate'

const useFastStarPage = () => {
  const { push } = useRouter()

  const { user } = useSession()

  const { data = [], isLoading, isError, refetch } = useGetAnimesFastStar()

  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)

  const [currentScore, setCurrentScore] = useState(5)

  const currentAnime = data[currentAnimeIndex] ?? {
    score: 0,
    userListStatus: 'added',
  }

  const newScore =
    (currentAnime.score * currentAnime.scoreCount + currentScore) /
    (currentAnime.scoreCount + 1)

  const currentEstimate = getCurrentEstimate(currentAnime.userListStatus)

  useEffect(() => {
    if (currentAnimeIndex === data.length && !isLoading && !isError) {
      refetch()
      setCurrentAnimeIndex(0)
    }

    if (isError) {
      push(`/user/${user?.username}/list?fastStar=true`)
    }
  }, [currentAnimeIndex, data, isLoading, isError])

  return {
    currentAnime,
    isLoading,
    isError,
    currentScore,
    setCurrentScore,
    newScore,
    currentEstimate,
  }
}

export { useFastStarPage }
