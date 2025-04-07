import { useGetAnimesFastStar } from '@entities/anime/api/getAnimesFastStar'
import { useSession } from '@entities/auth/hooks/useSession'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { getCurrentEstimate } from '../utils/getCurrentEstimate'
import { useSetAnimeFavorite } from '@entities/animeEstimate/api/setAnimeFavorite'
import { useSetAnimeScore } from '@entities/animeEstimate/api/setAnimeScore'
import { isNil } from '@shared/utils/functions'

const useFastStarPage = () => {
  const { push } = useRouter()

  const { user } = useSession()

  const { data = [], isLoading, isError, refetch } = useGetAnimesFastStar()

  const { mutateAsync: setAnimeScore } = useSetAnimeScore(true)
  const { mutateAsync: setAnimeFavorite } = useSetAnimeFavorite(true)

  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)

  const currentAnime = data[currentAnimeIndex] ?? {
    score: 0,
    userListStatus: 'added',
  }

  const [currentScore, setCurrentScore] = useState(5)
  const [isInFavorite, setIsInFavorite] = useState(false)

  const newScore =
    (currentAnime.score * currentAnime.scoreCount + currentScore) /
    (currentAnime.scoreCount + 1)

  const currentEstimate = getCurrentEstimate(currentAnime.userListStatus)

  const setNewAnimeScore = async () => {
    await setAnimeScore({ animeID: currentAnime._id, score: currentScore })
    setCurrentScore(5)
    setCurrentAnimeIndex((prev) => prev + 1)
  }

  const addAnimeInFavorite = async () => {
    setIsInFavorite(!isInFavorite)
    await setAnimeFavorite({
      animeID: currentAnime._id,
      isFavorite: !isInFavorite,
    })
  }

  useEffect(() => {
    if (isError && !isNil(user)) {
      push(`/user/${user?.username}/list?fastStar=true`)
    }

    if (currentAnimeIndex === data.length && !isLoading && !isError) {
      refetch()
      setCurrentAnimeIndex(0)
    }
  }, [currentAnimeIndex, data, isLoading, isError])

  useEffect(() => {
    setIsInFavorite(currentAnime.userIsFavorite)
  }, [currentAnime])

  return {
    currentAnime,
    isLoading,
    isError,
    currentScore,
    setCurrentScore,
    newScore,
    currentEstimate,
    isInFavorite,
    addAnimeInFavorite,
    setNewAnimeScore,
  }
}

export { useFastStarPage }
